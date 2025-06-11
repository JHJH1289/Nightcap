# 🍸 Nightcap 프로젝트 (2025 Web Programming)

React + Spring Boot 기반의 **익명 고민 공유 플랫폼**입니다.  
사용자는 고민을 게시하고, 댓글과 공감을 통해 서로의 이야기를 나눌 수 있습니다.

---

## 📸 주요 화면

### 🔐 인트로 화면  
![인트로](https://github.com/user-attachments/assets/064cb220-ce19-4344-a827-54a177b89020)

---

### 🏠 홈 화면 (GPT와 대화 가능)  
![홈](https://github.com/user-attachments/assets/afb30550-12c4-4a0e-a5db-9618af819e85)

---

### 📝 게시글 상세 (댓글 작성 및 수정 가능)  
![게시글](https://github.com/user-attachments/assets/955b8171-d80f-407d-98dd-c9bdac6c6d31)

---

### 🙋 마이페이지 (내가 작성/공감/댓글 단 글 확인 가능)  
![마이페이지](https://github.com/user-attachments/assets/8e6fb461-8e37-4c96-be96-3fa09b0acedb)

---

## 📁 프로젝트 구조

<details>
<summary>디렉토리 구조 보기</summary>

Nightcap/
├── components/ # 공통 컴포넌트 (Header, Logo 등)
├── pages/ # 라우팅되는 주요 페이지
├── config/ # 설정 파일 (API 등)
├── src/ # 루트 App / index.js
├── public/ # 정적 파일
├── .env # 환경 변수
├── .gitignore # Git 제외 목록
└── ...

yaml
복사
편집
</details>

---

## ⚙ 주요 기능 요약

### 🧭 App.jsx (루트 컴포넌트)
- `Routes`를 이용한 라우팅 처리
- 특정 경로에선 Header 숨김 (`/login`, `/signup`, `/mypage`)
- 로그인 상태, 게시글 목록, 카테고리 등 전역 상태 관리
- localStorage 기반 로그인 복원

---

### 📌 Header.jsx
- 로그인 시 사용자 alias 및 아바타 출력
- 비로그인 시 로그인 버튼
- 카테고리 필터 버튼

---

### 🏠 HomePage.jsx
- 선택된 카테고리 기준으로 게시글 필터링
- 댓글 미리보기 (좋아요 순 + 최신 순)
- 댓글 공감, 댓글 작성 기능 포함

---

### 🔐 LoginPage.jsx
- 사용자 로그인 처리 (POST)
- 로그인 정보 저장 + localStorage
- 아이디 저장 기능 포함

---

### ✍️ SignupPage.jsx
- 회원가입 폼 입력 → POST 요청
- 성공 시 로그인 페이지로 이동

---

### ➕ NewPostPage.jsx
- 로그인 상태 확인
- 카테고리 선택 + 게시글 작성 → POST 전송

---

### 🧾 PostDetailPage.jsx
- 게시글 상세 + 댓글 불러오기
- 댓글 작성, 수정, 공감 가능
- GPT 자동 댓글 생성 기능 포함

---

### 👤 MyPage.jsx
- 내가 쓴 글 / 공감한 글 / 댓글 단 글 조회
- 탭 전환으로 각각 확인 가능

---

## 🧠 Spring Boot 백엔드 구조

<details>
<summary>패키지 구조 보기</summary>

com.example.board/
├── config/ # 설정 (CORS, WebConfig 등)
├── controller/ # REST API 컨트롤러
├── domain/ # JPA 엔티티 (Post, Comment, User, Like 등)
├── dto/ # 전송용 객체 (PostDto, UserDto 등)
├── repository/ # JPA 인터페이스
└── ...

yaml
복사
편집
</details>

---

### 🌐 주요 API

| 기능                  | 엔드포인트                          | 메서드 |
|----------------------|--------------------------------------|--------|
| 게시글 전체 조회     | `/posts`                             | GET    |
| 게시글 생성          | `/posts`                             | POST   |
| 게시글 삭제          | `/posts/{id}`                        | DELETE |
| 댓글 작성            | `/comments`                          | POST   |
| 댓글 조회 (게시글별) | `/comments/post/{postId}`            | GET    |
| 내가 쓴 글           | `/users/{id}/posts`                  | GET    |
| 댓글 단 글 조회      | `/users/{id}/commented-posts`        | GET    |
| 좋아요한 글 조회     | `/users/{id}/liked-posts`            | GET    |

---

## 🛠 기술 스택

### ✅ Frontend
- React 18
- React Router v6
- Tailwind CSS
- Fetch API
- localStorage

### ✅ Backend
- Spring Boot 3.x
- Spring Data JPA
- MySQL
- Lombok
- CORS 설정

---

## ✏️ 발표자 정보

> **정재훈 (2019875058)**  
> 경성대학교 소프트웨어학과 4학년

---

## 📚 관련 Repository

- [💻 실습 모음](https://github.com/JHJH1289/Web_Programming)
- [🌙 Nightcap 프로젝트](https://github.com/JHJH1289/Nightcap)

---

> “어두운 밤, 익명의 고민과 기발한 조언이 오가는 바 - Nightcap”

# React

1) 프로젝트 개요 소개
 - nightcap 프로젝트는 React 기반으로 구성됨
 - 주요 디렉토리: components, pages, config, src, public, .env, .gitignore

2) 공통 컴포넌트 (components/)
 - LogoBlock.jsx       : 상단에 표시되는 로고 UI 컴포넌트
 - Header.jsx          : 로그인 상태에 따라 변하는 상단 메뉴바 (카테고리 필터 포함)

3) 페이지 컴포넌트 (pages/)
 - HomePage.jsx        : 게시글 리스트 및 메인 화면 구성
 - LoginPage.jsx       : 로그인 입력 처리, localStorage 연동
 - SignupPage.jsx      : 회원가입 폼 및 서버 연동
 - NewPostPage.jsx     : 게시글 작성 및 제출 기능
 - PostDetailPage.jsx  : 게시글 상세 보기 + 댓글 렌더링
 - MyPage.jsx          : 내가 쓴 글 / 좋아요 / 댓글 확인 페이지

4) 설정 및 유틸 (config/)
 - db.js               : 서버 주소, 공통 통신 설정 등 정의

5) 루트 구성 (src/)
 - App.jsx             : 전체 앱 구조 및 라우팅 처리
 - index.js            : App 컴포넌트를 DOM에 마운트 (React 진입점)

6) 기타 설정
 - .env                : 서버 주소, API 키 등 환경 변수 설정
 - .gitignore          : Git에 포함시키지 않을 파일 목록 (예: node_modules, .env)


