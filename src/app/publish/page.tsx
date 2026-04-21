import { PublishForm } from "@/components/publish/publish-form";
import { PageShell } from "@/components/shared/page-shell";

export default function PublishPage() {
  return (
    <PageShell>
      <section className="paper-card rounded-[28px] p-6">
        <p className="fine-copy">发布入口</p>
        <h1 className="page-title mt-2">轻轻留下今天的一点点</h1>
        <p className="muted-copy mt-4 text-sm leading-7">
          首版只保留三种内容：照片、一句话、今日状态。提交逻辑先用本地 mock
          流程占位，Phase 2 再把首页轻发布体验接顺。
        </p>
      </section>

      <section className="mt-6">
        <PublishForm />
      </section>
    </PageShell>
  );
}
