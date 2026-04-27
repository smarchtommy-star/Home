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
    <article className="paper-card overflow-hidden rounded-[30px]">
      <div className="px-5 pb-5 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-medium text-white shadow-[0_10px_20px_rgba(82,57,42,0.12)]"
              style={{ backgroundColor: author.accentColor }}
            >
              {author.avatarSeed}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="font-medium text-[var(--ink-900)]">{author.name}</p>
                <span className="rounded-full bg-[var(--page-panel-soft)] px-2 py-0.5 text-[11px] text-[var(--ink-700)]">
                  {author.relationLabel}
                </span>
              </div>
              <p className="fine-copy">{formatPostDateTime(post.createdAt)}</p>
            </div>
          </div>

          <span className="rounded-full border border-[var(--line)] bg-[rgba(255,251,246,0.82)] px-3 py-1 text-xs text-[var(--ink-700)]">
            {getPostTypeLabel(post.type)}
          </span>
        </div>

        <div className="mt-5">
          {post.type === "photo" ? (
            <div>
              <div className="rounded-[26px] border border-[var(--line)] bg-[var(--page-panel-soft)] p-2 shadow-[0_12px_26px_rgba(84,58,41,0.08)]">
                <div className="overflow-hidden rounded-[18px] border border-white/50">
                  <Image
                    src={post.imageUrl}
                    alt={post.alt}
                    width={800}
                    height={560}
                    className="h-56 w-full object-cover"
                  />
                </div>
              </div>
              <p className="mt-4 text-[15px] leading-7 text-[var(--ink-900)]">{post.text}</p>
            </div>
          ) : null}

          {post.type === "note" ? (
            <div className="rounded-[24px] border border-[var(--line)] bg-[linear-gradient(180deg,#fffdfa_0%,#f4eadf_100%)] px-5 py-5">
              <p className="section-kicker">一句话</p>
              <p className="mt-3 text-[16px] leading-8 text-[var(--ink-900)]">
                {post.text}
              </p>
            </div>
          ) : null}

          {post.type === "status" ? (
            <div className="rounded-[24px] border border-[var(--line)] bg-[linear-gradient(180deg,#faf5ed_0%,#f1e6d9_100%)] px-5 py-5">
              <div className="inline-flex rounded-full bg-[var(--sage-soft)] px-3 py-1 text-sm text-[var(--ink-700)]">
                今日状态：{post.mood}
              </div>
              <p className="mt-4 text-[15px] leading-7 text-[var(--ink-900)]">{post.text}</p>
            </div>
          ) : null}
        </div>
      </div>

      <div className="paper-divider bg-[rgba(245,238,228,0.72)] px-5 py-4">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-[var(--ink-500)]">
          轻轻回应
        </p>
        <ReactionBar counts={warmReactionCounts} />
        <ReactionList comments={comments} />
        <CommentBox />
      </div>
    </article>
  );
}
