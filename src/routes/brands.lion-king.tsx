import { createFileRoute } from "@tanstack/react-router";
import { LionKingPage } from "@/components/lion-king-page";

export const Route = createFileRoute("/brands/lion-king")({
  head: () => ({
    meta: [
      { title: "광둥 라이온킹 세라믹스 — 이음앤빌드" },
      { name: "description", content: "포산의 대리석 타일 전문 기업 라이온킹과 2025 포틀랜드 시리즈를 소개합니다." },
      { property: "og:title", content: "광둥 라이온킹 세라믹스 — 이음앤빌드" },
      { property: "og:description", content: "천연석의 표정과 입체 질감을 구현하는 포틀랜드 타일 컬렉션" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LionKingPage,
});