"use client";

import { ChevronUpIcon } from "@/assets/icons";
import {
  Dropdown,
  DropdownContent,
  DropdownTrigger,
} from "@/components/ui/dropdown";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { LogOutIcon, SettingsIcon, UserIcon } from "./icons";
import { AvatarSVG } from "@/components/ui/avatar-svg";

// 1. Import your auth store!
import { useUserStore } from '@/lib/stores/authStore';
// Make sure you import your Supabase client if you are handling logout here
import { createClient } from '@/lib/supabase/client';
import { useRouter } from "next/navigation";

export function UserInfo() {
  const [isOpen, setIsOpen] = useState(false);

  // 2. Pull the real user from your global store
  const { user, setUser } = useUserStore();
  const router = useRouter();
  const supabase = createClient();

  // 3. Create fallbacks just in case the data is still loading
  // Adjust 'user?.name' to match your DB structure (e.g., user?.user_metadata?.full_name if using raw Supabase)
  const displayName = user?.name || "AI Operator";
  const displayEmail = user?.email || "Authenticating...";

  // Optional: Handle the real logout action
  const handleLogout = async () => {
    setIsOpen(false);
    await supabase.auth.signOut();
    setUser(null); // Clear the store
    router.push("/login"); // Send them back to the glowing login page
  };

  return (
    <Dropdown isOpen={isOpen} setIsOpen={setIsOpen}>
      <DropdownTrigger className="group rounded-full align-middle outline-none transition-all focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#030712]">
        <span className="sr-only">My Account</span>

        <figure className="flex items-center gap-3">
          <div className="relative rounded-full p-[2px] transition-all duration-300 group-hover:bg-gradient-to-tr group-hover:from-sky-500 group-hover:to-blue-600 dark:group-hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]">
            <div className="rounded-full bg-white dark:bg-[#050b14] p-[2px] overflow-hidden">
              <AvatarSVG className="size-10" />
            </div>
          </div>

          <figcaption className="flex items-center gap-1.5 font-medium text-slate-700 transition-colors group-hover:text-sky-500 dark:text-slate-300 dark:group-hover:text-sky-400 max-[1024px]:sr-only">
            {/* Render the REAL name */}
            <span className="text-sm font-semibold tracking-tight">{displayName}</span>

            <ChevronUpIcon
              aria-hidden
              className={cn(
                "size-4 rotate-180 transition-transform duration-300 ease-out",
                isOpen && "rotate-0 text-sky-500 dark:text-sky-400",
              )}
              strokeWidth={2}
            />
          </figcaption>
        </figure>
      </DropdownTrigger>

      <DropdownContent
        className="mt-2 border border-slate-200/80 bg-white/80 backdrop-blur-2xl shadow-xl transition-all dark:border-slate-800/80 dark:bg-[#050b14]/90 dark:shadow-[0_10px_40px_-10px_rgba(56,189,248,0.15)] min-[230px]:min-w-[17.5rem] rounded-2xl overflow-hidden"
        align="end"
      >
        <h2 className="sr-only">User information</h2>

        <figure className="flex items-center gap-3.5 px-5 py-4 bg-slate-50/50 dark:bg-white/[0.02]">
          <AvatarSVG className="size-12 ring-2 ring-slate-200 dark:ring-slate-800 rounded-full" />

          <figcaption className="flex flex-col justify-center">
            {/* Render the REAL name */}
            <div className="text-sm font-bold tracking-tight text-slate-900 dark:text-white">
              {displayName}
            </div>
            {/* Render the REAL email */}
            <div className="mt-0.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {displayEmail}
            </div>
          </figcaption>
        </figure>

        <hr className="border-slate-200/50 dark:border-slate-800/50" />

        <div className="p-2 space-y-1">
          <Link
            href={"/profile"}
            onClick={() => setIsOpen(false)}
            className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-300 hover:bg-sky-50 dark:hover:bg-sky-500/10"
          >
            <UserIcon className="size-5 text-slate-400 transition-colors group-hover:text-sky-500 dark:text-slate-500 dark:group-hover:text-sky-400" />
            <span className="text-sm font-medium text-slate-600 transition-colors group-hover:text-sky-600 dark:text-slate-300 dark:group-hover:text-sky-400">
              View profile
            </span>
          </Link>

          <Link
            href={"/pages/settings"}
            onClick={() => setIsOpen(false)}
            className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-300 hover:bg-sky-50 dark:hover:bg-sky-500/10"
          >
            <SettingsIcon className="size-5 text-slate-400 transition-colors group-hover:text-sky-500 dark:text-slate-500 dark:group-hover:text-sky-400" />
            <span className="text-sm font-medium text-slate-600 transition-colors group-hover:text-sky-600 dark:text-slate-300 dark:group-hover:text-sky-400">
              Account Settings
            </span>
          </Link>
        </div>

        <hr className="border-slate-200/50 dark:border-slate-800/50" />

        <div className="p-2">
          {/* 4. Wire up the actual logout function */}
          <button
            className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-300 hover:bg-rose-50 dark:hover:bg-rose-500/10"
            onClick={handleLogout}
          >
            <LogOutIcon className="size-5 text-slate-400 transition-colors group-hover:text-rose-500 dark:text-slate-500 dark:group-hover:text-rose-400" />
            <span className="text-sm font-medium text-slate-600 transition-colors group-hover:text-rose-600 dark:text-slate-300 dark:group-hover:text-rose-400">
              Log out
            </span>
          </button>
        </div>
      </DropdownContent>
    </Dropdown>
  );
}