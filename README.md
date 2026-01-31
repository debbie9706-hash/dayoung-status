# 다영이 상태 알림 📱

아버지와 다영이가 실시간으로 소통하는 상태 알림 Progressive Web App (PWA)

## 🚀 앱 설치 방법

### Android / Chrome

1. 웹사이트에 접속합니다
2. 자동으로 나타나는 **"앱으로 설치하기"** 배너에서 **"지금 설치하기"** 버튼을 클릭
3. 또는 브라우저 주소창 옆의 ⊕ 버튼 클릭
4. "설치" 또는 "홈 화면에 추가" 선택

### iOS Safari

1. Safari로 웹사이트에 접속합니다
2. 하단의 **공유 버튼** (📤) 을 탭합니다
3. 스크롤하여 **"홈 화면에 추가"** 를 선택합니다
4. 오른쪽 상단의 **"추가"** 를 탭합니다

### Desktop (Windows/Mac)

1. Chrome/Edge로 웹사이트에 접속합니다
2. 주소창 오른쪽의 설치 아이콘 (⊕) 클릭
3. "설치" 클릭

## ✨ PWA 기능

- 📱 **앱처럼 사용**: 홈 화면에 아이콘 추가
- 🔔 **푸시 알림**: 새 메시지 알림 (선택 가능)
- ⚡ **빠른 로딩**: 캐시를 통한 즉시 로딩
- 📵 **오프라인 지원**: 인터넷 없이도 기본 기능 사용 가능
- 🎨 **네이티브 느낌**: 브라우저 UI 없이 깔끔한 화면

## 🛠️ 기술 스택

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Backend**: Cloudflare Workers
- **PWA**: Service Worker, Web App Manifest
- **Hosting**: GitHub Pages

## 📋 주요 기능

1. **실시간 상태 확인**
   - 다영이의 위치 (집에 가는 중, 집 도착, 밖에 있음, 바쁨)
   - 배고픔 상태

2. **아버지 정보 전달**
   - 기분 선택 (좋음, 보통, 피곤, 화남, 슬픔)
   - 하고싶은 말
   - 당부할 말
   - 기타 메모

3. **메시지 히스토리**
   - 주고받은 메시지 확인
   - 읽음 표시
   - 메시지 삭제

4. **알림 설정**
   - 새 메시지 알림 ON/OFF

## 🔧 개발자 정보

### PWA 진단 도구

`pwa-test.html`에 접속하면 PWA 설치 상태를 진단할 수 있습니다:
- HTTPS 연결 확인
- Service Worker 등록 상태
- Manifest 로드 상태
- 설치 가능 여부

### 파일 구조

```
dayoung-status/
├── index.html          # 메인 앱
├── manifest.json       # PWA 설정
├── sw.js              # Service Worker
├── icon-192.png       # 앱 아이콘 (192x192)
├── icon-512.png       # 앱 아이콘 (512x512)
├── pwa-test.html      # PWA 진단 도구
└── README.md          # 이 파일
```

### Service Worker 캐시 전략

- **정적 파일**: Cache First (빠른 로딩)
- **API 요청**: Network First (최신 데이터)
- **오프라인**: 캐시된 index.html 제공

## 🐛 문제 해결

### 배너가 안 보여요
1. 브라우저 콘솔(F12)에서 로그 확인
2. localStorage 초기화:
   ```javascript
   localStorage.removeItem('installBannerDismissed')
   location.reload()
   ```
3. `pwa-test.html`에서 상세 진단

### 앱이 설치 안 돼요
- **HTTPS 필요**: HTTP에서는 PWA 설치 불가
- **브라우저 지원**: Chrome, Edge, Safari 최신 버전 사용
- **이미 설치됨**: 설치된 앱은 재설치 불가 (삭제 후 재설치)

### Service Worker 업데이트
브라우저 개발자 도구 → Application → Service Workers → Update

## 📞 문의

문제가 있거나 개선 사항이 있다면 GitHub Issues에 등록해주세요.

---

💕 다영이를 위한 앱
