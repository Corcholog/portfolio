/**
 * Keeps the reading position when the language changes.
 *
 * Switching language is a full page load, so before leaving we store which
 * section is at the top of the screen and how far into it we are (a fraction,
 * because the same section has a slightly different height in the other
 * language). `scrollRestoreScript` runs at the end of the next page's body and
 * scrolls to the same place. Storage is per tab and read once.
 */

const KEY = "scroll-restore";

/** Distance from the top of the viewport that counts as "where I am reading". */
const READING_LINE = 96;

/** Stores the current position. Returns false if it could not (no storage, no sections). */
export function saveScrollPosition(): boolean {
  try {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]"),
    );
    let current: HTMLElement | undefined = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= READING_LINE)
        current = section;
      else break;
    }
    if (!current) return false;

    const rect = current.getBoundingClientRect();
    const fraction = Math.min(
      1,
      Math.max(0, (READING_LINE - rect.top) / rect.height),
    );
    sessionStorage.setItem(
      KEY,
      JSON.stringify({ id: current.id, f: fraction }),
    );
    return true;
  } catch {
    return false;
  }
}

/** Inline script (plain JS) that undoes `saveScrollPosition` on the new page. */
export const scrollRestoreScript = `try{var r=sessionStorage.getItem("${KEY}");if(r){sessionStorage.removeItem("${KEY}");var p=JSON.parse(r);var go=function(){var s=document.getElementById(p.id);if(!s)return;var b=s.getBoundingClientRect();window.scrollTo({top:Math.max(0,b.top+window.scrollY+p.f*b.height-${READING_LINE}),behavior:"instant"})};go();addEventListener("load",go)}}catch(e){}`;
