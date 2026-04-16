# 🎵 AudioToolbox

MP3 파일의 태그(아티스트, 제목, 앨범아트, 가사)를 AI로 자동 정리하고 다운로드할 수 있는 브라우저 기반 도구입니다.
서버 없이 순수 프론트엔드로 동작하며, 파일은 브라우저 밖으로 전송되지 않습니다.

---

## 주요 기능

### AI 매직 채우기
지저분한 파일명에서 아티스트명과 곡명을 자동으로 추출합니다.

- 유튜브 업로더 태그 제거 (`[웅키]`, `[1theK]`, `[HYBE]` 등)
- 홍보성 노이즈 제거 (`Official MV`, `Color Coded Lyrics`, `1080p` 등)
- 피처링 정보 보존 (`(feat. xxx)`, `(With xxx)`)
- 한글/영문 혼재 파일명 처리
- **검색 최적화 쿼리 자동 생성** — 한국어 아티스트명을 영문으로 변환 (예: `아이유` → `IU`, `자이언티` → `Zion.T`)하여 이후 앨범아트·가사 검색에 활용

지원 AI 모델:
| 모델 | 제공사 | 특징 |
|------|--------|------|
| gpt-4o-mini | OpenAI | 가장 추천, 빠르고 저렴 (1곡당 약 0.04원) |
| gpt-4o | OpenAI | 고성능 |
| gemini-2.0-flash | Google | 최신/추천 |
| gemini-1.5-flash | Google | 안정적 |
| gemini-1.5-pro | Google | 고성능 |

---

### 앨범아트 자동 검색
AI가 추출한 검색 쿼리를 기반으로 앨범아트를 자동으로 찾아 태그에 삽입합니다.

검색 순서 및 전략:
1. 한글 원본 쿼리로 iTunes 시도
2. 한글 원본 쿼리로 Deezer 시도
3. 영문 아티스트명 + 한글 제목 조합으로 iTunes/Deezer 시도 (예: `IU 사랑이 잘`)
4. 괄호 제거 버전으로 재시도 (예: `IU 사랑이 잘 (With 오혁)` → `IU 사랑이 잘`)
5. AI 생성 영문 쿼리로 최종 시도

> iTunes와 Deezer는 CORS 정책으로 브라우저에서 직접 호출이 불가능합니다.
> Cloudflare Workers로 만든 CORS 프록시를 통해 호출합니다.

---

### 가사 자동 검색 (LRCLIB)
[LRCLIB](https://lrclib.net) API를 사용해 싱크 가사(LRC) 또는 일반 가사를 자동으로 찾습니다.

검색 순서:
1. 한글 아티스트명 + 한글 제목
2. 영문 아티스트명 + 한글 제목 (예: `IU` + `사랑이 잘 (With 오혁)`)
3. 영문 아티스트명 + 영문 제목
4. 전체 영문 쿼리 통검색

---

### 태그 적용 및 다운로드
편집이 완료된 파일들을 ZIP으로 묶어 한 번에 다운로드합니다.
- 아티스트, 제목, 앨범아트, 가사 태그 모두 적용
- ID3 태그 형식 (browser-id3-writer 라이브러리 사용)

---

### 기타
- 앨범아트 직접 업로드 (파일 선택)
- 가사 직접 편집
- 검색 쿼리 직접 수정 (AI가 잘못 생성했을 때 수동 수정 가능)
- 다국어 지원: 한국어, English, 中文, 日本語
- 다크/라이트 테마 전환
- 페이지네이션 (파일 많을 때)
- 활동 로그 — 각 검색 시도 결과를 상세히 표시

---

## 사용 방법

1. **MP3 파일 업로드** — 드래그 앤 드롭 또는 클릭하여 파일 선택
2. **AI 매직 채우기** — AI 모델과 API 키 입력 후 분석 시작
3. **가사 전체 검색** — LRCLIB에서 가사 자동 검색
4. **아트 전체 검색** — iTunes/Deezer에서 앨범아트 자동 검색
5. **태그 적용 및 다운로드** — ZIP 파일로 다운로드

> AI 없이도 아티스트명/제목을 직접 입력하고 앨범아트·가사만 자동 검색하는 것도 가능합니다.

---

## 기술 스택

- **프론트엔드**: 순수 HTML/CSS/JavaScript (프레임워크 없음)
- **AI**: OpenAI API, Google Gemini API
- **앨범아트**: iTunes Search API, Deezer API (Cloudflare Workers CORS 프록시 경유)
- **가사**: LRCLIB API
- **MP3 태그 읽기**: jsmediatags
- **MP3 태그 쓰기**: browser-id3-writer
- **ZIP 생성**: JSZip
- **CORS 프록시**: Cloudflare Workers

---

## API 키 안내

### OpenAI
1. [platform.openai.com](https://platform.openai.com) 접속
2. API Keys 메뉴에서 키 생성
3. 앱 내 AI 설정 모달에 입력

### Google Gemini
1. [aistudio.google.com](https://aistudio.google.com) 접속
2. Get API Key에서 키 생성
3. 앱 내 AI 설정 모달에 입력

> API 키는 브라우저 로컬스토리지에만 저장되며 외부로 전송되지 않습니다.
> "이 브라우저에서 기억하기" 체크 시 다음에도 자동 입력됩니다.

---

## 비용 안내

| 작업량 | 예상 비용 (gpt-4o-mini 기준) |
|--------|------------------------------|
| 10곡 | 약 0.4원 |
| 100곡 | 약 4원 |
| 1,000곡 | 약 40원 |

앨범아트 검색, 가사 검색은 무료입니다.

---

## 로컬 실행

별도 설치 없이 `index.html`을 브라우저에서 열면 바로 실행됩니다.

```bash
git clone https://github.com/JKH-ML/mp3-editor.git
cd mp3-editor
# index.html을 브라우저로 열기
```