========== App.js ==========

📄 App.jsx 
App.jsx는 전체 리액트 애플리케이션의 **루트 컴포넌트**로서,  
라우팅 설정과 전역 상태 관리, 그리고 Header 컴포넌트 조건부 렌더링을 담당합니다.

---

✅ 1. 라우팅 구성 및 페이지 전환

```jsx
import { Routes, Route, useLocation } from "react-router-dom";
```

- `react-router-dom`의 `Routes`와 `Route`를 사용해 페이지별 컴포넌트를 매핑합니다.
- URL 경로에 따라 각각의 페이지가 렌더링되며,  
  예를 들어 `/login`으로 접속하면 `LoginPage`가, `/new`이면 `NewPostPage`가 보여집니다.

---

✅ 2. 헤더 컴포넌트 조건부 렌더링

```jsx
const hideHeaderRoutes = ["/login", "/signup", "/mypage"];
const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

{!shouldHideHeader && (
  <Header
    currentUser={currentUser}
    selectedCategory={selectedCategory}
    setSelectedCategory={setSelectedCategory}
  />
)}
```

- 특정 경로에서는 상단 메뉴(헤더)를 숨기기 위해 조건부 렌더링이 설정되어 있습니다.
- 예를 들어 로그인, 회원가입, 마이페이지에서는 헤더를 감춥니다.
- 그 외의 페이지에서는 헤더가 항상 보여지며, 사용자 정보와 카테고리 필터 기능을 포함합니다.

---

✅ 3. 전역 상태 관리

```jsx
const [message, setMessage] = useState("");
const [posts, setPosts] = useState([]);
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [authToken, setAuthToken] = useState(null);
const [userId, setUserId] = useState(null);
const [selectedCategory, setSelectedCategory] = useState("전체");
const [currentUser, setCurrentUser] = useState(null);
```

- 상태 훅 `useState`를 통해 로그인 여부, 사용자 정보, 게시글 목록, 카테고리 필터 등  
  다양한 전역 상태를 관리합니다.
- 자식 컴포넌트로 props를 전달하여 UI가 일관되게 동작하도록 연결됩니다.

---

✅ 4. 게시글 목록 불러오기

```jsx
useEffect(() => {
  fetch("http://localhost:8080/posts")
    .then((res) => res.json())
    .then((data) => setPosts(data));
}, []);
```

- 페이지가 처음 로드될 때 한 번만 게시글 목록을 백엔드 서버에서 불러옵니다.
- 받은 데이터를 `posts` 상태에 저장하고, 이는 HomePage에서 사용됩니다.

---

✅ 5. 로그인 정보 복원

```jsx
useEffect(() => {
  const saved = localStorage.getItem("user");
  if (saved) {
    const parsed = JSON.parse(saved);
    setIsLoggedIn(true);
    setCurrentUser(parsed);
    setUserId(parsed.id);
  }
}, []);
```

- 사용자가 이전에 로그인한 정보가 localStorage에 저장되어 있다면,
  해당 정보를 불러와 로그인 상태를 유지합니다.
- 이를 통해 새로고침 시에도 로그인이 유지됩니다.


========== Header ==========

📄 Header.jsx 

다음은 상단 메뉴바 역할을 하는 Header.jsx 파일입니다.
이 컴포넌트는 카테고리 필터, 로고, 사용자 로그인 상태에 따른 UI를
동시에 담당하는 핵심 UI 컴포넌트입니다.

✅ 1. 사용자 상태에 따른 우측 버튼 구성

{currentUser ? (
  <>
    <img src={{...}} />
    <span>{{currentUser.alias}}</span>
  </>
) : (
  <button onClick={{...}}>로그인</button>
)}

- 로그인 상태일 경우, 사용자 아바타와 별명을 표시하고
  클릭 시 마이페이지로 이동합니다.
- 로그인하지 않은 상태라면 로그인 버튼이 보여집니다.

✅ 2. 로고 중앙 정렬

<div className="flex justify-center">
  <LogoBlock />
</div>

- 중앙에는 LogoBlock 컴포넌트를 삽입해 일관된 디자인을 유지합니다.
- 해당 로고는 클릭 시 홈으로 이동하는 기능이 포함되어 있습니다.

✅ 3. 카테고리 필터 버튼

<button onClick={() => setSelectedCategory(cat)} className="...">
  <img src={`/icons/${categoryIcons[cat]}.png`} />
  {{cat}}
</button>

- 게시글을 카테고리별로 필터링할 수 있게 만들어주는 버튼입니다.
- 클릭 시 selectedCategory 상태가 변경되고,
  해당 카테고리만 필터링되어 화면에 표시됩니다.

========== HomePage ==========

📄 HomePage.jsx

HomePage.jsx는 메인 페이지로, 게시글 리스트와 댓글 미리보기, 공감 기능 등
사용자와의 다양한 상호작용을 구현한 주요 화면입니다.

✅ 1. 카테고리 필터링

```jsx
const filteredPosts = selectedCategory === "전체"
  ? posts
  : posts.filter((post) => post.category === selectedCategory);
```

- 사용자가 선택한 카테고리에 따라 게시글을 필터링합니다.
- 카테고리가 "전체"일 경우 모든 게시글을 보여주고, 아니면 해당 카테고리만 필터링합니다.

✅ 2. 댓글 미리보기 및 정렬

```jsx
[...post.comments]
  .sort((a, b) =>
    (b.likes || 0) !== (a.likes || 0)
      ? (b.likes || 0) - (a.likes || 0)
      : new Date(a.createdAt) - new Date(b.createdAt)
  )
  .slice(0, 2)
```

- 각 게시글에서 좋아요 수를 기준으로 상위 2개 댓글을 정렬해 미리 보여줍니다.

✅ 3. 공감 기능

```jsx
const handleTogglePostLike = async (postId) => { ... }
```

- 로그인된 사용자는 게시글에 공감(좋아요)을 누를 수 있으며, 누른 상태는 상태 변수로 관리됩니다.
- 서버에 PUT 요청을 보내 공감 여부를 업데이트합니다.

