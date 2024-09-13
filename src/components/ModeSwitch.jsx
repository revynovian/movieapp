"use client";

import { HiMoon } from "react-icons/hi2";
import { HiSun } from "react-icons/hi2";

import { useTheme } from "next-themes";

export default function ModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <HiSun
          onClick={() => setTheme("light")}
          className="cursor-pointer text-xl hover:text-red-500 text-slate-300"
        />
      ) : (
        <HiMoon
          onClick={() => setTheme("dark")}
          className="cursor-pointer text-xl hover:text-red-500 text-slate-600"
        />
      )}
    </div>
  );
}
