import { familyMembers } from "@/data/mock/family";
import { posts } from "@/data/mock/posts";
import { reactions } from "@/data/mock/reactions";
import type { FamilyMember } from "@/types/family";
import type { Post, PostType } from "@/types/post";
import type { CommentReaction, Reaction, WarmReactionValue } from "@/types/reaction";
import type { FeedItem, ReactionSummary, WarmReactionCounts } from "@/types/timeline";
import { warmReactionValues } from "@/types/reaction";

function createWarmReactionCounts(): WarmReactionCounts {
  return warmReactionValues.reduce(
    (accumulator, value) => {
      accumulator[value] = 0;
      return accumulator;
    },
    {} as WarmReactionCounts,
  );
}

function createMemberMap(members: FamilyMember[]) {
  return new Map(members.map((member) => [member.id, member]));
}

function sortByCreatedAtDescending<T extends { createdAt: string }>(items: T[]) {
  return [...items].sort(
    (left, right) =>
      new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime(),
  );
}

export function getPostTypeLabel(type: PostType) {
  const labels: Record<PostType, string> = {
    photo: "照片",
    note: "一句话",
    status: "今日状态",
  };

  return labels[type];
}

export function formatPostDateTime(createdAt: string) {
  return new Intl.DateTimeFormat("zh-CN", {
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(createdAt));
}

export function summarizeWarmReactions(counts: WarmReactionCounts) {
  return Object.entries(counts)
    .filter(([, count]) => count > 0)
    .map(([value, count]) => {
      const labelMap: Record<WarmReactionValue, string> = {
        seen: "看到了",
        "take-care": "辛苦了",
        nice: "真不错",
        hug: "抱抱",
        "miss-you": "想你",
      };

      return `${labelMap[value as WarmReactionValue]} ${count}`;
    })
    .join(" · ");
}

export function getFeedItems(
  sourcePosts: Post[] = posts,
  sourceReactions: Reaction[] = reactions,
  sourceMembers: FamilyMember[] = familyMembers,
): FeedItem[] {
  const memberMap = createMemberMap(sourceMembers);

  return sortByCreatedAtDescending(sourcePosts).map((post) => {
    const postReactions = sortByCreatedAtDescending(
      sourceReactions.filter((reaction) => reaction.postId === post.id),
    );

    const reactionSummaries: ReactionSummary[] = postReactions.map((reaction) => ({
      reaction,
      author: memberMap.get(reaction.authorId) ?? sourceMembers[0],
    }));

    const warmReactionCounts = reactionSummaries.reduce((accumulator, summary) => {
      if (summary.reaction.kind === "warm") {
        accumulator[summary.reaction.value] += 1;
      }

      return accumulator;
    }, createWarmReactionCounts());

    const comments = reactionSummaries.filter(
      (summary): summary is ReactionSummary & { reaction: CommentReaction } =>
        summary.reaction.kind === "comment",
    );

    return {
      post,
      author: memberMap.get(post.authorId) ?? sourceMembers[0],
      reactions: reactionSummaries,
      comments,
      warmReactionCounts,
    };
  });
}
