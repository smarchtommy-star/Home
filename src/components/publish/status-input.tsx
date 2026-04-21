"use client";

const moods = ["平静", "有点想你", "今天挺开心", "有些累", "想抱抱"];

export function StatusInput() {
  return (
    <>
      <div>
        <p className="text-sm text-[var(--ink-700)]">今日状态</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {moods.map((mood) => (
            <button
              key={mood}
              type="button"
              className="rounded-full border border-[var(--line)] bg-white px-3 py-2 text-sm text-[var(--ink-700)]"
            >
              {mood}
            </button>
          ))}
        </div>
      </div>

      <label className="block text-sm text-[var(--ink-700)]">
        补充一句
        <textarea
          className="mt-2 min-h-28 w-full resize-none rounded-2xl border border-[var(--line)] bg-white px-4 py-3 outline-none"
          placeholder="例如：今天回家的路上突然很想和你说说话。"
        />
      </label>
    </>
  );
}
