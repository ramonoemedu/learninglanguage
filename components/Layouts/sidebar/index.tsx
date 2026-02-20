"use client";

import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_DATA } from "./data";
import { ArrowLeftIcon, ChevronUp } from "./icons";
import { MenuItem } from "./menu-item";
import { useSidebarContext } from "./sidebar-context";
import { Languages } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();
  const { setIsOpen, isOpen, isMobile, toggleSidebar } = useSidebarContext();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) => (prev.includes(title) ? [] : [title]));
  };

  useEffect(() => {
    // Keep collapsible open when its subpage is active
    NAV_DATA.some((section) => {
      return section.items.some((item) => {
        return item.items?.some((subItem: any) => {
          if (subItem.url === pathname) {
            if (!expandedItems.includes(item.title)) {
              toggleExpanded(item.title);
            }
            return true;
          }
        });
      });
    });
  }, [pathname]);

  return (
    <>
      {/* 1. Dual-Mode Mobile Overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm dark:bg-[#030712]/60 transition-all duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* 2. Glassmorphism Sidebar Container */}
      <aside
        className={cn(
          "max-w-[290px] overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          // Light Mode: Icy Frosted Glass | Dark Mode: Deep Space Frosted Glass
          "bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl",
          "border-r border-slate-200/80 dark:border-slate-800/80",
          // Ambient Sidebar Shadow
          "shadow-[10px_0_30px_-10px_rgba(0,0,0,0.05)] dark:shadow-[10px_0_30px_-10px_rgba(56,189,248,0.03)]",
          isMobile ? "fixed bottom-0 top-0 z-50" : "sticky top-0 h-screen",
          isOpen ? "w-full" : "w-0",
        )}
        aria-label="Main navigation"
        aria-hidden={!isOpen}
        inert={!isOpen ? true : undefined}
      >
        <div className="flex h-full flex-col py-10 pl-[25px] pr-[7px]">
          {/* Logo Area */}
          <div className={cn("flex items-center gap-2.5 group")}>

            {/* 1. The Animated Icon Container */}
            <div className="relative w-9 h-9 rounded-xl p-[1px] overflow-hidden shadow-[0_0_15px_rgba(2,132,199,0.15)] dark:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300 group-hover:scale-105">

              {/* The Spinning AI Gradient Border */}
              {/* In Light mode, it spins a deeper blue. In Dark mode, it spins a glowing cyan. */}
              <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#0ea5e9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#38bdf8_100%)] opacity-80 dark:opacity-100" />

              {/* The Inner Glass Core */}
              {/* This masks the middle of the spinning circle, leaving just the glowing edge */}
              <div className="relative w-full h-full bg-white dark:bg-[#050b14] rounded-[10px] flex items-center justify-center transition-colors">
                <Languages className="w-5 h-5 text-sky-500 dark:text-sky-400 group-hover:-rotate-12 transition-transform duration-500 ease-out" />
              </div>

            </div>

            {/* 2. Futuristic Typography */}
            {/* Dark text for Light Mode, White text for Dark mode */}
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-300">
              Learning<span className="text-sky-500 dark:text-sky-400">Language</span>
            </span>

          </div>

          {/* Navigation Area */}
          <div className="custom-scrollbar mt-6 flex-1 overflow-y-auto pr-3 min-[850px]:mt-10">
            {NAV_DATA.map((section) => (
              <div key={section.label} className="mb-8">
                {/* 3. HUD-Style Section Headers */}
                <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 pl-3 transition-colors duration-300">
                  {section.label}
                </h2>

                <nav role="navigation" aria-label={section.label}>
                  <ul className="space-y-1.5">
                    {section.items.map((item: any) => (
                      <li key={item.title}>
                        {item.items.length ? (
                          <div>
                            {/* Parent Menu Item */}
                            <MenuItem
                              isActive={item.items.some(
                                ({ url }: any) => url === pathname,
                              )}
                              onClick={() => toggleExpanded(item.title)}
                            >
                              <item.icon className="size-5 shrink-0" aria-hidden="true" />
                              <span className="font-medium text-sm">{item.title}</span>
                              <ChevronUp
                                className={cn(
                                  "ml-auto rotate-180 transition-transform duration-300",
                                  expandedItems.includes(item.title) && "rotate-0",
                                )}
                                aria-hidden="true"
                              />
                            </MenuItem>

                            {/* 4. The "Neural Tree" Sub-menu */}
                            {expandedItems.includes(item.title) && (
                              <ul
                                className="ml-9 mr-0 space-y-1 pb-[15px] pr-0 pt-2 relative before:absolute before:left-[-15px] before:top-2 before:bottom-4 before:w-[2px] before:bg-slate-200 dark:before:bg-slate-800/80 before:transition-colors before:duration-300"
                                role="menu"
                              >
                                {(item.items as any[]).map((subItem) => (
                                  <li key={subItem.title} role="none" className="relative">
                                    {/* Glowing Tree Node */}
                                    <div className={cn(
                                      "absolute -left-[19px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-[#050b14] transition-all duration-300",
                                      pathname === subItem.url
                                        ? "bg-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.5)] scale-110"
                                        : "bg-slate-300 dark:bg-slate-700"
                                    )} />
                                    <MenuItem
                                      as="link"
                                      href={subItem.url}
                                      isActive={pathname === subItem.url}
                                    >
                                      <span className="font-medium text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">{subItem.title}</span>
                                    </MenuItem>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ) : (
                          /* Standard Single Item */
                          (() => {
                            const href =
                              "url" in item
                                ? item.url + ""
                                : "/" + item.title.toLowerCase().split(" ").join("-");

                            return (
                              <MenuItem
                                className="flex items-center gap-3 py-2.5"
                                as="link"
                                href={href}
                                isActive={pathname === href}
                              >
                                <item.icon className="size-5 shrink-0" aria-hidden="true" />
                                <span className="font-medium text-sm">{item.title}</span>
                              </MenuItem>
                            );
                          })()
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}