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

      <section className="mt-10">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="section-kicker folio-mark pl-14">家庭动态流</p>
            <h2 className="section-title mt-3">把今天家里的小事，安静地收进这一页</h2>
          </div>
          <p className="fine-copy max-w-32 text-right leading-6">
            不是社交平台，而是一页页会留下来的家常
          </p>
        </div>

        <FeedList items={feedItems} />
      </section>
    </PageShell>
  );
}
