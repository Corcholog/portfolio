/** Background tokens (`--bg`) for both themes, shared with the mobile browser chrome. */
export const THEME_COLORS = { dark: "#1c1114", light: "#fff5e4" } as const;

/** Applies the saved theme before first paint so there is no flash of the wrong one. */
export const themeScript = `try{var c=${JSON.stringify(THEME_COLORS)},t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t;var m=document.querySelector('meta[name="theme-color"]')||(document.head||document.documentElement).appendChild(document.createElement("meta"));m.name="theme-color";m.content=c[t==="light"?"light":"dark"]}catch(e){}`;
