import { useState, useRef, useEffect } from "react";
import LogoBlock from "../components/LogoBlock";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("밤손님");
  const usernameRef = useRef(null);

  const themes = ["밤손님", "마스터", "요정", "해결사", "바텐더"];

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (password !== confirmPassword) {
      setErrorMsg("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, selectedTheme }),
      });

      const msg = await res.text();

      if (res.ok) {
        setSuccessMsg("회원가입이 완료되었습니다!");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
      } else {
        setErrorMsg(`회원가입 실패: ${msg}`);
      }
    } catch {
      setErrorMsg("서버와 통신 중 문제가 발생했습니다.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c2a] text-white flex flex-col items-center justify-center px-4">
      <LogoBlock />
      <div className="bg-[#1a1b3a] p-6 rounded-xl w-full max-w-sm space-y-4 shadow-lg">
        <h2 className="text-xl font-semibold text-center">회원가입</h2>
        <form className="space-y-4" onSubmit={handleSignup}>
          <div>
            <label className="block mb-1 text-sm font-medium">아이디</label>
            <input
              ref={usernameRef}
              type="text"
              placeholder="영문 또는 숫자만 입력"
              className="w-full p-2 rounded bg-white text-black"
              required
              value={username}
              onChange={(e) => {
                const onlyEnglish = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
                setUsername(onlyEnglish);
              }}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호 (한글 입력 불가)"
              className="w-full p-2 rounded bg-white text-black"
              required
              value={password}
              onChange={(e) => {
                const noKorean = e.target.value.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, "");
                setPassword(noKorean);
              }}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">비밀번호 확인</label>
            <input
              type="password"
              placeholder="비밀번호 확인"
              className="w-full p-2 rounded bg-white text-black"
              required
              value={confirmPassword}
              onChange={(e) => {
                const noKorean = e.target.value.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, "");
                setConfirmPassword(noKorean);
              }}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">테마 아이디 선택</label>
            <select
              className="w-full p-2 rounded bg-white text-black"
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
            >
              {themes.map((theme, i) => (
                <option key={i} value={theme}>
                  {theme}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 rounded"
          >
            회원가입
          </button>
        </form>

        {errorMsg && <p className="text-red-400 text-center">{errorMsg}</p>}
        {successMsg && <p className="text-green-400 text-center">{successMsg}</p>}

        <button
          className="mt-4 w-full text-sm text-blue-300 hover:underline"
          onClick={() => (window.location.href = "/login")}
        >
          로그인 페이지로 돌아가기
        </button>
      </div>
    </div>
  );
}
