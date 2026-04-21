"use client";

export function TextInput() {
  return (
    <label className="block text-sm text-[var(--ink-700)]">
      一句话
      <textarea
        className="mt-2 min-h-32 w-full resize-none rounded-2xl border border-[var(--line)] bg-white px-4 py-3 outline-none"
        placeholder="例如：今天你回家的时候，我突然觉得家里安静得很好。"
      />
    </label>
  );
}
