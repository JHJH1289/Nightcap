import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function HomePage({ posts, setPosts, isLoggedIn, currentUser, selectedCategory }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [chatLog, setChatLog] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [likedPosts, setLikedPosts] = useState({});

  const categoryIcons = {
    연애: "love",
    가정: "family",
    학업: "study",
    직장: "work",
    교우: "friends",
    건강: "health",
    메뉴: "menu",
    당근: "carrot",
    TMI: "tmi",
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("http://localhost:8080/posts");
        if (!res.ok) return;
        const data = await res.json();
        setPosts(Array.isArray(data) ? data : []);
      } catch {}
    };

    fetchPosts();
  }, [location.pathname]);

  const handleGPTSend = async () => {
    if (!input.trim() || loading) return;
    setLoading(true);

    const userMessage = { role: "user", content: input };
    const newChatLog = [...chatLog, userMessage];

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: newChatLog,
        }),
      });

      const data = await res.json();
      const botMessage = data.choices?.[0]?.message;
      setChatLog([...newChatLog, botMessage]);
    } catch {}

    setInput("");
    setLoading(false);
  };

  const handleTogglePostLike = async (postId) => {
    if (!isLoggedIn || !currentUser?.id) return;

    try {
      const res = await fetch(
        `http://localhost:8080/posts/${postId}/like?userId=${currentUser.id}`,
        {
          method: "PUT",
          credentials: "include",
        }
      );
      const result = await res.text();

      setPosts((prev) =>
        prev.map((p) =>
          p.id === postId
            ? {
                ...p,
                likes: result === "liked" ? (p.likes || 0) + 1 : Math.max((p.likes || 1) - 1, 0),
              }
            : p
        )
      );

      setLikedPosts((prev) => ({
        ...prev,
        [postId]: result === "liked",
      }));
    } catch {}
  };

  const filteredPosts = Array.isArray(posts)
    ? selectedCategory === "전체"
      ? posts
      : posts.filter((post) => post.category === selectedCategory)
    : [];

  return (
    <div className="bg-[#0b0c2a] min-h-screen text-white">
      <button
        onClick={() => {
          if (!isLoggedIn) {
            window.location.href = "/login";
            return;
          }
          navigate("/new");
        }}
        className="fixed bottom-6 right-6 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition"
      >
        ✍️ 고민 쓰기
      </button>

      <div className="bg-[#1a1b3a] p-4 rounded-md mb-6">
        <h3 className="text-lg font-bold mb-3">GPT에게 상담 받아보기</h3>
        <div className="h-64 overflow-y-auto bg-[#0b0c2a] p-3 rounded mb-3 space-y-2">
          {chatLog.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.role === "user"
                    ? "bg-pink-500 text-white rounded-br-none"
                    : "bg-gray-700 text-white rounded-bl-none"
                  }`}
              >
                <strong className="block mb-1">{msg.role === "user" ? "나" : "GPT"}</strong>
                <p className="whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow p-2 rounded bg-[#2c2d4f] text-white"
            placeholder="GPT에게 고민을 물어보세요..."
          />
          <button
            onClick={handleGPTSend}
            className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded font-bold"
          >
            전송
          </button>
        </div>
      </div>

      <div className="px-6 pt-6 space-y-6">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-10 text-gray-400">
            아직 게시물이 없습니다. 첫 게시물을 작성해보세요!
          </div>
        ) : (
          filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-[#1a1b3a] p-4 rounded-xl shadow-md cursor-pointer"
              onClick={() => navigate(`/posts/${post.id}`)}
            >
              <div className="flex justify-between items-center text-sm text-gray-400">
                <div className="flex items-center gap-1 bg-blue-300 px-2 py-1 rounded-full text-sm text-black font-medium">
                  <img
                    src={`/icons/${categoryIcons[post.category] ?? "default"}.png`}
                    className="w-4 h-4"
                    alt="category"
                  />
                  <span>{post.category}</span>
                </div>
                <div className="flex items-center gap-1">
                  <img
                    src={post.profileIcon || "/icons/default.png"}
                    className="w-5 h-5"
                    alt="icon"
                  />
                  <span>{post.author || post.authorAlias || "익명"}</span>
                </div>
              </div>
              <div className="text-base my-2">{post.content}</div>
              <div className="flex gap-4 text-sm items-center">
                <button
                  className={
                    likedPosts[post.id]
                      ? "text-pink-400"
                      : "text-blue-300 hover:text-blue-400"
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTogglePostLike(post.id);
                  }}
                >
                  💖 {post.likes ?? 0}
                </button>
                <span>
                  💬 {Array.isArray(post.comments) ? post.comments.length : 0}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}