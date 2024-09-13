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
        <HiMoon
          onClick={() => setTheme("light")}
          className="cursor-pointer text-md sm:text-xl hover:text-red-700 text-zinc-400"
        />
      ) : (
        <HiSun
          onClick={() => setTheme("dark")}
          className="cursor-pointer text-md sm:text-xl hover:text-red-700 text-zinc-700"
        />
      )}
    </div>
  );
}
