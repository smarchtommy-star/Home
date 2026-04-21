"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "动态" },
  { href: "/timeline", label: "时间线" },
  { href: "/publish", label: "发布" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 mx-auto w-full max-w-md px-4 pb-5">
      <div className="soft-panel mx-auto flex items-center justify-between rounded-full px-3 py-2 shadow-[0_16px_40px_rgba(80,54,38,0.08)]">
        {navItems.map((item) => {
          const active =
            item.href === "/"
              ? pathname === item.href
              : pathname?.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex-1 rounded-full px-4 py-3 text-center text-sm transition ${
                active
                  ? "bg-[var(--accent-soft)] font-medium text-[var(--ink-900)]"
                  : "text-[var(--ink-700)] hover:bg-white/60"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
