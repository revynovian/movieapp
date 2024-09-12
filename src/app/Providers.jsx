"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className="min-h-screen select-none text-gray-950 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-200">
        {children}
      </div>
    </ThemeProvider>
  );
}