✅ 4. 댓글 등록

```jsx
<form onSubmit={(e) => { ... }}>
  <input name="comment" ... />
</form>
```

- 로그인된 사용자는 게시글 아래에서 댓글을 작성할 수 있습니다.
- 댓글 작성 시 POST 요청으로 서버에 저장되고, 성공 시 화면에 추가됩니다.

✅ 5. 댓글 반응 기능

```jsx
<button onClick={() => handleCommentReaction(post.id, c.id, "like")}>
```

- 각 댓글에 대해 좋아요 / 싫어요를 표시할 수 있으며,
  해당 반응은 상태 값으로 저장되고 즉시 반영됩니다.


========== LoginPage==========

📄 LoginPage.jsx

✅ 1. 로그인 요청 처리

```jsx
const res = await fetch("http://localhost:8080/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username, password }),
});
```

- 사용자 입력 정보를 서버에 POST 방식으로 전송하여 로그인 요청을 처리합니다.

✅ 2. 로그인 상태 저장

```jsx
setIsLoggedIn(true);
setUserId(user.id);
setCurrentUser(user);
localStorage.setItem("user", JSON.stringify(user));
```

- 로그인 성공 시 전역 상태와 로컬스토리지에 사용자 정보를 저장합니다.
- 이후 홈으로 이동되며, 새로고침 후에도 로그인 상태가 유지됩니다.

✅ 3. 아이디 저장 기능

```jsx
if (saveId) {
  localStorage.setItem("savedUsername", username);
}
```

- 체크박스를 통해 아이디를 저장할 수 있으며,
  저장된 값은 로그인 페이지 접속 시 자동으로 입력됩니다.

✅ 4. UI 구성

```jsx
<form onSubmit={handleLogin}>
  <input type="text" ... />
  <input type="password" ... />
</form>
```

- 아이디, 비밀번호 입력창과 체크박스, 로그인 버튼이 포함된 폼을 제공합니다.
- 입력값에 따라 로그인 처리 결과 메시지가 다르게 표시됩니다.

========== LogoBlock ==========

📄 LogoBlock.jsx 

✅ 1. 클릭 시 홈으로 이동

<div onClick={() => navigate("/")} className="cursor-pointer">

- 사용자가 로고를 클릭하면 / 경로로 이동합니다.
- 즉, 홈 화면으로 이동하는 기능을 포함한 로고 블록입니다.

✅ 2. 로고와 슬로건 표시

<h1>🍸 Nightcap</h1>
<p>어두운 밤, 익명의 고민과 기발한 조언이 오가는 바</p>

- 타이틀과 함께 간단한 슬로건을 나타냅니다.
- 폰트 크기와 색상을 통해 시각적으로 강조되어 있습니다.

========== MyPage ==========

📄 MyPage.jsx
MyPage.jsx는 사용자가 작성한 글, 댓글 단 글, 좋아요 누른 글을 한눈에 볼 수 있는 개인화 페이지입니다.

✅ 1. 사용자 인증 체크 및 초기화

```jsx
useEffect(() => {
  if (!currentUser) navigate("/login");
}, []);
```

- 로그인되지 않은 사용자는 로그인 페이지로 리디렉션됩니다.
- 로그인된 경우에만 데이터가 표시됩니다.

✅ 2. 사용자 데이터 fetch

```jsx
useEffect(() => {
  fetch(`/users/${currentUser.id}/posts`) ...
  fetch(`/users/${currentUser.id}/commented-posts`) ...
  fetch(`/users/${currentUser.id}/liked-posts`) ...
```

- 각각 작성글, 댓글 단 글, 좋아요한 글을 백엔드로부터 fetch합니다.
- useState를 사용해 각 항목을 배열로 저장합니다.

✅ 3. 탭 전환 UI

```jsx
{["작성글", "댓글단 글", "좋아요"].map(tab => (
  <button onClick={() => setSelectedTab(tab)}>{tab}</button>
))}
```

- 버튼 클릭 시 `selectedTab` 상태가 바뀌고 각 항목이 조건부 렌더링 됩니다.

✅ 4. 포스트 렌더링

```jsx
{selectedTab === "작성글" && myPosts.map(...)}
```

- 선택된 탭에 맞는 포스트 목록을 렌더링합니다.
- PostCard 형식으로 깔끔하게 표현합니다.

========== NewPostPage ==========

📄 NewPostPage.jsx

NewPostPage.jsx는 사용자가 새로운 게시글을 작성할 수 있는 입력 페이지입니다.

✅ 1. 로그인 여부 확인

```jsx
useEffect(() => {
  if (!currentUser) navigate("/login");
}, []);
```

- 비로그인 사용자는 글 작성 페이지 접근 시 로그인 페이지로 리디렉션됩니다.

✅ 2. 카테고리 및 내용 입력

```jsx
<select value={category} onChange={e => setCategory(e.target.value)} />
<textarea value={content} onChange={e => setContent(e.target.value)} />
```

- 드롭다운 메뉴를 통해 카테고리를 선택하고,
- 텍스트영역에 고민이나 내용을 작성합니다.

✅ 3. 제출 처리

```jsx
const handleSubmit = async (e) => {
  await fetch("/posts", {
    method: "POST",
    headers: { ... },
    body: JSON.stringify({ ... })
  });
};
```

- 사용자가 작성한 데이터는 JSON 형태로 서버에 POST 요청됩니다.
- 저장이 완료되면 홈화면으로 리디렉션됩니다.

========== PostDetailPage ==========

📄 PostDetailPage.jsx 발표 대본

PostDetailPage.jsx는 게시글의 상세 내용을 보여주는 페이지입니다.
특히, 댓글 조회 및 작성, 그리고 ChatGPT를 활용한 자동 댓글 생성 기능까지 포함된 복합 기능 페이지입니다.

✅ 1. 게시글 정보 조회 및 유효성 검증

```jsx
const { postId } = useParams();
const post = posts.find(p => p.id === Number(postId));
if (!post) return <Navigate to="/" />;
```

- URL에서 postId를 받아 해당 게시글을 posts 배열에서 찾아옵니다.
- post가 존재하지 않을 경우 홈으로 리디렉션합니다.
- 게시글이 있으면 제목, 내용, 작성자, 카테고리 등을 화면에 출력합니다.

