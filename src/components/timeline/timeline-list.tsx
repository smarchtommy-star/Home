import { TimelineDayGroup } from "@/components/timeline/timeline-day-group";
import type { TimelineDayGroup as TimelineDayGroupType } from "@/types/timeline";

interface TimelineListProps {
  groups: TimelineDayGroupType[];
}

export function TimelineList({ groups }: TimelineListProps) {
  if (groups.length === 0) {
    return (
      <div className="paper-card rounded-[28px] p-6 text-sm text-[var(--ink-700)]">
        时间线还没有内容，先从首页留下第一条动态。
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {groups.map((group) => (
        <TimelineDayGroup key={group.dateKey} group={group} />
      ))}
    </div>
  );
}
