import { createFileRoute } from "@tanstack/react-router";
import { IntcoDecorPage } from "@/components/intco-decor-page";

export const Route = createFileRoute("/brands/intco-decor")({
  head: () => ({
    meta: [
      { title: "잉코 데코 회사소개 — 이음앤빌드" },
      { name: "description", content: "재생 소재부터 벽패널, 몰딩, SPC 바닥재와 아웃도어까지 직접 생산하는 잉코 데코 회사소개." },
      { property: "og:title", content: "잉코 데코 회사소개 — 이음앤빌드" },
      { property: "og:description", content: "6개 생산기지, 연간 장식 몰딩 1억 3천만m, 130개국 공급" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IntcoDecorPage,
});