✅ 2. 댓글 조회 및 상태 관리

```jsx
useEffect(() => {
  fetch(`/api/comments/${postId}`)
    .then(res => res.json())
    .then(data => setComments(data));
}, [postId]);
```

- useEffect 훅을 통해 게시글 로딩 시 댓글 데이터를 백엔드로부터 fetch합니다.
- 댓글은 useState를 이용해 상태 관리되며, 배열 형태로 저장됩니다.


✅ 3. 좋아요/싫어요 반응 기능

```jsx
<button onClick={() => handleReaction(comment.id, "like")}>👍</button>
```

- 각 댓글에는 👍 / 👎 버튼이 있으며, 누를 때마다 commentReactions 상태와 댓글의 like/dislike 수가 업데이트됩니다.
- 이미 누른 반응을 다시 누르면 반응이 취소되고, 다른 반응을 누르면 전환됩니다.

✅ 4. 댓글 작성 폼

```jsx
<form onSubmit={handleSubmit}>
  <textarea ... />
  <button type="submit">작성</button>
</form>
```

- 로그인된 사용자만 댓글을 작성할 수 있으며, 작성 후 백엔드에 POST 요청으로 저장됩니다.
- 저장이 성공하면 새 댓글을 댓글 리스트에 추가합니다.

========== SignupPage ==========

📄 SignupPage.jsx
SignupPage.jsx는 사용자 회원가입 기능을 제공하는 페이지입니다.

✅ 1. 폼 구성 및 상태 관리

```jsx
<input value={email} onChange={e => setEmail(e.target.value)} />
<input value={password} onChange={e => setPassword(e.target.value)} />
```

- 이메일과 비밀번호 입력값을 상태로 관리합니다.

✅ 2. 제출 처리

```jsx
const handleSubmit = async (e) => {
  await fetch("/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password })
  });
};
```

- 입력된 값을 JSON으로 백엔드에 전송합니다.
- 가입 성공 시 로그인 페이지로 이동됩니다.

#Spring

✅ Spring Web

웹 애플리케이션 개발을 위한 핵심 라이브러리 (@RestController, @RequestMapping, etc.)

내장 Tomcat 포함 (서버 실행용)

✅ Spring Data JPA

JPA 기반의 ORM 기능 제공

@Entity, @Repository, JpaRepository 등 사용 가능

✅ MySQL Driver

MySQL 데이터베이스와 연동하기 위한 JDBC 드라이버

✅ Thymeleaf

서버 사이드 HTML 템플릿 엔진

.html 파일에서 동적으로 데이터 출력 가능 (th:text, th:each 등)

✅ Lombok

보일러플레이트 코드 제거용 라이브러리 (@Getter, @Setter, @Builder 등)

📁 1. config

✔ 역할:
- 전역 설정을 담당하는 클래스들이 위치합니다.
- 예: CORS 설정, 정적 자원 경로 매핑, 보안 설정 등

💡 예시 클래스:
- CorsConfig.java
- WebConfig.java

---

📁 2. controller

✔ 역할:
- REST API 요청을 받아 처리하는 클래스들이 위치합니다.
- 클라이언트의 요청을 서비스로 전달하고, 응답을 반환하는 역할입니다.

💡 예시 클래스:
- PostController.java
- UserController.java

---

📁 3. domain

✔ 역할:
- 데이터베이스 테이블과 매핑되는 JPA 엔티티 클래스가 위치합니다.
- 비즈니스 모델과 구조를 정의합니다.

💡 예시 클래스:
- Post.java
- Comment.java
- User.java

---

📁 4. dto (또는 DTO)

✔ 역할:
- Entity와 분리되어 프론트엔드와 데이터를 주고받는 데 사용됩니다.
- 필요한 정보만 담고, 민감한 정보는 제외하여 보안성과 효율성을 높입니다.

💡 예시 클래스:
- PostDto.java
- UserDto.java

---

📁 5. repository

✔ 역할:
- 데이터베이스에 직접 접근하는 DAO 계층입니다.
- Spring Data JPA를 통해 구현 없이도 CRUD 기능을 제공합니다.

💡 예시 클래스:
- PostRepository.java
- UserRepository.java
========== PostDto ==========

📄 PostDto.java 
PostDto.java는 게시글 데이터를 주고받을 때 사용하는 데이터 전송 객체입니다.
Entity와 달리 필요한 정보만 클라이언트와 주고받기 위해 사용됩니다.

✅ 1. 필드 구성

```java
private Long id;
private String title;
private String content;
private String author;
private String category;
private LocalDateTime createdAt;
```

- 게시글의 식별자(id), 제목(title), 내용(content), 작성자(author), 카테고리(category),
  작성 시각(createdAt)으로 구성됩니다.
- 불필요한 정보(예: 댓글 목록, 좋아요 수 등)는 포함되지 않아 효율적인 전송이 가능합니다.

✅ 2. 생성자와 getter/setter

```java
public PostDto(...) { ... }

public String getTitle() { ... }
public void setTitle(String title) { ... }
```

- 모든 필드를 초기화할 수 있는 생성자가 존재하며,
  getter/setter 메서드로 데이터 접근과 수정을 관리합니다.

✅ 3. 사용 용도

- 클라이언트 → 서버: 게시글 작성 폼 데이터를 서버에 전송할 때 사용됩니다.
- 서버 → 클라이언트: 게시글 목록 또는 상세 데이터를 프론트에 보낼 때 사용됩니다.

보완 가능점:
- 유효성 검사 어노테이션(@NotBlank, @Size 등)을 추가해 데이터 정합성을 높일 수 있습니다.
- 필요에 따라 작성자 ID 대신 alias 등으로 확장 가능

========== UserDto ==========

📄 UserDto.java

✅ 1. 필드 구성

```java
private Long id;
private String username;
private String alias;
```

- id는 사용자 고유 식별자, username은 로그인 시 사용하는 식별자,
  alias는 화면에 보여질 별명입니다.
- password나 기타 민감한 정보는 포함되어 있지 않기 때문에 보안에 유리합니다.

✅ 2. 생성자와 getter/setter

```java
public UserDto(...) { ... }

public String getUsername() { ... }
public void setUsername(String username) { ... }
```

- 필요한 필드에 대해 getter/setter를 제공합니다.
- 생성자는 객체 생성 시 필드 초기화를 위해 사용됩니다.

