import { FeedList } from "@/components/feed/feed-list";
import { ShareEntry } from "@/components/feed/share-entry";
import { HomeHeader } from "@/components/shared/home-header";
import { PageShell } from "@/components/shared/page-shell";
import { getFeedItems } from "@/lib/feed";

export default function Home() {
  const feedItems = getFeedItems();

  return (
    <PageShell>
      <HomeHeader />
      <ShareEntry />
      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="section-title">家庭动态流</h2>
          <span className="fine-copy">照片 / 一句话 / 今日状态</span>
        </div>
        <FeedList items={feedItems} />
      </section>
    </PageShell>
  );
}
