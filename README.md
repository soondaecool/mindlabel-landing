# mindlabel 랜딩페이지

마음 날씨를 기록하고, 패턴을 분석해 드립니다. React + Tailwind CSS 기반 모바일 최적화 랜딩페이지입니다.

## 실행 방법

```bash
npm install
npm run dev      # http://localhost:5173 에서 개발 서버 실행
npm run build    # dist/ 에 프로덕션 빌드 생성
npm run preview  # 빌드 결과 미리보기
```

## 폴더 구조

```
src/
  components/
    Header.jsx           # 상단 고정 헤더 (로고 + 다운로드 링크)
    Hero.jsx              # 상단 비주얼 섹션 (카피 + 날씨 아이콘 배지)
    FeatureSection.jsx    # 기능 설명 4개 카드 섹션
    FeatureCard.jsx       # 개별 기능 카드
    DownloadCTA.jsx       # 다운로드 유도 섹션 (App Store CTA)
    Footer.jsx            # 푸터
    StickyMobileCTA.jsx   # 모바일 전용 하단 고정 다운로드 바
  hooks/
    useScrollPastElement.js  # Hero 통과 여부 감지(IntersectionObserver)
  config/
    site.js               # App Store URL 등 공통 설정값
  App.jsx
  index.css
```

## 수정 포인트

- **App Store 링크**: [`src/config/site.js`](src/config/site.js)의 `APP_STORE_URL`을 실제 앱 스토어 URL로 교체하세요.
- **컬러/폰트**: [`tailwind.config.js`](tailwind.config.js)의 `sage`/`cream`/`ink`/`weather` 컬러 팔레트에서 조정할 수 있습니다.
- **카피/문구**: 각 컴포넌트 파일 내 텍스트를 직접 수정하면 됩니다.

## 참고 기획서

이 프로젝트는 `mindlabel_랜딩페이지_기획서_594e5956.plan.md`의 상세 스펙을 기반으로 구현되었습니다.
