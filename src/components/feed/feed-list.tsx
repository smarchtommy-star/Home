import type { FeedItem } from "@/types/timeline";
import { PostCard } from "@/components/feed/post-card";

interface FeedListProps {
  items: FeedItem[];
}

export function FeedList({ items }: FeedListProps) {
  if (items.length === 0) {
    return (
      <div className="paper-card rounded-[28px] p-6 text-sm leading-7 text-[var(--ink-700)]">
        还没有家庭动态，先从一张照片、一句话，或者一个今日状态开始。
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {items.map((item) => (
        <PostCard key={item.post.id} item={item} />
      ))}
    </div>
  );
}
