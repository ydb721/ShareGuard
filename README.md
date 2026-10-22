# ShareGuard

사진과 게시글을 공유하기 전에 개인정보 및 위치 단서를 확인하고, 사용자가 선택한 부분을 보호 편집하는 웹 애플리케이션입니다.

- **웹앱:** https://shareguard-two.vercel.app/
- **실행 파일:** [`index.html`](./index.html) (스타일이 포함된 배포용 파일)
- **분리된 소스코드:** [`source/index.html`](./source/index.html) 및 [`source/assets/readability.css`](./source/assets/readability.css)
- **v0.3 전체 소스 ZIP:** [`downloads/ShareGuard_v0.3_source.zip`](./downloads/ShareGuard_v0.3_source.zip)
- **계획/검증 문서:** [`docs/`](./docs/)

## 지원 기능

JPEG, PNG, WebP의 주요 메타데이터 검사, 게시글 규칙 기반 개인정보 탐지, 이미지 가림 영역 직접 지정, 항목별 ON/OFF, 스티커·블러·모자이크·불투명 가림, 편집본 재검사 및 다운로드를 제공합니다.

## 실행 방법

루트의 `index.html`을 브라우저에서 열거나 배포 주소에 접속해 주세요. `source/index.html`을 실행할 때는 `source/assets/readability.css`를 동일한 폴더 구조로 유지해 주세요.

## 한계 및 개인정보 보호

사진 속 얼굴·간판의 AI 자동 인식은 **아직 구현되지 않았습니다**. 주요 이미지 메타데이터 검사에도 지원 범위의 한계가 있습니다. 편집 결과가 완전히 안전하다는 보장은 제공하지 않습니다. 현재 MVP의 사진 처리는 사용자의 브라우저에서 수행합니다.
