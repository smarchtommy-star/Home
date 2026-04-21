import Image from "next/image";
import { CommentBox } from "@/components/reactions/comment-box";
import { ReactionBar } from "@/components/reactions/reaction-bar";
import { ReactionList } from "@/components/reactions/reaction-list";
import { formatPostDateTime, getPostTypeLabel } from "@/lib/feed";
import type { FeedItem } from "@/types/timeline";

interface PostCardProps {
  item: FeedItem;
}

export function PostCard({ item }: PostCardProps) {
  const { author, post, comments, warmReactionCounts } = item;

  return (
    <article className="paper-card overflow-hidden rounded-[28px]">
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-medium text-white"
              style={{ backgroundColor: author.accentColor }}
            >
              {author.avatarSeed}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="font-medium text-[var(--ink-900)]">{author.name}</p>
                <span className="rounded-full bg-[var(--surface-soft)] px-2 py-0.5 text-[11px] text-[var(--ink-700)]">
                  {author.relationLabel}
                </span>
              </div>
              <p className="fine-copy">{formatPostDateTime(post.createdAt)}</p>
            </div>
          </div>
          <span className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--ink-700)]">
            {getPostTypeLabel(post.type)}
          </span>
        </div>

        <div className="mt-4 space-y-4">
          {post.type === "photo" ? (
            <div className="overflow-hidden rounded-[24px] border border-[var(--line)] bg-[var(--surface-soft)]">
              <Image
                src={post.imageUrl}
                alt={post.alt}
                width={800}
                height={560}
                className="h-52 w-full object-cover"
              />
            </div>
          ) : null}

          {post.type === "status" ? (
            <span className="inline-flex rounded-full bg-[var(--success-soft)] px-3 py-1 text-sm text-[var(--ink-700)]">
              今日状态：{post.mood}
            </span>
          ) : null}

          <p className="text-[15px] leading-7 text-[var(--ink-900)]">{post.text}</p>
        </div>
      </div>

      <div className="border-t border-[var(--line)] bg-[rgba(247,241,232,0.45)] px-5 py-4">
        <ReactionBar counts={warmReactionCounts} />
        <ReactionList comments={comments} />
        <CommentBox />
      </div>
    </article>
  );
}
