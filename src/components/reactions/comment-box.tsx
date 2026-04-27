export function CommentBox() {
  return (
    <form className="mt-4 rounded-[22px] border border-dashed border-[var(--line)] bg-[rgba(255,251,246,0.76)] p-3">
      <label className="block text-sm text-[var(--ink-700)]">
        一句短评
        <textarea
          className="mt-2 min-h-20 w-full resize-none rounded-[18px] border border-[var(--line)] bg-[var(--page-panel)] px-3 py-3 text-sm outline-none"
          placeholder="先把输入区的气质放对，Phase 3 再接本地提交。"
          disabled
        />
      </label>
      <div className="mt-3 flex justify-end">
        <button
          type="button"
          disabled
          className="rounded-full bg-[var(--page-panel-soft)] px-4 py-2 text-sm text-[var(--ink-500)]"
        >
          Phase 3 开启
        </button>
      </div>
    </form>
  );
}
