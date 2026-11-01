"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import "./ImageLightbox.css";

const VIEW_TRANSITION_NAME = "project-screenshot";
const DECODE_TIMEOUT_MS = 150;

let activeThumbnail: HTMLImageElement | null = null;
let scrollLockCount = 0;
let savedScrollY = 0;

function activateThumbnail(img: HTMLImageElement) {
  if (activeThumbnail && activeThumbnail !== img) {
    activeThumbnail.style.viewTransitionName = "none";
  }
  activeThumbnail = img;
  img.style.viewTransitionName = VIEW_TRANSITION_NAME;
}

function deactivateThumbnail(img: HTMLImageElement) {
  img.style.viewTransitionName = "none";
  if (activeThumbnail === img) {
    activeThumbnail = null;
  }
}

function lockScroll() {
  if (scrollLockCount === 0) {
    document.documentElement.classList.add("overflow-hidden");
    document.body.classList.add("overflow-hidden");
  }
  scrollLockCount++;
}

function unlockScroll() {
  scrollLockCount = Math.max(0, scrollLockCount - 1);
  if (scrollLockCount === 0) {
    document.documentElement.classList.remove("overflow-hidden");
    document.body.classList.remove("overflow-hidden");
  }
}

function restoreScroll() {
  if (typeof window === "undefined") return;
  window.scrollTo({ top: savedScrollY, behavior: "instant" });
}

async function decodeWithTimeout(img: HTMLImageElement, timeoutMs: number) {
  try {
    await Promise.race([
      img.decode(),
      new Promise<void>((_, reject) => {
        setTimeout(() => reject(new Error("decode timeout")), timeoutMs);
      }),
    ]);
  } catch {
    // Proceed even if decoding isn't ready in time.
  }
}

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  /** Accessible name for the trigger button, e.g. "View full size". */
  label: string;
  /** Accessible name for the close button, e.g. "Close". */
  closeLabel: string;
  /** Project title used to disambiguate the trigger button, e.g. "LIDE 2". */
  context: string;
};

export function ImageLightbox({
  src,
  alt,
  width,
  height,
  sizes,
  label,
  closeLabel,
  context,
}: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerBtnRef = useRef<HTMLButtonElement>(null);
  const thumbnailImgRef = useRef<HTMLImageElement>(null);
  const fullImgRef = useRef<HTMLImageElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const closingWithTransitionRef = useRef(false);

  const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const supportsViewTransition = () =>
    typeof document !== "undefined" && "startViewTransition" in document;

  const warmFullImage = () => {
    fullImgRef.current?.decode().catch(() => {});
  };

  const open = async () => {
    const dialog = dialogRef.current;
    const thumbImg = thumbnailImgRef.current;
    const fullImg = fullImgRef.current;
    if (!dialog || dialog.open || !thumbImg || !fullImg) return;

    savedScrollY = window.scrollY;

    const doOpen = () => {
      deactivateThumbnail(thumbImg);
      fullImg.style.viewTransitionName = VIEW_TRANSITION_NAME;
      lockScroll();
      dialog.showModal();
      // Focus the close button without scrolling the page.
      closeBtnRef.current?.focus({ preventScroll: true });
    };

    activateThumbnail(thumbImg);

    if (!supportsViewTransition() || prefersReducedMotion()) {
      doOpen();
      return;
    }

    await decodeWithTimeout(fullImg, DECODE_TIMEOUT_MS);

    document.startViewTransition(() => {
      doOpen();
    });
  };

  const close = () => {
    const dialog = dialogRef.current;
    const thumbImg = thumbnailImgRef.current;
    const fullImg = fullImgRef.current;
    if (!dialog || !dialog.open || !thumbImg || !fullImg) return;

    const doClose = () => {
      fullImg.style.viewTransitionName = "none";
      dialog.close();
      // Re-focus the trigger without scrolling, then force the captured
      // scroll position so the View Transition snapshot lines up with the
      // thumbnail's real location.
      triggerBtnRef.current?.focus({ preventScroll: true });
      restoreScroll();
      activateThumbnail(thumbImg);
    };

    if (!supportsViewTransition() || prefersReducedMotion()) {
      doClose();
      unlockScroll();
      deactivateThumbnail(thumbImg);
      return;
    }

    closingWithTransitionRef.current = true;
    const transition = document.startViewTransition(() => {
      doClose();
    });

    transition.finished
      .catch(() => {})
      .finally(() => {
        closingWithTransitionRef.current = false;
        restoreScroll();
        unlockScroll();
        deactivateThumbnail(thumbImg);
      });
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    const thumbImg = thumbnailImgRef.current;
    const fullImg = fullImgRef.current;

    if (thumbImg) thumbImg.style.viewTransitionName = "none";
    if (fullImg) fullImg.style.viewTransitionName = "none";

    if (!dialog) return;

    const handleClose = () => {
      if (!closingWithTransitionRef.current) {
        unlockScroll();
        if (thumbImg) deactivateThumbnail(thumbImg);
      }
    };

    const handleCancel = (event: Event) => {
      event.preventDefault();
      // Defer so the view transition is not started from inside the cancel event.
      setTimeout(close, 0);
    };

    dialog.addEventListener("close", handleClose);
    dialog.addEventListener("cancel", handleCancel);
    return () => {
      dialog.removeEventListener("close", handleClose);
      dialog.removeEventListener("cancel", handleCancel);
      unlockScroll();
      if (thumbImg) deactivateThumbnail(thumbImg);
      if (fullImg) fullImg.style.viewTransitionName = "none";
    };
    // `close` only references refs and module-level state, so it's stable.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    // The dialog now wraps the photo in a full-height transparent panel, so a
    // strict `target === dialog` check would leave a dead zone around the
    // photo. Close on any click that isn't on the image or a control.
    const target = event.target as Element;
    if (!target.closest("img, button")) {
      close();
    }
  };

  return (
    <>
      <button
        ref={triggerBtnRef}
        type="button"
        onClick={open}
        onPointerEnter={warmFullImage}
        onFocus={warmFullImage}
        aria-label={`${label}: ${context}`}
        className="group/img block w-full cursor-zoom-in rounded-2xl"
      >
        <span className="block overflow-hidden rounded-xl">
          <Image
            ref={thumbnailImgRef}
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            className="h-auto w-full motion-safe:transition motion-safe:duration-500 motion-safe:group-hover/img:scale-[1.03]"
          />
        </span>
      </button>

      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        className="image-lightbox backdrop:bg-scrim m-auto max-h-[90dvh] max-w-[90dvw] overflow-hidden bg-transparent p-0 shadow-none"
      >
        <div className="flex min-h-[90dvh] items-center justify-center">
          <div className="relative inline-block">
            <button
              ref={closeBtnRef}
              type="button"
              onClick={close}
              aria-label={closeLabel}
              className="border-line-strong bg-chip text-chip-text hover:border-accent hover:text-accent focus-visible:border-accent shadow-cozy absolute top-2 right-2 z-10 inline-flex size-11 items-center justify-center rounded-full border motion-safe:transition-colors"
            >
              <X aria-hidden className="size-5" />
            </button>
            <Image
              ref={fullImgRef}
              src={src}
              alt=""
              width={width}
              height={height}
              sizes="90dvw"
              loading="lazy"
              style={{
                width: `min(90dvw, calc(90dvh * ${width / height}))`,
                height: "auto",
                aspectRatio: `${width} / ${height}`,
              }}
              className="border-line shadow-lift box-border block rounded-xl border object-contain"
            />
          </div>
        </div>
      </dialog>
    </>
  );
}
