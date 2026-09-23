export type Brand = {
  slug: string;
  number: string;
  name: string;
  english: string;
  since?: string;
  category: string;
  headline: string;
  intro: string;
  heroImage: string;
  gallery: string[];
  highlights: { title: string; body: string }[];
  metrics: { value: string; label: string }[];
  sections: { eyebrow: string; title: string; body?: string; items: { title: string; text?: string }[] }[];
};

export const brands: Brand[] = [
  {
    slug: "huanqiu-stone", number: "01", name: "환구석재", english: "HUANQIU STONE", since: "1986", category: "천연석 · 인조석 · 커튼월",
    headline: "중국 석재기업 최초로 유럽에 진출했습니다",
    intro: "1986년 중국 홍콩에서 설립된 중국 석재 산업 대표 기업입니다. 원석 채굴에서 인조석 생산, 커튼월 설계와 시공까지 한 회사 안에서 끝납니다.",
    heroImage: "010", gallery: ["018","019","020","021","022","023","024","025","026","027","028","029"],
    highlights: [
      { title: "유럽이 요구하는 기준", body: "품질과 인증의 문턱이 높은 유럽 시장에 중국 석재기업 중 처음 진입했습니다." },
      { title: "Breton 자동화 설비", body: "이탈리아 브레톤 최신 자동화 설비로 이탈리아산 대리석 사양을 자체 생산합니다." },
      { title: "설계·시공 1급 자격", body: "라이저우 기반의 연구개발, 설계·시공·컨설팅 통합 커튼월 석재 시스템을 제공합니다." },
    ],
    metrics: [{value:"1,390묘",label:"총 부지 · 약 92만㎡"},{value:"179만㎡",label:"연간 대판 생산능력"},{value:"110만㎡",label:"연간 규격판 생산능력"},{value:"6",label:"직영 생산기지"}],
    sections: [
      { eyebrow:"PRODUCTION BASES", title:"천연석 4개, 인조석 2개 기지", body:"대판에서 이형 가공까지 외주 없이 자체 생산해 물량과 납기를 즉시 확인합니다.", items:[
        {title:"푸젠 기지",text:"300묘 · 대판 70만㎡ · 규격판 40만㎡ · 이형 1,200㎥"},{title:"텐진 기지",text:"630묘 · 대판 60만㎡ · 규격판 40만㎡ · 이형 2,000㎥"},{title:"산둥 기지",text:"180묘 · 대판 40만㎡ · 규격판 15만㎡ · 이형 1만㎥"},{title:"둥관 기지",text:"280묘 · 대판 9만㎡ · 규격판 15만㎡ · 이형 700㎥"},{title:"둥관 창핑",text:"인조석 전용 · Breton 자동화 라인 · 전 공정 무인 제어"},{title:"광시 라이빈",text:"인조석 전용 · 원료산지 인접 · 친환경 설비 기준"}
      ]},
      { eyebrow:"KEY REFERENCES", title:"국가급 건축이 선택한 석재", body:"세계 100건 이상의 대표 프로젝트 중 12건입니다.", items:[
        "타지키스탄 정부청사 · 의회 청사","알제리 자마 그랜드 모스크 · 40만㎡ 이상","셰이크 자이드 그랜드 모스크 · 아부다비","에미리트 팰리스 호텔 · 내부 24만㎡","대한민국 천원궁 · KPF 설계","카타르 이슬람 미술관 · I. M. Pei 설계","인민대회당","홍콩 ‘영원히 피는 붉은목련’ 받침대","중국공산당 역사 전시관","다오위타이 국빈관","상하이 엑스포 센터","베이징 수도공항 전용기동"
      ].map((title)=>({title}))}
    ]
  },
  {
    slug:"intco-decor", number:"02", name:"잉코 데코", english:"INTCO DECOR", since:"2002", category:"벽패널 · 몰딩 · 바닥재 · 아웃도어",
    headline:"장식 몰딩을 연간 1억 3천만 m 만듭니다", intro:"상장기업 잉코(종목코드 688087)의 건축장식자재 브랜드입니다. 2002년 상하이에서 시작해 현재 실내외 마감재 전 품목을 직접 제조합니다.",
    heroImage:"079", gallery:["080","081","082","083","084","085","086","087","088","089"],
    highlights:[{title:"4개 지역 생산기지",body:"산동 410무 · 상하이 56무 · 안후이 100무 · 베트남 150무, 총 716무입니다."},{title:"자사 브랜드",body:"이바이션·이시무 등 자체 브랜드로 5개 카테고리를 통합 공급합니다."},{title:"그룹 내 원료 조달",body:"회수 EPS를 r-PS 펠릿으로 재생해 신재 대비 탄소 배출을 84% 낮춥니다."}],
    metrics:[{value:"1.3억m",label:"장식 몰딩 연 생산"},{value:"4,500만 개",label:"완제품 연 생산"},{value:"130+",label:"수출 대상국"},{value:"400+",label:"글로벌 유통·소매 체인"}],
    sections:[
      {eyebrow:"PRODUCT CATEGORIES",title:"벽에서 바닥, 실외까지",items:[{title:"벽패널",text:"흡음·3D · MDF · PS · SPC · WPC"},{title:"몰딩",text:"걸레받이 · 벽면 · 천장 · PS · MDF · PVC"},{title:"바닥 부속",text:"PVC 계단 디딤판 · 단차 · 마감 · T몰딩"},{title:"아웃도어",text:"WPC 외벽 · 데크 · 펜스 · DIY 데크 타일 · 인조 잔디"},{title:"바닥재",text:"SPC 플로어링 4mm · 5mm / 6종 규격"}]},
      {eyebrow:"SIGNATURE SERIES",title:"대표 벽패널 시리즈",items:[{title:"MDF 흡음 패널",text:"600×2400 · 600×3000mm · 중이톤 · 무니톤 · 천연 무니목"},{title:"MDF 3D 패널",text:"도장형 · 랩핑형 · 폭 122mm · 두께 12mm"},{title:"이바이션 3D 패널",text:"고급 · 기본 · 디자이너 3계열 · 폭 250 · 304 · 315mm"},{title:"SPC 석재 패널",text:"대리석무늬 · 암암판 · 고전암운 · 최대 1200×2400mm"},{title:"럭셔리 스톤",text:"연속 부합 마본 · UV 코팅 · 상업 공간 전용"}]},
      {eyebrow:"CERTIFIED PERFORMANCE",title:"재생 소재와 국제 인증",items:[{title:"소재",text:"PS · MDF · PVC · PET · WPC"},{title:"인증",text:"ISO 9001 · ISO 14001 · CE · VOC A+"},{title:"성능",text:"포름알데히드 무첨가 · 중금속 무첨가 · 방수"},{title:"벽패널",text:"최대 1200×2400mm"}]}
    ]
  }  {
    slug:"lion-king", number:"03", name:"광둥 라이온 킹 세라믹스", english:"GUANGDONG LION KING CERAMICS", category:"대리석 타일 · 내벽 타일",
    headline:"천연석의 표정을 타일로 구현합니다", intro:"중국 도자기 산업의 중심지 포산 화샤 세라믹 엑스포 시티에 위치한 대리석 타일 전문 기업으로, 생산·연구개발·판매를 일체화했습니다.",
    heroImage:"030", gallery:["031","032","033","034","035","036","037","038","039","040","041"],
    highlights:[{title:"해외 최첨단 설비",body:"세계적인 첨단 기술과 장비를 지속 도입해 업계 최전선 수준을 유지합니다."},{title:"국제 품질 관리",body:"생산 전 과정에서 국제 기준에 따라 검사하고 다수의 인증을 확보했습니다."},{title:"하이엔드 콘셉트",body:"실속 있는 고품질 타일이라는 철학으로 시장의 신뢰를 확보했습니다."}],
    metrics:[{value:"6",label:"포틀랜드 평면"},{value:"5",label:"포틀랜드 몰드면"},{value:"4",label:"핵심 제품군"},{value:"1",label:"바닥·벽 통합 톤"}],
    sections:[
      {eyebrow:"PRODUCT LINE",title:"대리석 타일 전문 라인",items:[{title:"통체(풀바디) 대리석 타일",text:"몸체 전체가 석재 질감으로 구성"},{title:"대리석 타일",text:"천연 대리석 문양 재현"},{title:"금강유 대리석 타일",text:"고경도 다이아몬드 글레이즈 표면"},{title:"내벽 타일",text:"실내 벽면 마감용"}]},
      {eyebrow:"PORTLAND 2025",title:"하나의 돌, 여러 가지 표면",body:"동일 시리즈로 바닥과 벽면을 하나의 톤으로 마감합니다.",items:[{title:"PLAIN SURFACE",text:"Y1 · Y2 · Y3 · Y4 · Y5 · Y6"},{title:"MOLD SURFACE",text:"M20 · M24 · M25 · M26 · M27"},{title:"ORDER-MADE SIZE",text:"900×1800 · 750×1500 · 600×1200mm 등 프로젝트 규격 주문 제작"},{title:"본사 소재지",text:"광둥성 포산시 선청구 난장진 지화서로 68호 · 중국 도자기 산업본부 기지 서구 A08호"}]}
    ]
  },
  {
    slug:"jincheng-glass", number:"04", name:"진청 유리", english:"JINCHENG GLASS", since:"1996", category:"강화 · 복층 · 접합 · Low-E · 커튼월",
    headline:"건축용 안전 유리를 30년간 만들어 왔습니다", intro:"1996년 설립된 고신기술기업으로 2023년 7월 11일 치루 지분거래센터에 상장했습니다. 생산 부지 50여 무, 약 33,000㎡를 보유합니다.",
    heroImage:"042", gallery:["043","044","045","046","047","048","049"],
    highlights:[{title:"3개 전용 생산라인",body:"템퍼링, 전자동 IGU, 접합 유리 라인을 보유하고 10여 개 성·시에 공급합니다."},{title:"성급 R&D 센터",body:"수십 건의 국가 특허와 스마트 조광·초박형 플렉시블 유리 연구 역량을 갖췄습니다."},{title:"청정 에너지",body:"지붕 태양광의 90%를 생산에 사용하고 10%는 국가 전력망에 병입합니다."}],
    metrics:[{value:"3–5배",label:"강화유리 충격·굽힘 강도"},{value:"300°C",label:"최대 온도 변화 내구"},{value:"99%+",label:"접합유리 자외선 차단"},{value:"3‰",label:"강화유리 자연 파손률"}],
    sections:[
      {eyebrow:"PRODUCTION EQUIPMENT",title:"7종 설비로 전 공정을 직접 처리",body:"절단부터 연삭·강화·접합·복층 조립·실란트 도포까지 자체 라인에서 완결합니다.",items:[{title:"Bottero",text:"이탈리아 유리 절단기"},{title:"Jinbo",text:"유리 연삭기"},{title:"Jingong",text:"강화로"},{title:"Leway",text:"PVB 오토클레이브"},{title:"BOZA",text:"Low-E 막층 제거기"},{title:"BOZA",text:"자동 간봉 절곡기"},{title:"HANJIANG",text:"실란트 도포기"}]},
      {eyebrow:"LOW-E & PRODUCT",title:"열복사를 반사하는 저방사 코팅",body:"단은은 총 5층, 이은은 총 7~10층 코팅으로 원적외선 열복사를 반사합니다.",items:[{title:"복층 유리",text:"단열 · 차음 · 결로 방지"},{title:"강화 유리",text:"충격 · 긁힘 강도 3~5배"},{title:"접합 유리",text:"PVB 필름 · 자외선 99% 차단"},{title:"방화유리 · 커튼월",text:"내화 완전성 · 단열성 유지"},{title:"인증",text:"ISO 9001 · ISO 14001 · GB · CE · ASTM · CCC"}]},
      {eyebrow:"KEY REFERENCES",title:"10여 개 성·시의 시공 파트너",items:[{title:"그룹",text:"비구이위안 · 룽창 · 장시 건공 · 자린 · 엔타이 페이룽 · 산동 진두 건축 · 룽커우 자위안 토공"},{title:"프로젝트",text:"중젠 웨하이허위안 · 장위 브랜드 양조장 · 페이룽 빌딩 · 진탄 가든 · 자오위안시 기록관 · 자오위안 가족성"}]}
    ]
  },
  {
    slug:"forest-house", number:"05", name:"이센메이쥐", english:"FOREST HOUSE", since:"2016", category:"마루 · 판재 · 함침지",
    headline:"원자재부터 완제품까지 한 공장에서 만듭니다", intro:"제이슨그룹 산하 산동 이센메이쥐는 마루와 판재의 연구개발·생산·가공·판매를 일체화한 과학기술형 기업입니다. 등록자본금 3,000만 위안입니다.",
    heroImage:"051", gallery:["052","053","054","055","056","057","058","059","060"],
    highlights:[{title:"함침지부터 마루까지",body:"함침지 라인 11기, 4색 인쇄라인 7기와 대규모 마루 생산 인프라를 운영합니다."},{title:"R&D 매출 5% 이상",body:"발명특허 2건, 실용신안 14건과 기업기술센터·중점실험실을 운영합니다."},{title:"검증된 인증 체계",body:"ISO 9001·14001 인증과 산동성 우수혁신성과상 2등상을 보유합니다."}],
    metrics:[{value:"12만 장",label:"함침지 일 생산"},{value:"2만㎡",label:"마루 일 생산"},{value:"1.5만 톤",label:"인쇄지 연 생산"},{value:"150무",label:"총 부지"}],
    sections:[
      {eyebrow:"PRODUCT LINE",title:"Beautiful Board for Life",items:["강화마루","다층 실목마루","신3중 실목마루","마루 기재","멜라민 함침지","가구판"].map((title)=>({title}))},
      {eyebrow:"FZ70 SERIES",title:"신3중 실목마루 11종 컬러",body:"밝은 오크부터 딥 월넛까지 실제 시공 공간을 기준으로 톤을 선택합니다.",items:[{title:"COLOR CODES",text:"FZ701 · FZ702 · FZ703 · FZ705 · FZ706 · FZ707 · FZ708 · FZ709 · FZ710 외 2종"},{title:"균일한 열전도",text:"3종 실목 기재를 열전도 매체로 적용"},{title:"방화 · 난연",text:"고강도 탄소섬유 패널로 균열과 층 분리 예방"},{title:"항균 · 항곰팡이",text:"이면 경화와 전면 360도 밀랍 처리"},{title:"건강 · 친환경",text:"활성탄 성분이 포름알데히드를 흡착·분해"}]},
      {eyebrow:"NATIONAL INVENTION PATENT",title:"그래핀 열전도 마루",items:[{title:"특허번호",text:"ZL201710763365.3"},{title:"규모",text:"생산·창고 4만㎡ · 인력 300여 명(기술 80여 명) · 전시장 1,000㎡"}]}
    ]
  },
  {
    slug:"shuofeng", number:"06", name:"슈오펑 목문", english:"SHUOFENG", since:"1988", category:"목문 · 목마감재 · 정목 가구",
    headline:"5성급 호텔 목공사를 37년간 해왔습니다", intro:"1988년 린이에서 시작한 인더스트리 4.0 제조 기업입니다. 디자인·연구개발·생산·판매·서비스를 일체화하고 문·벽·장을 같은 톤으로 맞춤 제작합니다.",
    heroImage:"062", gallery:["063","064","065","066","067","069","071","073","075","077"],
    highlights:[{title:"문·벽·장 일체화",body:"방문, 벽면 목시멘, 드레스룸과 수납장을 공간 단위로 맞춥니다."},{title:"린이 생산 거점",body:"장식자재 시장·물류원 3km 거리에서 원자재 원가와 리스크를 낮춥니다."},{title:"유럽 정밀 설비",body:"독일·이탈리아 설비로 프렌치, 미드센추리, 현대식, 신중식 등 맞춤 목공예를 구현합니다."}],
    metrics:[{value:"7동",label:"생산동"},{value:"4대",label:"스마트 창고"},{value:"300세트",label:"목문 일 생산"},{value:"1,000㎡",label:"목마감재 일 생산"}],
    sections:[
      {eyebrow:"PRODUCT & SCALE",title:"하이엔드 울우드 맞춤 제작",items:[{title:"목문류",text:"원목문 · 실목문 · 실목복합문 · 슬라이딩문 · PVC 라미네이트문"},{title:"목마감재류",text:"벽면 · 천장 · 목재 그릴 · 배경벽 · 화격벽 · 병풍"},{title:"가구·몰딩류",text:"옷장 · 서재장 · 주방장 · 계단 · 핸드레일 · 장식 몰딩"},{title:"생산 규모",text:"120무 · 공장 4.5만㎡ · 180명 · 고정자산 2.5억 위안 · 연 생산액 1.2억 위안 · 전시장 3,400㎡"},{title:"추가 일 생산",text:"수납장 200㎡ · 몰딩 3,000m"}]},
      {eyebrow:"SIGNATURE FORMS",title:"형태로 승부하는 5개 계열",items:[{title:"풀 아치",text:"문짝 전체 아치 · 4패널"},{title:"조각 장식",text:"입체 조각 부조 · 상부 몰딩"},{title:"아치 패널",text:"직사각 문짝 · 아치형 내부 패널"},{title:"양각 패널",text:"라운드 코너 · 단일 양각 프레임"},{title:"크라운 몰딩",text:"상부 돌출 몰딩 · 2단 패널"}]},
      {eyebrow:"REFERENCES & SERVICE",title:"호텔·주택·오피스·병원 레퍼런스",items:[{title:"5성급 호텔",text:"하이난 항수만 · 알카디아 · 산야 산해천대 · 하이커우 힐튼 · 곡부 메리어트 · 쓰촨 구채구 인디고"},{title:"주요 그룹",text:"영성개발 · 롱능그룹 · 노상그룹 · 쌍대그룹 · 태성항그룹"},{title:"품질보증",text:"2년 보증 · 종신 A/S · 보증 내 수리·교환·환불 · 이후 소모품 원가만 과금"}]}
    ]
  },
];

export const steps = [
  ["01","문의 · 사양 확인","프로젝트 규모와 요구 사양, 목표 단가와 일정을 확인합니다."],
  ["02","본사 직통 조회","중국 본사 생산 라인의 재고와 스케줄을 직통 채널로 확인합니다."],
  ["03","한국 HQ 확정","단가와 사양, 납기를 공동대표가 그 자리에서 확정합니다."],
  ["04","계약 · 생산","한국 법인 명의로 계약하고 본사 라인에 물량을 배정합니다."],
  ["05","납품 · 시공","통관과 물류, 현장 반입을 관리하고 필요 시 시공 인력까지 투입합니다."]
];