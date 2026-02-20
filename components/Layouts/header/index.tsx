"use client";

import { SearchIcon } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { useSidebarContext } from "../sidebar/sidebar-context";
import { MenuIcon } from "./icons";
import { Notification } from "./notification";
import { ThemeToggleSwitch } from "./theme-toggle";
import { UserInfo } from "./user-info";
import { cn } from "@/lib/utils";

export function Header() {
  const { toggleSidebar, isMobile } = useSidebarContext();

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200/80 bg-white/70 px-4 py-4 shadow-sm backdrop-blur-2xl transition-colors duration-500 dark:border-slate-800/80 dark:bg-[#030712]/70 md:px-5 2xl:px-10">

      {/* 1. Mobile Toggle Button - Upgraded to interactive glass */}
      <button
        onClick={toggleSidebar}
        className="rounded-xl border border-slate-200 bg-slate-50/50 p-2 text-slate-500 transition-all hover:scale-105 hover:bg-slate-100 hover:text-sky-500 dark:border-slate-800 dark:bg-[#050b14]/50 dark:text-slate-400 dark:hover:border-sky-500/50 dark:hover:text-sky-400 lg:hidden"
      >
        <MenuIcon />
        <span className="sr-only">Toggle Sidebar</span>
      </button>

      {/* Mobile Logo */}
      {isMobile && (
        <Link href={"/"} className="ml-2 max-[430px]:hidden min-[375px]:ml-4 transition-transform hover:scale-105">
          <Image
            src={"/images/logo/logo-icon.svg"}
            width={32}
            height={32}
            alt="Logo"
            role="presentation"
            className="drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]" // Subtle glow on the mobile icon
          />
        </Link>
      )}

      {/* 2. Upgraded Typography Area */}
      <div className="hidden xl:block">
        <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          Dashboard
        </h1>
        {/* Replaced generic text with high-tech HUD styling */}
        <p className="mt-0.5 text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
          System Operations Active
        </p>
      </div>

      <div className="flex flex-1 items-center justify-end gap-3 min-[375px]:gap-4 lg:gap-5">

        {/* 3. Futuristic Search Bar */}
        <div className="relative w-full max-w-[320px] group hidden sm:block">
          <input
            type="search"
            placeholder="Search network..."
            className={cn(
              "flex w-full items-center gap-3.5 rounded-full py-2.5 pl-[48px] pr-5 text-sm font-medium outline-none transition-all duration-300",
              // Light Mode: Clean, slightly recessed
              "border-2 border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400",
              "focus:border-sky-500 focus:bg-white focus:shadow-[0_0_20px_rgba(56,189,248,0.15)]",
              // Dark Mode: Deep recessed space, glowing cyan focus
              "dark:border-slate-800/80 dark:bg-[#050b14]/80 dark:text-white dark:placeholder:text-slate-500",
              "dark:focus:border-sky-500 dark:focus:bg-[#050b14] dark:focus:shadow-[0_0_20px_rgba(56,189,248,0.15)]",
              "hover:dark:border-slate-700"
            )}
          />
          {/* Icon reacts when you click the input */}
          <SearchIcon className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400 transition-colors duration-300 group-focus-within:text-sky-500 dark:text-slate-500 dark:group-focus-within:text-sky-400" />
        </div>

        {/* Action Icons Wrapper - Added a divider line for visual structure */}
        <div className="flex items-center gap-2 border-l border-slate-200 pl-3 dark:border-slate-800 min-[375px]:gap-3 min-[375px]:pl-4">
          <ThemeToggleSwitch />
          {/* <Notification /> */}
        </div>

        <div className="shrink-0 ml-1">
          <UserInfo />
        </div>
      </div>
    </header>
  );
}