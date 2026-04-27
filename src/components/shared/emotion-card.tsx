"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

const todayLabel = new Intl.DateTimeFormat("zh-CN", {
  month: "long",
  day: "numeric",
  weekday: "long",
}).format(new Date());

type EmotionAnchor = "daylight" | "quiet" | "reply";

interface EmotionCardState {
  id: string;
  label: string;
  status: string;
  seal: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  action: string;
  traces: string[];
  anchor: EmotionAnchor;
  palette: Record<string, string>;
}

const emotionCards: EmotionCardState[] = [
  {
    id: "daylight",
    label: "今日有光",
    status: "今天家里有一点光",
    seal: "家中有光",
    eyebrow: "饭后的小片刻",
    title: "今天，家里有一点光",
    subtitle: "留下一点今天的温度，把这一刻轻轻收好。",
    action: "记下今天",
    traces: ["妈妈看见了", "多了一张照片", "有人留了一句话"],
    anchor: "daylight",
    palette: {
      "--emotion-bg": "#be744e",
      "--emotion-bg-soft": "#e7bd8d",
      "--emotion-panel": "#fff4e6",
      "--emotion-panel-deep": "#f0d4b4",
      "--emotion-ink": "#44291d",
      "--emotion-muted": "#795541",
      "--emotion-accent": "#8f342d",
      "--emotion-line": "rgba(125, 71, 45, 0.24)",
    },
  },
  {
    id: "quiet",
    label: "今夜很安静",
    status: "今晚，灯还亮着",
    seal: "夜里留声",
    eyebrow: "睡前的一页",
    title: "今晚，家里很安静",
    subtitle: "慢慢写，不用急着说完，把这一天安静地收好。",
    action: "写下今晚",
    traces: ["有人说了晚安", "收到 1 条回应", "今天被好好放下"],
    anchor: "quiet",
    palette: {
      "--emotion-bg": "#465768",
      "--emotion-bg-soft": "#b7b7ad",
      "--emotion-panel": "#f5f0e7",
      "--emotion-panel-deep": "#d8d1c5",
      "--emotion-ink": "#263241",
      "--emotion-muted": "#5d6470",
      "--emotion-accent": "#9b6650",
      "--emotion-line": "rgba(55, 69, 85, 0.24)",
    },
  },
  {
    id: "seen",
    label: "被看见了",
    status: "今天，有人回应你",
    seal: "心有回声",
    eyebrow: "一条轻轻的回信",
    title: "今天，你被看见了",
    subtitle: "有人回应，心就落稳了。把这份回应收进今天。",
    action: "看看回应",
    traces: ["爸爸回了一句", "妈妈点了抱抱", "家里多了一点回声"],
    anchor: "reply",
    palette: {
      "--emotion-bg": "#78917a",
      "--emotion-bg-soft": "#d9ddc8",
      "--emotion-panel": "#fbf7ec",
      "--emotion-panel-deep": "#e5ead7",
      "--emotion-ink": "#293c2d",
      "--emotion-muted": "#5e705c",
      "--emotion-accent": "#9f433d",
      "--emotion-line": "rgba(79, 110, 82, 0.24)",
    },
  },
];

function LifeAnchor({ type }: { type: EmotionAnchor }) {
  return (
    <div className={`life-anchor life-anchor--${type}`} aria-hidden="true">
      <span className="life-anchor__steam life-anchor__steam--one" />
      <span className="life-anchor__steam life-anchor__steam--two" />
      <span className="life-anchor__paper" />
      <span className="life-anchor__vessel" />
      <span className="life-anchor__line" />
      <span className="life-anchor__sprig" />
    </div>
  );
}

export function EmotionCard() {
  const [activeId, setActiveId] = useState(emotionCards[0].id);
  const activeCard =
    emotionCards.find((card) => card.id === activeId) ?? emotionCards[0];

  return (
    <section
      className="emotion-card"
      style={activeCard.palette as CSSProperties}
    >
      <div className="emotion-card__top">
        <div>
          <p className="emotion-card__status">{activeCard.status}</p>
          <p className="emotion-card__date">{todayLabel}</p>
        </div>
        <span className="emotion-card__seal">{activeCard.seal}</span>
      </div>

      <div className="emotion-card__main">
        <div className="emotion-card__copy">
          <p className="emotion-card__eyebrow">{activeCard.eyebrow}</p>
          <h1>{activeCard.title}</h1>
          <p className="emotion-card__subtitle">{activeCard.subtitle}</p>
        </div>
        <LifeAnchor type={activeCard.anchor} />
      </div>

      <div className="emotion-card__traces" aria-label="今天家里的轻互动痕迹">
        {activeCard.traces.map((trace) => (
          <span key={trace}>{trace}</span>
        ))}
      </div>

      <div className="emotion-card__footer">
        <button type="button" className="emotion-card__action">
          {activeCard.action}
        </button>
        <div className="emotion-card__switcher" aria-label="切换家庭情绪卡">
          {emotionCards.map((card) => {
            const active = card.id === activeId;

            return (
              <button
                key={card.id}
                type="button"
                aria-pressed={active}
                onClick={() => setActiveId(card.id)}
                className={active ? "is-active" : ""}
              >
                <span>{card.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
