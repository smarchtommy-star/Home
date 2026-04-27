"use client";

import Link from "next/link";
import { useState } from "react";
import type { PostType } from "@/types/post";

type ComposerMode = PostType;

const composerOptions: Array<{
  value: ComposerMode;
  label: string;
  helper: string;
}> = [
  {
    value: "photo",
    label: "发照片",
    helper: "把一个小画面放进册页",
  },
  {
    value: "note",
    label: "写一句话",
    helper: "一句家常话就足够了",
  },
  {
    value: "status",
    label: "选今日状态",
    helper: "让家人知道你今天如何",
  },
];

const statusOptions = ["平静", "想你", "今天挺开心", "有点累", "想抱抱"];

export function PublishSheet() {
  const [mode, setMode] = useState<ComposerMode>("photo");
  const [selectedStatus, setSelectedStatus] = useState("平静");
  const [notice, setNotice] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const messageMap: Record<ComposerMode, string> = {
      photo: "这张照片的轻分享入口已经准备好，下一阶段会让它真正落进首页动态里。",
      note: "这句想说的话已经有了轻量入口，下一阶段会接上本地发布流程。",
      status: `“${selectedStatus}”这个状态入口已经准备好，下一阶段会接成本地发布流程。`,
    };

    setNotice(messageMap[mode]);
  }

  return (
    <section className="paper-card overflow-hidden rounded-[32px]">
      <div className="px-5 pb-5 pt-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="section-kicker folio-mark pl-14">轻分享入口</p>
            <h2 className="section-title mt-3">不用进入复杂流程，也能留下一点今天的家常</h2>
          </div>
          <span className="rounded-[16px] border border-[var(--accent-soft)] bg-[var(--accent-wash)] px-3 py-1 text-xs text-[var(--accent-deep)]">
            首页主体验
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {composerOptions.map((option) => {
            const active = option.value === mode;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setMode(option.value);
                  setNotice("");
                }}
                className={`rounded-[22px] border px-3 py-3 text-left transition ${
                  active
                    ? "border-[var(--line-strong)] bg-[var(--page-panel-deep)] shadow-[0_10px_22px_rgba(82,56,40,0.08)]"
                    : "border-[var(--line)] bg-[rgba(255,251,246,0.8)] hover:bg-white"
                }`}
              >
                <p className="text-sm font-medium text-[var(--ink-900)]">
                  {option.label}
                </p>
                <p className="mt-1 text-xs leading-5 text-[var(--ink-500)]">
                  {option.helper}
                </p>
              </button>
            );
          })}
        </div>

        <form className="mt-5" onSubmit={handleSubmit}>
          {mode === "photo" ? (
            <div className="rounded-[26px] border border-[var(--line)] bg-[rgba(255,251,246,0.82)] p-4">
              <div className="rounded-[20px] border border-[var(--line)] bg-[linear-gradient(180deg,#f4e8dc_0%,#ecddcd_100%)] p-3">
                <div className="flex aspect-[4/3] items-end rounded-[16px] border border-white/65 bg-[rgba(255,255,255,0.42)] p-3">
                  <p className="text-sm leading-6 text-[var(--ink-700)]">
                    一张早餐桌、一段回家路、或者一束落进屋里的光，都可以从这里开始。
                  </p>
                </div>
              </div>
              <label className="mt-4 block text-sm text-[var(--ink-700)]">
                给照片留一句话
                <textarea
                  className="mt-2 min-h-24 w-full resize-none rounded-[18px] border border-[var(--line)] bg-[var(--page-panel)] px-4 py-3 outline-none"
                  placeholder="比如：今天早上终于一起坐下来吃了几分钟早餐。"
                />
              </label>
            </div>
          ) : null}

          {mode === "note" ? (
            <div className="rounded-[26px] border border-[var(--line)] bg-[rgba(255,251,246,0.82)] p-4">
              <label className="block text-sm text-[var(--ink-700)]">
                今天想说的一句话
                <textarea
                  className="mt-2 min-h-32 w-full resize-none rounded-[20px] border border-[var(--line)] bg-[var(--page-panel)] px-4 py-4 text-[15px] leading-7 outline-none"
                  placeholder="比如：你回来晚一点也没关系，记得先好好吃饭。"
                />
              </label>
            </div>
          ) : null}

          {mode === "status" ? (
            <div className="rounded-[26px] border border-[var(--line)] bg-[rgba(255,251,246,0.82)] p-4">
              <p className="text-sm text-[var(--ink-700)]">今天的状态</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {statusOptions.map((status) => {
                  const active = selectedStatus === status;

                  return (
                    <button
                      key={status}
                      type="button"
                      onClick={() => {
                        setSelectedStatus(status);
                        setNotice("");
                      }}
                      className={`rounded-full border px-3 py-2 text-sm transition ${
                        active
                          ? "border-[var(--accent)] bg-[var(--accent-wash)] text-[var(--ink-900)]"
                          : "border-[var(--line)] bg-[var(--page-panel)] text-[var(--ink-700)]"
                      }`}
                    >
                      {status}
                    </button>
                  );
                })}
              </div>

              <label className="mt-4 block text-sm text-[var(--ink-700)]">
                补一句给家人看的话
                <textarea
                  className="mt-2 min-h-24 w-full resize-none rounded-[18px] border border-[var(--line)] bg-[var(--page-panel)] px-4 py-3 outline-none"
                  placeholder="比如：今天有点累，回家之后想先安静待一下。"
                />
              </label>
            </div>
          ) : null}

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="fine-copy max-w-48">
              先把分享动作做轻，让人一打开首页就知道这里可以安静地留下一点日常。
            </p>
            <button
              type="submit"
              className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm text-white transition hover:opacity-92"
            >
              先放进今天
            </button>
          </div>
        </form>

        {notice ? (
          <p className="mt-4 rounded-[18px] bg-[var(--accent-wash)] px-4 py-3 text-sm leading-6 text-[var(--ink-700)]">
            {notice}
          </p>
        ) : null}
      </div>

      <div className="paper-divider flex items-center justify-between gap-4 px-5 py-4">
        <p className="fine-copy">如果你更想慢慢写，也可以进入独立发布页。</p>
        <Link
          href="/publish"
          className="rounded-full border border-[var(--line)] bg-[rgba(255,251,246,0.88)] px-4 py-2 text-sm text-[var(--ink-700)] transition hover:bg-white"
        >
          打开发布页
        </Link>
      </div>
    </section>
  );
}
