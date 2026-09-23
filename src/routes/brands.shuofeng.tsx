import { createFileRoute } from "@tanstack/react-router";
import { ShuofengPage } from "@/components/shuofeng-page";

export const Route = createFileRoute("/brands/shuofeng")({
  head: () => ({ meta: [
    { title: "슈오펑 목문 — 이음앤빌드" },
    { name: "description", content: "37년 목공 기술로 문·벽·수납장을 통합 제작하는 슈오펑 목문." },
    { property: "og:title", content: "슈오펑 목문 — 이음앤빌드" },
    { property: "og:description", content: "고급 주택과 호텔을 위한 전 공간 맞춤 목공 솔루션" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ShuofengPage,
});