✅ 3. 사용 용도

- 로그인 후 사용자 정보를 클라이언트에 응답할 때 사용됩니다.
- 마이페이지 등에서 사용자의 닉네임이나 기본 정보만 조회할 때 유용합니다.

보완 가능점:
- 이메일, 가입일 등 필요한 필드를 추가해 확장할 수 있습니다.
- Builder 패턴을 적용해 유연한 객체 생성을 유도할 수도 있습니다.

📄 Spring Boot 디렉토리 구조 발표 대본

Spring Boot 프로젝트에서는 역할에 따라 디렉토리를 구분하여 관리합니다.
이렇게 분리함으로써 유지보수, 확장성, 테스트 편의성을 모두 확보할 수 있습니다.

---

========== CorsConfig.txt ==========

📄 CorsConfig.java 

다음은 Spring Boot에서 CORS 정책을 설정하는 CorsConfig.java 파일입니다.
이 설정은 프론트엔드(React)와 백엔드(Spring)가 서로 다른 도메인에서 작동할 때
리소스 접근을 허용하기 위한 중요한 역할을 합니다.

✅ 1. @Configuration과 @Bean 설명
이 클래스에는 @Configuration 어노테이션이 선언되어 있습니다.
이는 해당 클래스가 설정 클래스임을 명시하는 것으로, 스프링에서 설정 정보를 로드할 때 사용됩니다.

```java
@Bean
public WebMvcConfigurer corsConfigurer() {
```

- @Bean은 Spring 컨테이너에 해당 메서드의 반환값을 Bean으로 등록한다는 의미입니다.
- WebMvcConfigurer는 스프링 MVC의 설정을 커스터마이징할 수 있게 해주는 인터페이스입니다.

✅ 2. CORS 매핑 설정

```java
@Override
public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**")
        .allowedOrigins("http://localhost:3000")
        .allowedMethods("*")
        .allowCredentials(true);
}
```

