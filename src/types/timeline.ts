import type { FamilyMember } from "@/types/family";
import type { Post } from "@/types/post";
import type { CommentReaction, Reaction, WarmReactionValue } from "@/types/reaction";

export interface ReactionSummary {
  reaction: Reaction;
  author: FamilyMember;
}

export type WarmReactionCounts = Record<WarmReactionValue, number>;

export interface FeedItem {
  post: Post;
  author: FamilyMember;
  reactions: ReactionSummary[];
  comments: Array<ReactionSummary & { reaction: CommentReaction }>;
  warmReactionCounts: WarmReactionCounts;
}

export interface TimelineEntry extends FeedItem {
  dateKey: string;
  dateLabel: string;
}

export interface TimelineDayGroup {
  dateKey: string;
  dateLabel: string;
  entries: TimelineEntry[];
}
