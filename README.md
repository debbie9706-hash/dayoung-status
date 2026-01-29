# 🌸 다영이 상태 알림 페이지

애인의 아버지에게 현재 상태를 알려주는 간단한 웹페이지입니다.

## ✨ 주요 특징

- 📱 **앱으로 설치 가능** - 홈 화면에 추가하면 앱처럼 사용
- 👴 **어르신 친화적 디자인** - 큰 글씨, 명확한 아이콘, 쉬운 조작
- 🔄 **실시간 상태 확인** - 큰 새로고침 버튼으로 최신 상태 확인
- 🎨 **상태별 색상 구분** - 한눈에 상태 파악 가능

## 기능

### 📍 현재 상태 (3가지)
- 🏠 집에 가고 있어요 (초록색)
- 🌙 아직 밖에 있어요 (파란색)
- 💼 지금 바빠요 (주황색)

### 🍚 배고픔 상태 (2가지)
- 😊 오늘은 배가 안 고파요, 먼저 주무세요 (하늘색)
- 🍽️ 오늘은 배가 고파요, 밥 주세요! (분홍색)

---

## 📱 앱 설치 방법 (아버지께 알려드릴 내용)

### 아이폰 (Safari)
1. Safari로 페이지 열기
2. 화면 아래 ⬆️ 공유 버튼 누르기
3. "홈 화면에 추가" 선택
4. 오른쪽 위 "추가" 누르기

### 안드로이드 (Chrome)
1. Chrome으로 페이지 열기
2. "앱 설치하기" 버튼 누르기
3. 또는 ⋮ 메뉴 → "홈 화면에 추가"

---

## 🚀 설정 방법

### 1단계: Cloudflare Worker 설정

1. [Cloudflare Dashboard](https://dash.cloudflare.com/)에 로그인
2. 좌측 메뉴에서 **Workers & Pages** 클릭
3. **Create** 버튼 클릭 → **Create Worker** 선택
4. Worker 이름 입력 (예: `dayoung-status-api`)
5. **Deploy** 클릭

### 2단계: KV Namespace 생성

1. 좌측 메뉴에서 **Workers & Pages** → **KV** 클릭
2. **Create a namespace** 클릭
3. 이름 입력 (예: `dayoung-status`)
4. **Add** 클릭

### 3단계: Worker에 KV 연결

1. 생성한 Worker 클릭
2. **Settings** 탭 → **Bindings** 클릭
3. **Add** → **KV Namespace** 선택
4. Variable name: `STATUS_KV` (정확히 입력!)
5. KV Namespace: 방금 생성한 namespace 선택
6. **Deploy** 클릭

### 4단계: Worker 코드 입력

1. Worker 페이지에서 **Edit code** 클릭
2. 기존 코드를 모두 삭제
3. `worker.js` 파일의 내용을 붙여넣기
4. **Deploy** 클릭

### 5단계: Worker URL 복사

1. Worker 페이지 상단에 있는 URL 복사
   - 예: `https://dayoung-status-api.your-subdomain.workers.dev`

### 6단계: GitHub Pages 설정

1. GitHub에 새 저장소 생성 (예: `dayoung-status`)
2. 모든 파일 업로드:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
3. **중요!** `index.html`에서 `API_URL` 부분을 Worker URL로 변경:
   ```javascript
   const API_URL = 'https://dayoung-status-api.your-subdomain.workers.dev';
   ```
4. 저장소 Settings → Pages → Source를 `main` 브랜치로 설정
5. 페이지 URL 확인 (예: `https://username.github.io/dayoung-status`)

---

## 🔐 관리자 모드 사용법 (다영이 전용)

1. 페이지 우측 하단의 작은 ⚙️ 버튼 클릭
2. 비밀번호 입력 (기본값: `dayoung123`)
3. 상태 선택 후 "상태 저장하기" 클릭

### 비밀번호 변경

`index.html`에서 아래 부분을 수정하세요:
```javascript
const ADMIN_PASSWORD = 'dayoung123';  // 원하는 비밀번호로 변경
```

---

## 📁 파일 구조

```
dayoung-status/
├── index.html      # 메인 페이지
├── manifest.json   # PWA 설정 파일
├── sw.js           # 서비스 워커 (오프라인 지원)
├── icon-192.png    # 앱 아이콘 (192x192)
├── icon-512.png    # 앱 아이콘 (512x512)
├── worker.js       # Cloudflare Worker 코드
└── README.md       # 이 파일
```

---

## 🎨 커스텀 아이콘 만들기

더 예쁜 아이콘을 원하시면:
1. 192x192, 512x512 크기의 PNG 이미지 준비
2. `icon-192.png`, `icon-512.png`로 이름 변경
3. 기존 파일 대체

---

## ⚠️ 주의사항

- Worker URL은 반드시 `index.html`에 정확히 입력해야 합니다
- KV Variable name은 반드시 `STATUS_KV`로 입력해야 합니다
- 모든 파일을 GitHub에 업로드해야 앱 설치가 가능합니다

---

💕 Made with love for 다영 & 아버지
