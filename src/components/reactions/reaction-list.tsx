import { formatPostDateTime } from "@/lib/feed";
import type { FeedItem } from "@/types/timeline";

interface ReactionListProps {
  comments: FeedItem["comments"];
}

export function ReactionList({ comments }: ReactionListProps) {
  if (comments.length === 0) {
    return <p className="fine-copy mt-4">还没有短评，先留一点安静也很好。</p>;
  }

  return (
    <div className="mt-4 space-y-3">
      {comments.map((comment) => (
        <div
          key={comment.reaction.id}
          className="rounded-[20px] border border-[var(--line)] bg-[rgba(255,251,246,0.84)] px-4 py-3"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-[var(--ink-900)]">
              {comment.author.name}
            </p>
            <span className="fine-copy">
              {formatPostDateTime(comment.reaction.createdAt)}
            </span>
          </div>
          <p className="mt-2 text-sm leading-6 text-[var(--ink-700)]">
            {comment.reaction.content}
          </p>
        </div>
      ))}
    </div>
  );
}
