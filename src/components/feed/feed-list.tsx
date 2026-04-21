import type { FeedItem } from "@/types/timeline";
import { PostCard } from "@/components/feed/post-card";

interface FeedListProps {
  items: FeedItem[];
}

export function FeedList({ items }: FeedListProps) {
  if (items.length === 0) {
    return (
      <div className="paper-card rounded-[28px] p-6 text-sm text-[var(--ink-700)]">
        还没有动态，先从今天的一句话开始吧。
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <PostCard key={item.post.id} item={item} />
      ))}
    </div>
  );
}
