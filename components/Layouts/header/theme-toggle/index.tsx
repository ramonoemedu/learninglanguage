import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "./icons";
import { motion } from "framer-motion";

const THEMES = [
  {
    name: "light",
    Icon: Sun,
  },
  {
    name: "dark",
    Icon: Moon,
  },
];

export function ThemeToggleSwitch() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "group relative flex items-center rounded-full p-1 outline-none transition-colors duration-300",
        // Light Mode: Recessed glass track
        "bg-slate-200/60 border border-slate-300/50 shadow-inner hover:bg-slate-200/80",
        // Dark Mode: Deep space recessed track
        "dark:bg-slate-900/60 dark:border-slate-800/80 dark:hover:bg-slate-900/80"
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span aria-hidden className="relative flex gap-1">

        {/* The Sliding "Puck" Indicator */}
        <motion.span
          layout
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          animate={{ x: isDark ? 36 : 0 }}
          className={cn(
            "absolute left-0 top-0 size-8 rounded-full",
            // Light Mode Puck: Clean white, sharp drop shadow
            "bg-white border border-slate-200 shadow-sm",
            // Dark Mode Puck: Deep black, glowing cyan border and ambient shadow
            "dark:bg-[#050b14] dark:border-sky-500/50 dark:shadow-[0_0_15px_rgba(56,189,248,0.3)]"
          )}
        />

        {/* The Icons */}
        {THEMES.map(({ name, Icon }) => {
          const isActive = resolvedTheme === name;

          return (
            <span
              key={name}
              className={cn(
                "relative z-10 grid size-8 place-items-center rounded-full transition-colors duration-300",
                // Active vs Inactive colors
                isActive
                  ? name === "dark"
                    ? "text-sky-400" // Glowing cyan for active Moon
                    : "text-sky-500" // Strong blue for active Sun
                  : "text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
              )}
            >
              <Icon className="size-4" />
            </span>
          )
        })}
      </span>
    </button>
  );
}