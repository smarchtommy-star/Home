"use client";

import { useState } from "react";
import { PhotoInput } from "@/components/publish/photo-input";
import { StatusInput } from "@/components/publish/status-input";
import { TextInput } from "@/components/publish/text-input";
import { TypeSwitch } from "@/components/publish/type-switch";
import type { PostType } from "@/types/post";

export function PublishForm() {
  const [postType, setPostType] = useState<PostType>("photo");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Phase 1 先把表单结构跑通，提交逻辑会在后续阶段接成本地 mock 流程。");
  }

  return (
    <form className="paper-card rounded-[28px] p-5" onSubmit={handleSubmit}>
      <TypeSwitch value={postType} onChange={setPostType} />

      <div className="mt-5 space-y-4">
        {postType === "photo" ? <PhotoInput /> : null}
        {postType === "note" ? <TextInput /> : null}
        {postType === "status" ? <StatusInput /> : null}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="fine-copy">
          本阶段只保证结构可运行，暂不把发布流程做重。
        </p>
        <button
          type="submit"
          className="rounded-full bg-[var(--ink-900)] px-5 py-2.5 text-sm text-white transition hover:opacity-90"
        >
          保存为今日草稿
        </button>
      </div>

      {message ? (
        <p className="mt-4 rounded-2xl bg-[var(--surface-soft)] px-4 py-3 text-sm text-[var(--ink-700)]">
          {message}
        </p>
      ) : null}
    </form>
  );
}
