# Web

## 함정

- **Tailwind 기본 컬러 리셋됨.** `text-gray-*`, `bg-blue-*` 등 사용 불가. MD3 시맨틱 토큰만 사용 (`bg-surface`, `text-primary` 등). `global.css` 참고.
- **디자인 토큰은 미사용이어도 삭제 금지.** 디자인 시스템 확장을 위해 의도적으로 남겨둔 것.

## 의도

- **`<style>` 블록 없음**: Tailwind 유틸리티만 사용. 예외는 서드파티 오버라이드용 `<style is:global>`뿐.
- **상태 토글에 CSS 클래스 안 씀**: `data-*` 속성 + Tailwind `data-*:` variant로 처리.
- **페이지 단일 파일**: 데이터·마크업·스크립트를 한 `.astro` 파일에. 분리하지 않음.

## GA4

- 측정 ID: `env.PUBLIC_GA4_ID`
- 이벤트 네이밍: `행위_대상` (snake_case, verb first)
- 맞춤 측정기준: `label`, `property`
- 이벤트 목록: `tap_contact`, `open_faq`, `explore_section`, `tap_link`, `view_section`
