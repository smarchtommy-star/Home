"use client";

export function PhotoInput() {
  return (
    <>
      <label className="block text-sm text-[var(--ink-700)]">
        图片地址
        <input
          className="mt-2 w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3 outline-none"
          placeholder="例如 /images/family-breakfast.svg"
        />
      </label>

      <label className="block text-sm text-[var(--ink-700)]">
        配文
        <textarea
          className="mt-2 min-h-28 w-full resize-none rounded-2xl border border-[var(--line)] bg-white px-4 py-3 outline-none"
          placeholder="给这张照片留一句轻轻的话。"
        />
      </label>
    </>
  );
}
