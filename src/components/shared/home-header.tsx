export function HomeHeader() {
  return (
    <section className="paper-card rounded-[32px] p-6">
      <p className="fine-copy">Home MVP / Phase 1</p>
      <h1 className="page-title mt-3">把家人之间的小互动，留成一页页温柔的日常。</h1>
      <p className="muted-copy mt-4 text-sm leading-7">
        先从一个轻一点的家庭动态流开始，让分享和回应都不需要太多力气。
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-[var(--surface-soft)] px-3 py-1 text-xs text-[var(--ink-700)]">
          私密感
        </span>
        <span className="rounded-full bg-[var(--surface-soft)] px-3 py-1 text-xs text-[var(--ink-700)]">
          纪念册感
        </span>
        <span className="rounded-full bg-[var(--surface-soft)] px-3 py-1 text-xs text-[var(--ink-700)]">
          低压力互动
        </span>
      </div>
    </section>
  );
}
