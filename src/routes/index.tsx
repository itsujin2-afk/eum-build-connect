import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { CinematicHome } from "@/components/cinematic-home";

export const Route = createFileRoute("/")({
  head:()=>({meta:[{title:"이음앤빌드 — 중국 6개 건축자재 브랜드 공식 한국 HQ"},{name:"description",content:"본사 직통 단일 마진 구조로 석재, 타일, 유리, 마루, 목문, 벽패널을 공급하는 이음앤빌드입니다."},{property:"og:title",content:"이음앤빌드 — Exclusive Regional HQ"},{property:"og:description",content:"중국 최정상 6개 건축자재 브랜드의 공식 한국 독점 HQ"},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),
  component: Home,
});

function Home(){return <SiteShell hideFooterLogo>
  <CinematicHome/>
</SiteShell>}