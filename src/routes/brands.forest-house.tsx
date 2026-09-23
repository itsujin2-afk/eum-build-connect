import { createFileRoute } from "@tanstack/react-router";
import { ForestHousePage } from "@/components/forest-house-page";

export const Route = createFileRoute("/brands/forest-house")({
  head: () => ({ meta: [
    { title: "이센메이쥐 — 이음앤빌드" },
    { name: "description", content: "함침지부터 마루까지 직접 생산하는 이센메이쥐의 기업 규모, 생산설비, 연구개발과 지열마루 기술을 소개합니다." },
    { property: "og:title", content: "이센메이쥐 — 이음앤빌드" },
    { property: "og:description", content: "인쇄·함침·기재·완제품을 잇는 목재 생산 체계와 신3중 실목 지열마루" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ForestHousePage,
});