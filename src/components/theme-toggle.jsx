"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export function ThemeToggle({ className = "" }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        className={`h-9 w-9 rounded-full border border-border ${className}`}
        aria-hidden
      />
    );
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`flex items-center justify-center rounded-full border border-border p-2 text-foreground hover:bg-muted transition-colors ${className}`}
    >
      <SunIcon className="h-5 w-5 dark:hidden" />
      <MoonIcon className="hidden h-5 w-5 dark:block" />
    </button>
  );
}
