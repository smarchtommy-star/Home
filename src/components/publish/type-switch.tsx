"use client";

import type { PostType } from "@/types/post";

interface TypeSwitchProps {
  value: PostType;
  onChange: (value: PostType) => void;
}

const options: Array<{ value: PostType; label: string }> = [
  { value: "photo", label: "照片" },
  { value: "note", label: "一句话" },
  { value: "status", label: "今日状态" },
];

export function TypeSwitch({ value, onChange }: TypeSwitchProps) {
  return (
    <div>
      <p className="text-sm font-medium text-[var(--ink-900)]">内容类型</p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {options.map((option) => {
          const active = option.value === value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={`rounded-2xl px-3 py-3 text-sm transition ${
                active
                  ? "bg-[var(--accent-soft)] text-[var(--ink-900)]"
                  : "border border-[var(--line)] bg-white text-[var(--ink-700)]"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
