"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "动态", hint: "首页主场景" },
  { href: "/timeline", label: "时间线", hint: "按日期回看" },
  { href: "/publish", label: "发布", hint: "独立入口" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 mx-auto w-full max-w-md px-4 pb-5">
      <div className="soft-panel mx-auto flex items-center justify-between rounded-[28px] px-2 py-2">
        {navItems.map((item) => {
          const active =
            item.href === "/"
              ? pathname === item.href
              : pathname?.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-1 flex-col items-center rounded-[20px] px-3 py-3 text-center transition ${
                active
                  ? "bg-[var(--page-panel-deep)] text-[var(--ink-900)]"
                  : "text-[var(--ink-700)] hover:bg-[rgba(255,251,246,0.7)]"
              }`}
            >
              <span
                className={`text-sm font-medium ${
                  active ? "text-[var(--accent)]" : ""
                }`}
              >
                {item.label}
              </span>
              <span className="mt-1 text-[11px] text-[var(--ink-500)]">
                {item.hint}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
