"use client";

import { useSyncExternalStore } from "react";
import { THEME_STORAGE_KEY } from "@/lib/theme";

function subscribe(onChange: () => void) {
  const root = document.documentElement;
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

  function syncSystemTheme() {
    if (root.dataset.themePreference === "system") {
      root.dataset.theme = systemTheme.matches ? "dark" : "light";
    }
  }

  function syncSavedTheme(event: StorageEvent) {
    if (event.key !== THEME_STORAGE_KEY && event.key !== null) return;
    const preference = event.newValue;
    root.dataset.themePreference =
      preference === "dark" || preference === "light" ? preference : "system";
    if (root.dataset.themePreference === "system") syncSystemTheme();
    else root.dataset.theme = root.dataset.themePreference;
  }

  const observer = new MutationObserver(onChange);
  observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
  systemTheme.addEventListener("change", syncSystemTheme);
  window.addEventListener("storage", syncSavedTheme);
  syncSystemTheme();

  return () => {
    observer.disconnect();
    systemTheme.removeEventListener("change", syncSystemTheme);
    window.removeEventListener("storage", syncSavedTheme);
  };
}

function getSnapshot() {
  return document.documentElement.dataset.theme === "dark";
}

function getServerSnapshot() {
  return null;
}

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  function toggleTheme() {
    const theme = isDark ? "light" : "dark";
    document.documentElement.dataset.themePreference = theme;
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // The toggle still works for this visit when browser storage is unavailable.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Dark mode"
      aria-pressed={isDark === true}
      disabled={isDark === null}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-line text-ink hover:border-accent hover:text-accent disabled:cursor-wait"
    >
      <svg
        className="theme-icon-moon size-[18px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z" />
      </svg>
      <svg
        className="theme-icon-sun size-[18px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
      </svg>
    </button>
  );
}
