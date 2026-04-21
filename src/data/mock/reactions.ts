import type { Reaction, WarmReactionOption } from "@/types/reaction";

export const warmReactionOptions: WarmReactionOption[] = [
  { value: "seen", label: "看到了" },
  { value: "take-care", label: "辛苦了" },
  { value: "nice", label: "真不错" },
  { value: "hug", label: "抱抱" },
  { value: "miss-you", label: "想你" },
];

export const reactions: Reaction[] = [
  {
    id: "reaction-001",
    postId: "post-001",
    authorId: "dad",
    createdAt: "2026-04-21T08:23:00+08:00",
    kind: "warm",
    value: "nice",
  },
  {
    id: "reaction-002",
    postId: "post-001",
    authorId: "kid",
    createdAt: "2026-04-21T08:24:00+08:00",
    kind: "comment",
    content: "鸡蛋笑脸是我画的，明天还想再画一个。",
  },
  {
    id: "reaction-003",
    postId: "post-002",
    authorId: "mom",
    createdAt: "2026-04-21T19:35:00+08:00",
    kind: "warm",
    value: "hug",
  },
  {
    id: "reaction-004",
    postId: "post-002",
    authorId: "dad",
    createdAt: "2026-04-21T19:37:00+08:00",
    kind: "comment",
    content: "我也想你，今晚给你讲一个短故事再睡。",
  },
  {
    id: "reaction-005",
    postId: "post-003",
    authorId: "mom",
    createdAt: "2026-04-20T22:10:00+08:00",
    kind: "warm",
    value: "take-care",
  },
  {
    id: "reaction-006",
    postId: "post-004",
    authorId: "dad",
    createdAt: "2026-04-19T16:13:00+08:00",
    kind: "warm",
    value: "seen",
  },
];
