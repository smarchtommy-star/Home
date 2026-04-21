import { TimelineList } from "@/components/timeline/timeline-list";
import { PageShell } from "@/components/shared/page-shell";
import { getTimelineGroups } from "@/lib/timeline";

export default function TimelinePage() {
  const groups = getTimelineGroups();

  return (
    <PageShell>
      <section className="paper-card rounded-[28px] p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="fine-copy">家庭时间线</p>
            <h1 className="page-title mt-2">按日期回看彼此留下的痕迹</h1>
          </div>
          <span className="rounded-full bg-[var(--surface-soft)] px-3 py-1 text-xs text-[var(--ink-700)]">
            首版按日期分组
          </span>
        </div>
        <p className="muted-copy mt-4 text-sm leading-7">
          先把“谁发了什么、谁回应了什么”跑通，再逐步长成一条更完整的家庭记忆线。
        </p>
      </section>

      <section className="mt-8">
        <TimelineList groups={groups} />
      </section>
    </PageShell>
  );
}
