import { createFileRoute } from "@tanstack/react-router";
import { IntcoProductsPage } from "@/components/intco-products-page";

export const Route = createFileRoute("/brands/intco-decor-products")({
  head: () => ({
    meta: [
      { title: "잉코 데코 제품소개 — 이음앤빌드" },
      { name: "description", content: "재생 PS 벽패널, SPC 바닥재, 장식 몰딩, WPC 아웃도어 데크 등 잉코 데코의 친환경 마감재 라인업을 소개합니다." },
      { property: "og:title", content: "잉코 데코 제품소개 — INTCO DECOR Collection" },
      { property: "og:description", content: "벽패널부터 바닥재까지, 순환경제로 완성하는 고품질 인테리어 솔루션." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IntcoProductsPage,
});
