import { warmReactionOptions } from "@/data/mock/reactions";
import { summarizeWarmReactions } from "@/lib/feed";
import type { WarmReactionCounts } from "@/types/timeline";

interface ReactionBarProps {
  counts: WarmReactionCounts;
}

export function ReactionBar({ counts }: ReactionBarProps) {
  const summary = summarizeWarmReactions(counts);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {warmReactionOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            className="rounded-full border border-[var(--line)] bg-white px-3 py-2 text-sm text-[var(--ink-700)] transition hover:border-[var(--accent)] hover:text-[var(--ink-900)]"
          >
            {option.label}
          </button>
        ))}
      </div>
      <p className="fine-copy mt-3">{summary || "Phase 3 会接入固定暖回应的本地交互。"}</p>
    </div>
  );
}
