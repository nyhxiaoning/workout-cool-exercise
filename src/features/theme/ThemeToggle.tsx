"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => {
    console.log("resolvedTheme:", resolvedTheme);
  }, [resolvedTheme]);

  return (
    <div className="tooltip tooltip-bottom" data-tip={resolvedTheme === "light" ? "Dark mode" : "Light mode"}>
      <Button
        className="hover:bg-slate-200 rounded-full p-2 pr-2"
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        variant="ghost"
      >
        {resolvedTheme === "light" ? (
          <MoonIcon className="text-blue-500 dark:text-blue-400" />
        ) : (
          <SunIcon className="text-blue-500 dark:text-blue-400" />
        )}
      </Button>
    </div>
  );
}
