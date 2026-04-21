export const warmReactionValues = [
  "seen",
  "take-care",
  "nice",
  "hug",
  "miss-you",
] as const;

export type WarmReactionValue = (typeof warmReactionValues)[number];

export interface WarmReactionOption {
  value: WarmReactionValue;
  label: string;
}

interface ReactionBase {
  id: string;
  postId: string;
  authorId: string;
  createdAt: string;
}

export interface WarmReaction extends ReactionBase {
  kind: "warm";
  value: WarmReactionValue;
}

export interface CommentReaction extends ReactionBase {
  kind: "comment";
  content: string;
}

export type Reaction = WarmReaction | CommentReaction;
