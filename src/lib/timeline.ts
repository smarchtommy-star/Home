import { getFeedItems } from "@/lib/feed";
import type { FeedItem, TimelineDayGroup, TimelineEntry } from "@/types/timeline";

function getDateKey(createdAt: string) {
  return createdAt.slice(0, 10);
}

function getTodayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = `${now.getMonth() + 1}`.padStart(2, "0");
  const day = `${now.getDate()}`.padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getYesterdayKey() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const year = yesterday.getFullYear();
  const month = `${yesterday.getMonth() + 1}`.padStart(2, "0");
  const day = `${yesterday.getDate()}`.padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function formatTimelineDate(dateKey: string) {
  if (dateKey === getTodayKey()) {
    return "今天";
  }

  if (dateKey === getYesterdayKey()) {
    return "昨天";
  }

  const date = new Date(`${dateKey}T00:00:00+08:00`);

  return new Intl.DateTimeFormat("zh-CN", {
    month: "long",
    day: "numeric",
    weekday: "short",
  }).format(date);
}

export function getTimelineGroups(feedItems: FeedItem[] = getFeedItems()) {
  const groups = new Map<string, TimelineDayGroup>();

  feedItems.forEach((item) => {
    const dateKey = getDateKey(item.post.createdAt);

    if (!groups.has(dateKey)) {
      groups.set(dateKey, {
        dateKey,
        dateLabel: formatTimelineDate(dateKey),
        entries: [],
      });
    }

    const entry: TimelineEntry = {
      ...item,
      dateKey,
      dateLabel: formatTimelineDate(dateKey),
    };

    groups.get(dateKey)?.entries.push(entry);
  });

  return Array.from(groups.values()).sort((left, right) => {
    return new Date(right.dateKey).getTime() - new Date(left.dateKey).getTime();
  });
}
