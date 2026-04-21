import type { Metadata } from "next";
import { BottomNav } from "@/components/shared/bottom-nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home",
  description: "一个帮助家人低压力分享生活、轻量回应彼此的私密家庭关系产品。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full">
      <body className="min-h-full bg-[var(--page-bg)] text-[var(--ink-900)] antialiased">
        <div className="min-h-screen pb-24">{children}</div>
        <BottomNav />
      </body>
    </html>
  );
}
