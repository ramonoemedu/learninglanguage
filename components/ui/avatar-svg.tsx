"use client";

import { cn } from "@/lib/utils";

interface AvatarSVGProps {
  className?: string;
}

export function AvatarSVG({ className }: AvatarSVGProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-full overflow-hidden group",
        // The container acts as the deep space / glass background
        "bg-gradient-to-br from-slate-100 to-slate-200 dark:from-[#040812] dark:to-[#0a1628]",
        "border border-slate-300/50 dark:border-sky-500/20",
        "shadow-inner dark:shadow-[inset_0_0_20px_rgba(56,189,248,0.15)]",
        className
      )}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* ============================== */}
        {/* 1. BACKGROUND AMBIENT AURA     */}
        {/* ============================== */}
        <circle
          cx="50" cy="50" r="50"
          fill="url(#ambient-glow)"
          className="opacity-40 dark:opacity-60 animate-pulse"
        />

        {/* ============================== */}
        {/* 2. ORBITING DATA RINGS         */}
        {/* ============================== */}
        {/* Outer slow ring */}
        <circle
          cx="50" cy="50" r="42"
          stroke="url(#ring-gradient)"
          strokeWidth="1"
          strokeDasharray="4 8"
          strokeLinecap="round"
          className="animate-[spin_8s_linear_infinite] origin-center opacity-50 dark:opacity-80"
        />
        {/* Inner fast tracking ring */}
        <circle
          cx="50" cy="50" r="35"
          stroke="url(#ring-gradient-reverse)"
          strokeWidth="1.5"
          strokeDasharray="15 30 5 20"
          strokeLinecap="round"
          className="animate-[spin_4s_linear_reverse_infinite] origin-center opacity-30 dark:opacity-100"
        />

        {/* ============================== */}
        {/* 3. THE HOLOGRAPHIC SILHOUETTE  */}
        {/* ============================== */}
        <g className="drop-shadow-[0_0_10px_rgba(56,189,248,0.4)]">
          {/* Head / Core */}
          <circle
            cx="50" cy="38" r="14"
            fill="url(#avatar-body-gradient)"
          />
          {/* Internal Core Spark (The "Eye") */}
          <circle
            cx="50" cy="38" r="4"
            fill="#ffffff"
            className="opacity-80 dark:opacity-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] animate-pulse"
          />

          {/* Body / Data Mantle */}
          <path
            d="M18 90 C 18 65, 30 56, 50 56 C 70 56, 82 65, 82 90"
            fill="url(#avatar-body-gradient)"
            stroke="url(#ring-gradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>

        {/* ============================== */}
        {/* 4. HIGH-TECH GRADIENT DEFS     */}
        {/* ============================== */}
        <defs>
          {/* Soft pulsing background glow */}
          <radialGradient id="ambient-glow" cx="50" cy="50" r="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="currentColor" className="text-sky-400 dark:text-sky-500" stopOpacity="0.4" />
            <stop offset="1" stopColor="currentColor" className="text-sky-400 dark:text-sky-500" stopOpacity="0" />
          </radialGradient>

          {/* The glassmorphism body fill */}
          <linearGradient id="avatar-body-gradient" x1="50" y1="20" x2="50" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="currentColor" className="text-slate-400 dark:text-sky-300" stopOpacity="0.9" />
            <stop offset="1" stopColor="currentColor" className="text-slate-300 dark:text-blue-600" stopOpacity="0.2" />
          </linearGradient>

          {/* Glowing ring gradients */}
          <linearGradient id="ring-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="currentColor" className="text-sky-400 dark:text-sky-400" stopOpacity="1" />
            <stop offset="0.5" stopColor="currentColor" className="text-sky-400 dark:text-sky-500" stopOpacity="0" />
            <stop offset="1" stopColor="currentColor" className="text-indigo-400 dark:text-indigo-500" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="ring-gradient-reverse" x1="100" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="currentColor" className="text-indigo-400 dark:text-indigo-400" stopOpacity="1" />
            <stop offset="0.5" stopColor="currentColor" className="text-sky-400 dark:text-sky-500" stopOpacity="0" />
            <stop offset="1" stopColor="currentColor" className="text-sky-300 dark:text-sky-300" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}