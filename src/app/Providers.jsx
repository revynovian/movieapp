"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className="text-zinc-900 transition-colors duration-300 dark:bg-zinc-900 dark:text-gray-300 bg-slate-100">
        {children}
      </div>
    </ThemeProvider>
  );
}
