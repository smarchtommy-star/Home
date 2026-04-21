import type { Post } from "@/types/post";

export const posts: Post[] = [
  {
    id: "post-001",
    authorId: "mom",
    type: "photo",
    createdAt: "2026-04-21T08:18:00+08:00",
    text: "今天早餐终于坐下来一起吃了五分钟，小满还给鸡蛋画了一个笑脸。",
    imageUrl: "/images/family-breakfast.svg",
    alt: "早餐桌上的面包、鸡蛋和牛奶",
  },
  {
    id: "post-002",
    authorId: "kid",
    type: "status",
    createdAt: "2026-04-21T19:32:00+08:00",
    mood: "有点想你",
    text: "今天放学的时候突然很想快点回家。",
  },
  {
    id: "post-003",
    authorId: "dad",
    type: "note",
    createdAt: "2026-04-20T22:05:00+08:00",
    text: "晚上加班回来很晚，但看到门口留的小纸条，整个人都松下来了。",
  },
  {
    id: "post-004",
    authorId: "kid",
    type: "photo",
    createdAt: "2026-04-19T16:10:00+08:00",
    text: "公园的风今天很软，吹得风车一直转。",
    imageUrl: "/images/park-moment.svg",
    alt: "公园里的风车和草地",
  },
];
