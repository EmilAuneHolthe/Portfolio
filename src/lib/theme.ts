export const THEME_STORAGE_KEY = "portfolio-theme";

// Runs in <head> before the body is painted. Only static, trusted code goes here.
export const themeScript = `(() => {
  const root = document.documentElement;
  let preference = "system";
  try {
    const saved = localStorage.getItem("${THEME_STORAGE_KEY}");
    if (saved === "light" || saved === "dark") preference = saved;
  } catch {}
  root.dataset.themePreference = preference;
  root.dataset.theme = preference === "system"
    ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    : preference;
})();`;
