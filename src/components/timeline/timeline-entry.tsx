import { formatPostDateTime, getPostTypeLabel, summarizeWarmReactions } from "@/lib/feed";
import type { TimelineEntry as TimelineEntryType } from "@/types/timeline";

interface TimelineEntryProps {
  entry: TimelineEntryType;
}

export function TimelineEntry({ entry }: TimelineEntryProps) {
  const warmSummary = summarizeWarmReactions(entry.warmReactionCounts);

  return (
    <article className="paper-card rounded-[24px] p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-[var(--ink-900)]">
            {entry.author.name} · {entry.author.relationLabel}
          </p>
          <p className="fine-copy">{formatPostDateTime(entry.post.createdAt)}</p>
        </div>
        <span className="rounded-full bg-[var(--surface-soft)] px-3 py-1 text-xs text-[var(--ink-700)]">
          {getPostTypeLabel(entry.post.type)}
        </span>
      </div>

      <p className="mt-4 text-sm leading-7 text-[var(--ink-900)]">{entry.post.text}</p>

      {entry.comments.length > 0 ? (
        <div className="mt-4 rounded-[20px] border border-[var(--line)] bg-white/70 p-4">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--ink-500)]">
            当天回应
          </p>
          <div className="mt-3 space-y-2">
            {entry.comments.map((comment) => (
              <p key={comment.reaction.id} className="text-sm leading-6 text-[var(--ink-700)]">
                <span className="font-medium text-[var(--ink-900)]">
                  {comment.author.name}
                </span>
                ：{comment.reaction.content}
              </p>
            ))}
          </div>
        </div>
      ) : null}

      <p className="fine-copy mt-4">
        {warmSummary || "固定暖回应将在后续阶段接入本地交互。"}
      </p>
    </article>
  );
}