- addMapping("/**")는 모든 경로에 대해 CORS를 허용하겠다는 의미입니다.
- allowedOrigins는 프론트엔드 주소 (React 개발 서버인 http://localhost:3000)을 허용합니다.
- allowedMethods("*")는 모든 HTTP 메서드(GET, POST, PUT 등)를 허용합니다.
- allowCredentials(true)는 쿠키 등을 포함한 인증 정보를 허용합니다.

addMapping("/**")를 사용하는 것은 모든 URL 경로에 대해 CORS 요청을 허용하겠다는 뜻이며, 다음과 같은 보안상의 위험이 있습니다:

🔻 위험 요소
모든 도메인에서 접근 가능

기본적으로 allowedOrigins("*") 또는 특정 origin 설정 없이 전체 경로를 허용하면 누구나 이 서버에 CORS 요청을 보낼 수 있게 됩니다.

CSRF(사이트 간 요청 위조) 공격 위험

인증 기반 요청이 활성화된 경우(예: 쿠키, 세션) 외부 도메인에서의 요청을 허용하면 의도치 않은 요청이 처리될 수 있습니다.

민감한 데이터 노출

API 응답에 개인 정보, 토큰, 인증 관련 정보 등이 있다면 악의적인 사이트에서 이를 활용할 수 있습니다.

의도하지 않은 API 호출

공개하지 않은 내부용 API까지 외부에서 호출 가능하게 되는 문제가 생길 수 있습니다.


========== WebConfig ==========

📄 WebConfig.java

이번에는 정적 자원 설정을 담당하는 WebConfig.java 파일입니다.
이 설정은 React에서 빌드된 정적 파일을 Spring Boot가 서비스할 수 있도록 도와줍니다.

✅ 1. @Configuration 어노테이션

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {
```

- 이 클래스는 스프링 설정 클래스임을 명시하며, WebMvcConfigurer를 구현하여 Spring MVC 설정을 커스터마이징합니다.

✅ 2. 정적 리소스 핸들러 설정

```java
@Override
public void addResourceHandlers(ResourceHandlerRegistry registry) {
    registry.addResourceHandler("/**")
            .addResourceLocations("classpath:/static/");
}
```

- `addResourceHandler("/**")`는 모든 경로에 대해 정적 자원을 처리하겠다는 의미입니다.
- `addResourceLocations("classpath:/static/")`는 실제 리소스가 위치한 경로입니다. 보통 React 프로젝트를 빌드하면 `/static` 경로에 정적 파일들이 위치하게 됩니다.

========== AuthController ==========

📄 AuthController.java
이번에는 사용자 인증과 관련된 기능을 처리하는 AuthController.java 파일입니다.
이 컨트롤러는 회원가입, 로그인, 사용자 인증 상태 확인 등의 기능을 담당합니다.
Spring Security와 연동되며 실제 사용자 인증 흐름에서 핵심 역할을 합니다.

✅ 1. 회원가입 처리

```java
@PostMapping("/signup")
public ResponseEntity<?> registerUser(@RequestBody SignupRequest signupRequest) {
    ...
}
```

- 사용자가 입력한 회원가입 정보를 `@RequestBody`로 받아옵니다.
- 해당 정보는 `SignupRequest` DTO 객체로 매핑됩니다.
- 내부적으로 사용자 이름 중복 확인, 비밀번호 암호화, DB 저장 등의 로직이 포함되어 있을 수 있습니다.
- 성공 시 200 OK 또는 201 CREATED 상태로 응답합니다.

✅ 2. 로그인 처리

```java
@PostMapping("/login")
public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
    ...
}
```

- 클라이언트에서 전송된 로그인 정보를 `LoginRequest` 객체로 받습니다.
- 일반적으로 사용자 정보를 DB에서 조회하고 비밀번호 일치 여부를 확인합니다.
- 로그인 성공 시 JWT 토큰 혹은 세션 정보를 반환합니다.
- 실패 시 적절한 에러 메시지를 포함한 401 Unauthorized 응답을 보낼 수 있습니다.

✅ 3. 인증 상태 확인

```java
@GetMapping("/check")
public ResponseEntity<?> checkUserStatus(@AuthenticationPrincipal CustomUserDetails userDetails) {
    ...
}
```

- 현재 로그인된 사용자의 정보를 확인하기 위한 엔드포인트입니다.
- Spring Security의 `@AuthenticationPrincipal`을 사용하여 인증된 사용자 정보를 가져옵니다.
- 클라이언트는 이를 이용해 로그인 상태 유지나 사용자 정보를 프론트엔드에 표시할 수 있습니다.

✅ 4. 보안 관련 유의사항
- 이 컨트롤러는 민감한 정보를 다루므로 HTTPS 통신과 적절한 CORS 설정이 필수입니다.
- 비밀번호는 반드시 BCrypt 같은 해시 함수를 이용해 암호화 저장해야 하며,
  사용자 인증 시에도 같은 방식으로 검증되어야 합니다.

📌 마무리 멘트
정리하자면, AuthController는 회원가입, 로그인, 인증 확인 기능을 제공하며,
사용자 보안과 관련된 핵심 API를 구성하는 컨트롤러입니다.
Spring Security나 JWT와 같은 보안 모듈과 연계하여 애플리케이션의 인증 흐름을 책임집니다.


========== CommentController ==========

📄 CommentController.java 
CommentController.java는 게시글에 달린 댓글을 처리하는 REST API 컨트롤러입니다.
주요 기능은 댓글 작성, 댓글 조회이며 사용자와 게시글 간의 관계를 관리하는 데 중점을 둡니다.

✅ 1. 댓글 작성 기능

```java
@PostMapping
public Comment createComment(@RequestBody Comment comment) {
    return commentRepository.save(comment);
}
```

- 클라이언트로부터 전달된 댓글 객체를 받아 데이터베이스에 저장합니다.
- `@RequestBody`를 통해 JSON 형식으로 받은 데이터를 자동으로 Comment 객체로 매핑합니다.
- `commentRepository.save(comment)`를 통해 새로운 댓글을 DB에 삽입합니다.

✅ 2. 특정 게시글의 댓글 목록 조회

```java
@GetMapping("/post/{postId}")
public List<Comment> getCommentsByPostId(@PathVariable Long postId) {
    return commentRepository.findByPostId(postId);
}
```

- URL 경로에서 postId를 받아 해당 게시글에 달린 댓글을 전부 조회합니다.
- `@PathVariable`을 사용해 동적으로 postId 값을 추출합니다.
- Repository에서 정의된 `findByPostId` 메서드를 통해 관련 댓글 리스트를 반환합니다.

✅ 3. 사용자별 작성 댓글 조회

```java
@GetMapping("/user/{userId}")
public List<Comment> getCommentsByUserId(@PathVariable Long userId) {
    return commentRepository.findByUserId(userId);
}
```

- 특정 사용자(userId)가 작성한 모든 댓글을 반환합니다.
- 사용자별 활동 내역 확인에 필요한 기능입니다.
- 주로 마이페이지 등에서 사용됩니다.

========== PostController.txt ==========

📄 PostController.java 
  
PostController.java는 게시글을 생성, 조회, 삭제하는 핵심적인 REST 컨트롤러입니다. 게시판 기능의 중심이라고 할 수 있으며, 클라이언트에서 요청한 게시글 관련 작업을 백엔드에서 처리하는 역할을 합니다.

---

✅ 1. 게시글 전체 조회  
```java
@GetMapping("/posts")
public List<Post> getAllPosts() {
    return postRepository.findAll();
}
```

- 모든 게시글을 반환하는 API입니다.
- 프론트엔드의 홈 화면에서 게시글 목록을 불러올 때 사용됩니다.
- 보완 가능점: 페이징 처리 추가 (`Pageable` 활용) → 게시글이 많아질 경우 성능 개선 필요.

---

✅ 2. 게시글 단건 조회  
```java
@GetMapping("/posts/{id}")
public ResponseEntity<Post> getPostById(@PathVariable Long id) {
    return postRepository.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
}
```

- 특정 ID에 해당하는 게시글을 조회합니다.
- 존재하지 않는 ID 요청 시 404 에러 응답을 반환합니다.
- 보완 가능점: 조회수 증가 기능이 별도로 없으므로, 조회할 때 조회수를 증가시키는 로직 추가 필요.

---

✅ 3. 게시글 생성  
```java
@PostMapping("/posts")
public Post createPost(@RequestBody Post post) {
    return postRepository.save(post);
}
```

- 새 게시글을 생성하는 API입니다.
- 요청 본문에 게시글 제목, 내용, 작성자 등의 정보가 포함되어야 합니다.
- 보완 가능점: 현재는 인증 여부를 체크하지 않으므로, 로그인된 사용자만 작성 가능하도록 인증 로직 추가 필요.

---

✅ 4. 게시글 삭제  
```java
@DeleteMapping("/posts/{id}")
public ResponseEntity<Void> deletePost(@PathVariable Long id) {
    if (!postRepository.existsById(id)) {
        return ResponseEntity.notFound().build();
    }
    postRepository.deleteById(id);
    return ResponseEntity.noContent().build();
}
```

- 게시글을 ID로 찾아 삭제하는 API입니다.
- 존재하지 않는 게시글에 대한 삭제 요청은 404로 처리합니다.
- 보완 가능점: 작성자 본인만 삭제할 수 있도록 권한 체크 필요.

---

✅ 5. 카테고리별 게시글 조회  
```java
@GetMapping("/posts/category/{category}")
public List<Post> getPostsByCategory(@PathVariable String category) {
    return postRepository.findByCategory(category);
}
```

- 특정 카테고리에 해당하는 게시글만 필터링하여 반환합니다.
- 예: “연애”, “진로”, “인간관계” 등 카테고리별 분류 기능
- 보완 가능점: 카테고리를 ENUM으로 관리하면 오타나 잘못된 요청을 줄일 수 있습니다.

---


========== UserController ==========

📄 UserController.java 
UserController.java는 사용자의 활동 내역을 조회하는 REST API를 제공하는 컨트롤러입니다.
내가 작성한 게시글, 댓글, 그리고 공감(좋아요)을 한 게시글들을 각각 조회할 수 있는 3가지 주요 기능을 포함하고 있습니다.

✅ 1. 내가 쓴 글 조회
```java
@GetMapping("/{userId}/posts")
public List<Post> getMyPosts(@PathVariable Long userId) {
    return postRepository.findByUserId(userId);
}
```
- 사용자의 ID를 PathVariable로 전달받아 해당 사용자가 작성한 게시글을 모두 조회합니다.
- `postRepository.findByUserId()`를 통해 데이터베이스에서 필터링된 게시글 목록을 가져옵니다.

✅ 2. 내가 댓글 단 글 조회
```java
@GetMapping("/{userId}/commented-posts")
public List<Post> getCommentedPosts(@PathVariable Long userId) {
    List<Comment> comments = commentRepository.findByUserId(userId);
    Set<Long> postIds = comments.stream()
        .map(Comment::getPostId)
        .collect(Collectors.toSet());
    return postRepository.findAllById(postIds);
}
```
- 먼저 해당 사용자가 작성한 모든 댓글을 가져옵니다.
- 각 댓글에서 postId만 추출하고, 중복을 제거하기 위해 Set으로 만듭니다.
- 그 postId 리스트를 기반으로 관련된 게시글들을 한 번에 조회합니다.

✅ 3. 내가 공감한 글 조회
```java
@GetMapping("/{userId}/liked-posts")
public List<Post> getLikedPosts(@PathVariable Long userId) {
    List<Like> likes = likeRepository.findByUserId(userId);
    Set<Long> postIds = likes.stream()
        .map(Like::getPostId)
        .collect(Collectors.toSet());
    return postRepository.findAllById(postIds);
}
```
- 사용자가 '좋아요'한 정보를 Like 엔티티에서 먼저 조회합니다.
- 좋아요한 postId들을 추출해서 Set으로 만들고, 해당하는 게시글들을 전부 가져옵니다.
- 공감 내역에 기반한 게시글 추천 혹은 히스토리 보기 등의 기능으로 확장 가능성이 있습니다.

✅ 어노테이션 및 설계 요소
- `@RestController`: JSON 형식의 데이터를 반환하는 REST API용 컨트롤러로 지정합니다.
- `@RequestMapping("/users")`: 기본 URL을 `/users`로 설정해 사용자 기반 경로로 통일합니다.
- `@CrossOrigin(...)`: CORS 정책 설정을 통해 React 프론트엔드와 연동이 가능하도록 허용합니다.
- 생성자 주입을 사용하여 `PostRepository`, `CommentRepository`, `LikeRepository`를 주입합니다.
  - 이를 통해 테스트 용이성과 명확한 의존성 주입이 가능합니다.

========== build_gradle ==========

📄 build.gradle

이번에는 스프링부트 프로젝트의 핵심 설정 파일 중 하나인 build.gradle 파일입니다.
이 파일은 프로젝트에 필요한 라이브러리와 빌드 방식을 정의하며, Gradle을 사용하는 프로젝트에서 중심 역할을 합니다.

✅ 1. 플러그인 설정
파일 상단에는 `plugins` 블록이 존재합니다. 여기서는 Spring Boot와 관련된 플러그인들을 선언합니다.
예를 들어, 아래와 같은 코드가 있을 수 있습니다:

```groovy
plugins {
    id 'org.springframework.boot' version '3.x.x'
    id 'io.spring.dependency-management' version '1.x.x'
    id 'java'
}
```

- Spring Boot 플러그인은 부트 애플리케이션을 쉽게 실행하고 관리할 수 있도록 도와줍니다.
- dependency-management는 의존성 관리를 쉽게 할 수 있도록 도와주는 플러그인입니다.
- java 플러그인은 기본적인 자바 프로젝트를 위한 빌드 환경을 제공합니다.

✅ 2. Java 버전 설정
`java` 블록에서는 사용할 Java 버전을 명시합니다. 예를 들어:

```groovy
java {
    sourceCompatibility = '17'
}
```

이 설정을 통해 자바 17을 기준으로 컴파일되고 실행되도록 합니다.

✅ 3. 의존성 관리
가장 핵심적인 부분은 `dependencies` 블록입니다. 여기에 필요한 라이브러리를 추가합니다.

```groovy
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    runtimeOnly 'com.mysql:mysql-connector-j'
}
```

- `spring-boot-starter-web`: 웹 애플리케이션을 만들기 위한 라이브러리
- `spring-boot-starter-data-jpa`: 데이터베이스와의 연동(JPA) 관련 라이브러리
- `mysql-connector-j`: MySQL DB를 연동하기 위한 JDBC 드라이버

✅ 4. 빌드 설정
마지막으로 `tasks` 설정이나 빌드 옵션 등이 포함되어 있을 수 있습니다.


========== Comment==========

📄 Comment.java 설명

Comment.java는 사용자들이 작성한 댓글 정보를 저장하는 JPA 엔티티입니다.
이 엔티티는 각 댓글의 내용, 작성자, 작성 대상 게시물, 작성 시각 등을 포함하고 있습니다.

✅ 1. 기본 필드 정의
- `@Id`, `@GeneratedValue`: 댓글의 고유 식별자인 id는 자동으로 생성됩니다.
- `content`: 댓글의 본문입니다.
- `createdAt`: 댓글이 생성된 시간으로, LocalDateTime 타입입니다.

✅ 2. 연관 관계
- `@ManyToOne`으로 Post 및 User와 다대일 관계를 맺습니다.
- 하나의 게시글에는 여러 댓글이 달릴 수 있고, 한 유저는 여러 댓글을 작성할 수 있습니다.
- `@JoinColumn(name = "post_id")` 및 `user_id`를 통해 외래 키를 지정합니다.

Comment 엔티티는 게시글과 유저와의 관계를 통해 댓글 기능을 제공하며,
작성 시간, 본문, 작성자 등 주요 정보를 포함합니다.


========== Like.txt ==========

📄 Like.java 

Like.java는 댓글에 대한 좋아요/싫어요 반응을 저장하는 엔티티입니다.
각 유저가 특정 댓글에 좋아요 또는 싫어요를 남긴 정보를 기록합니다.

✅ 1. 기본 필드
- `@Id`, `@GeneratedValue`: 고유 식별자 id
- `reaction`: 문자열 필드로 "like" 또는 "dislike" 값을 가집니다.

✅ 2. 연관 관계
- `@ManyToOne`: User와 Comment에 대한 다대일 관계입니다.
- 즉, 하나의 유저가 여러 개의 댓글에 반응할 수 있으며,
  하나의 댓글에도 여러 유저가 반응할 수 있습니다.

========== Post.txt ==========

📄 Post.java 설명

Post.java는 게시글 정보를 저장하는 JPA 엔티티입니다.
제목, 본문, 작성자, 카테고리, 작성 시각 등의 정보를 담고 있으며 댓글과의 연관관계도 포함됩니다.

✅ 1. 기본 필드
- `id`, `title`, `content`, `category`, `createdAt` 등의 기본 필드가 있습니다.
- `@Id`, `@GeneratedValue`는 기본키 자동 생성
- `@Column(nullable = false)`로 필수 값 지정

✅ 2. 연관 관계
- `@ManyToOne`: 게시글은 하나의 유저가 작성하므로 유저와 다대일 관계입니다.
- `@OneToMany(mappedBy = "post")`: 게시글은 여러 댓글을 가질 수 있으므로 댓글과 일대다 관계입니다

========== User.txt ==========

📄 User.java 설명


User.java는 애플리케이션에서 사용자 정보를 관리하는 JPA 엔티티입니다.
로그인, 글 작성, 댓글 작성 등 거의 모든 기능에 기본적으로 연결되는 핵심 객체입니다.

✅ 1. 기본 필드
- `id`, `email`, `password`, `alias`, `avatar` 등이 포함됩니다.
- `@Id`, `@GeneratedValue`: 자동 생성되는 기본키
- `@Column(unique = true)`: 이메일은 중복되지 않도록 설정됩니다.

✅ 2. 연관 관계
- `@OneToMany`: 유저는 여러 개의 글(Post), 댓글(Comment), 반응(Like)을 작성할 수 있습니다.
- `mappedBy`를 통해 양방향 매핑 구조를 형성


========== Post_explained.txt ==========

📄 Post.java 발표 대본

Post.java는 게시판 기능에서 핵심이 되는 엔티티 클래스입니다.
각 게시글의 제목, 내용, 작성자, 카테고리, 작성일 등의 정보를 데이터베이스에 저장하고 관리합니다.
JPA(Entity) 기반으로 동작하며, 데이터베이스의 posts 테이블과 매핑됩니다.

✅ 1. 주요 필드 구성

- `@Id`, `@GeneratedValue` → 게시글의 고유 ID를 자동 생성합니다.
- `title` → 게시글의 제목입니다.
- `content` → 게시글의 본문 내용입니다.
- `author` → 작성자의 이름 혹은 닉네임입니다.
- `category` → 게시글이 속한 주제 카테고리입니다.
- `createdAt` → 게시글이 작성된 시간입니다.

✅ 2. JPA 매핑 어노테이션

- `@Entity` → 이 클래스가 JPA 엔티티임을 나타냅니다.
- `@Table(name = "posts")` → posts라는 테이블과 매핑됩니다.
- `@Column` → 각 필드가 DB 컬럼으로 매핑됩니다.

✅ 3. 관계 설정 (예상)

- 향후 `@OneToMany(mappedBy = "post")`를 통해 댓글(Comment)이나 좋아요(Like) 엔티티와 연관될 수 있습니다.
- 이를 통해 한 게시글에 여러 댓글/좋아요를 연결할 수 있습니다.

✅ 4. 생성자 및 Getter/Setter

- JPA에서는 기본 생성자가 필수입니다.
- Lombok이나 수동으로 Getter/Setter 메서드를 정의할 수 있습니다.

========== CommentRepository.txt ==========

📄 CommentRepository.java 발표 대본

CommentRepository.java는 댓글(Comment) 엔티티와 관련된 데이터 접근 로직을 정의한 인터페이스입니다.
Spring Data JPA의 JpaRepository를 상속받아 별도의 구현 없이도 기본적인 CRUD 기능을 제공합니다.

✅ 기능 설명
```java
public interface CommentRepository extends JpaRepository<Comment, Long> {
}
```

- `JpaRepository<Comment, Long>`을 상속받아 Comment 엔티티에 대한 모든 기본 메서드를 사용할 수 있습니다.
- 예: findAll(), findById(), save(), deleteById() 등

✅ 보완 가능점
- 사용자 ID나 게시글 ID를 기준으로 댓글을 조회할 수 있는 메서드를 직접 정의할 수 있습니다.
  예: `List<Comment> findByPostId(Long postId);`, `List<Comment> findByUserId(Long userId);`

========== LikeRepository.txt ==========

📄 LikeRepository.java

LikeRepository.java는 좋아요(Like) 관련 데이터 접근 기능을 제공하는 인터페이스입니다.
Spring Data JPA를 기반으로 Like 엔티티를 DB에서 효율적으로 다룰 수 있도록 합니다.

✅ 기능 설명
```java
public interface LikeRepository extends JpaRepository<Like, Long> {
}
```

- Like 엔티티에 대해 기본적인 CRUD 기능을 제공합니다.
- 별도의 구현 없이도 findAll, findById, save, delete 등 기본 메서드 사용 가능

✅ 보완 가능점
- 사용자 ID와 댓글 ID를 동시에 기준으로 조회하는 커스텀 메서드를 정의할 수 있습니다.
  예: `Optional<Like> findByUserIdAndCommentId(Long userId, Long commentId);`

========== PostRepository.txt ==========

📄 PostRepository.java 

📌 시작 멘트
PostRepository.java는 게시글(Post) 엔티티의 데이터베이스 접근을 담당하는 인터페이스입니다.
게시글 조회, 저장, 삭제 등의 기능을 JpaRepository를 통해 제공합니다.

✅ 기능 설명
```java
public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByCategory(String category);
}
```

- `findByCategory(String category)`:
  특정 카테고리의 게시글만 필터링해서 조회하는 사용자 정의 쿼리 메서드입니다.

✅ 보완 가능점
- 제목 또는 내용 기반 검색 메서드 추가 가능:
  예: `List<Post> findByTitleContaining(String keyword);`
- 최신순 정렬이나 페이징 기능 추가 필요

========== UserRepository.txt ==========

📄 UserRepository.java

UserRepository.java는 사용자(User) 엔티티와 관련된 DB 연산을 담당하는 인터페이스입니다.
Spring Data JPA를 통해 사용자 조회 및 관리 기능을 제공합니다.

✅ 기능 설명
```java
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
```

- `findByUsername(String username)`:
  로그인 시 사용자명을 기준으로 사용자 엔티티를 조회하는 데 사용됩니다.

✅ 보완 가능점
- 이메일, 닉네임 등 다양한 기준으로 사용자 검색 메서드 추가 가능
- 중복 검사 로직이나 존재 여부 확인 메서드 추가
