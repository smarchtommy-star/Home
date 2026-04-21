import { TimelineEntry } from "@/components/timeline/timeline-entry";
import type { TimelineDayGroup as TimelineDayGroupType } from "@/types/timeline";

interface TimelineDayGroupProps {
  group: TimelineDayGroupType;
}

export function TimelineDayGroup({ group }: TimelineDayGroupProps) {
  return (
    <section className="relative pl-6">
      <div className="absolute left-[11px] top-12 bottom-0 w-px bg-[var(--line)]" />
      <div className="absolute left-0 top-2 h-6 w-6 rounded-full border border-[var(--line)] bg-[var(--surface)]" />
      <div className="pb-4">
        <p className="section-title">{group.dateLabel}</p>
        <p className="fine-copy mt-1">按日期整理当天的动态和回应</p>
      </div>
      <div className="space-y-4">
        {group.entries.map((entry) => (
          <TimelineEntry key={entry.post.id} entry={entry} />
        ))}
      </div>
    </section>
  );
}
