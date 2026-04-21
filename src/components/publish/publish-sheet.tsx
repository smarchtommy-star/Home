import Link from "next/link";

const quickTypes = ["照片", "一句话", "今日状态"];

export function PublishSheet() {
  return (
    <section className="paper-card rounded-[28px] p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="fine-copy">轻分享入口</p>
          <h2 className="section-title mt-2">今天想留下哪一种小小的生活片段？</h2>
        </div>
        <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs text-[var(--ink-700)]">
          首页优先
        </span>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {quickTypes.map((type) => (
          <button
            key={type}
            type="button"
            className="rounded-2xl border border-[var(--line)] bg-white px-3 py-3 text-sm text-[var(--ink-700)]"
          >
            {type}
          </button>
        ))}
      </div>

      <p className="muted-copy mt-4 text-sm leading-7">
        Phase 1 先放入轻量入口和独立发布页骨架，后面再把首页轻弹层做顺。
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="fine-copy">当前先走最小可运行流程</span>
        <Link
          href="/publish"
          className="rounded-full bg-[var(--ink-900)] px-4 py-2 text-sm text-white transition hover:opacity-90"
        >
          进入发布页
        </Link>
      </div>
    </section>
  );
}
