![image](https://github.com/user-attachments/assets/064cb220-ce19-4344-a827-54a177b89020)

인트로 화면

![image](https://github.com/user-attachments/assets/afb30550-12c4-4a0e-a5db-9618af819e85)

홈 화면 GPT와 대화가 가능하도록 만듦

![image](https://github.com/user-attachments/assets/955b8171-d80f-407d-98dd-c9bdac6c6d31)

게시글 화면 댓글 달기 수정가능

![image](https://github.com/user-attachments/assets/8e6fb461-8e37-4c96-be96-3fa09b0acedb)

개인정보 페이지 본인이 적었던 글 공감했던글 댓글 달았던 글 확인가능

🍸 Nightcap 프로젝트 (2025 Web Programming)

React + Spring Boot 기반의 익명 고민 공유 플랫폼입니다.
사용자는 고민을 게시하고, 댓글과 공감을 통해 서로의 이야기를 나눌 수 있습니다.

📸 주요 화면

🔐 인트로 화면



🏠 홈 화면 (GPT와 대화 가능)



📝 게시글 상세 (댓글 작성 및 수정 가능)



🙋 마이페이지 (내가 작성/공감/댓글 단 글 확인 가능)



📁 프로젝트 구조

Nightcap/
├── components/          # 공통 컴포넌트 (Header, Logo 등)
├── pages/               # 라우팅되는 주요 페이지
├── config/              # 설정 파일 (API 등)
├── src/                 # 루트 App / index.js
├── public/              # 정적 파일
├── .env                 # 환경 변수
├── .gitignore           # Git 제외 목록
└── ...

⚙ 주요 기능별 설명

🧭 App.jsx (루트 컴포넌트)

Routes를 이용한 라우팅 처리

로그인/회원가입/마이페이지 제외 페이지에 Header 렌더링

useState로 전역 상태 관리 (로그인, 사용자, 카테고리 등)

게시글 목록 초기 fetch 및 localStorage를 통한 로그인 유지

📌 Header.jsx

로그인 시 사용자 alias + 아바타 출력

비로그인 시 로그인 버튼 노출

중앙에는 클릭 가능한 LogoBlock

하단에 카테고리 필터 버튼들 배치 (전체, 연애, 진로 등)

🏠 HomePage.jsx

selectedCategory에 따라 게시글 필터링

각 게시글의 댓글 미리보기 (좋아요 수 기준 상위 2개)

게시글 공감(좋아요) 기능

댓글 등록 및 댓글에 대한 반응(좋아요/싫어요) 가능

🔑 LoginPage.jsx

사용자 입력 → 서버에 POST 요청으로 로그인 처리

로그인 성공 시 localStorage에 사용자 저장

아이디 저장 기능 포함 (자동입력)

✍️ SignupPage.jsx

이메일, 비밀번호 입력

서버에 POST 요청하여 회원가입 처리

성공 시 로그인 페이지로 이동

➕ NewPostPage.jsx

카테고리 드롭다운 선택, 텍스트 작성

로그인하지 않은 사용자는 /login으로 이동

POST 요청으로 게시글 작성 후 홈으로 이동

🧾 PostDetailPage.jsx

postId 기반 게시글 조회

댓글 리스트 fetch 및 렌더링

댓글 작성, 댓글에 반응(좋아요/싫어요), 댓글 수정

댓글 미리보기에 GPT 응답 기능 내장

👤 MyPage.jsx

내가 쓴 글, 댓글 단 글, 좋아요 누른 글 탭 전환

각 탭은 해당 항목들을 fetch해서 렌더링

로그인 상태가 아니면 로그인 페이지로 이동

🧠 Spring Boot 백엔드 구조

📦 패키지 구조

com.example.board/
├── config/           # 설정 (CORS, WebConfig 등)
├── controller/       # REST API 컨트롤러
├── domain/           # JPA 엔티티 (Post, Comment, User, Like 등)
├── dto/              # 전송용 객체 (PostDto, UserDto 등)
├── repository/       # JPA 인터페이스
└── ...

🌐 주요 API

기능

엔드포인트

메서드

게시글 전체 조회

/posts

GET

게시글 생성

/posts

POST

게시글 삭제

/posts/{id}

DELETE

댓글 작성

/comments

POST

댓글 조회 (게시글 기준)

/comments/post/{postId}

GET

내 글 조회

/users/{id}/posts

GET

내가 댓글 단 글

/users/{id}/commented-posts

GET

내가 좋아요 누른 글

/users/{id}/liked-posts

GET

🛠 사용 기술 스택

Frontend

React 18

React Router

Tailwind CSS

Fetch API + useEffect

localStorage

Backend

Spring Boot 3.x

Spring Data JPA

MySQL

Lombok

CORS 설정

✏️ 발표자 정보

정재훈 (2019875058)경성대학교 소프트웨어학과 4학년

📚 GitHub Repository

💻 실습 모음

🌙 Nightcap 프로젝트

"어두운 밤, 익명의 고민과 기발한 조언이 오가는 바 - Nightcap"
