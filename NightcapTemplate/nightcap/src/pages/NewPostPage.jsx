import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";


export default function NewPostPage({ currentUser, setPosts }) {
  const navigate = useNavigate();
  const location = useLocation();
  const editingPost = location.state?.post || null;

  const categories = ["연애", "가정", "학업", "직장", "교우", "건강", "메뉴", "당근", "TMI"];
  const [category, setCategory] = useState(editingPost?.category || "연애");
  const [content, setContent] = useState(editingPost?.content || "");

  useEffect(() => {
    if (!currentUser?.id) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  }, [currentUser, navigate]);

  const getAliasIcon = (alias = "") => {
    const base = alias.match(/^[^\d]+/)?.[0] || "";
    const icons = {
      밤손님: "/icons/night.png",
      마스터: "/icons/wizard.png",
      요정: "/icons/fairy.png",
      바텐더: "/icons/bartender.png",
      해결사: "/icons/detective.png",
    };
    return icons[base] || "/icons/default.png";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content.trim()) {
      alert("고민 내용을 입력해주세요.");
      return;
    }

    const postData = {
      category,
      content,
      title: content.slice(0, 15),
      authorAlias: currentUser?.alias || "익명",
      userId: currentUser?.id || null,
      profileIcon: getAliasIcon(currentUser?.alias),
    };

    try {
      if (editingPost) {
        const res = await fetch(`http://localhost:8080/posts/${editingPost.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content,
            title: content.slice(0, 15),
            category,
          }),
        });

        if (!res.ok) throw new Error("수정 실패");
        alert("수정이 완료되었습니다.");
      } else {
        const res = await fetch("http://localhost:8080/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(postData),
        });

        if (!res.ok) throw new Error("등록 실패");
        const newPost = await res.json();

        // ✅ 등록된 글 HomePage에서 바로 보이게 반영
        setPosts((prev) => [...prev, newPost]);

        alert("등록이 완료되었습니다.");
      }

      navigate("/home");
    } catch (err) {
      console.error("오류:", err);
      alert("서버 오류가 발생했습니다.");
    }
  };

  return (
    <div className="bg-[#0b0c2a] min-h-screen text-white px-6 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          {editingPost ? "게시글 수정" : "새 고민 작성"}
        </h2>
        <button
          type="button"
          onClick={() => navigate("/home")}
          className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-md font-bold"
        >
          뒤로가기
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        <div>
          <label className="block mb-1">카테고리 선택</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 rounded bg-[#1a1b3a] text-white"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={5}
          placeholder="고민 내용을 입력하세요..."
          className="w-full bg-[#1a1b3a] p-3 rounded-md text-white placeholder-gray-400"
        />

        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-md font-bold"
        >
          {editingPost ? "수정하기" : "등록하기"}
        </button>
      </form>
    </div>
  );
}
