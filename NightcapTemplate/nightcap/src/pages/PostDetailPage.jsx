import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function PostDetailPage({ posts, isLoggedIn, currentUser }) {
  const { postId } = useParams();
  const navigate = useNavigate();
  const postIdNum = parseInt(postId, 10);
  const post = posts.find((p) => p.id === postIdNum);
  const [comments, setComments] = useState([]);
  const [commentReactions, setCommentReactions] = useState({});

  useEffect(() => {
    if (!post && posts.length > 0) {
      alert("해당 포스트를 찾을 수 없습니다.");
      navigate("/");
    }
  }, [post, navigate, posts]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/posts/${postId}/comments`
        );
        if (!res.ok) throw new Error("댓글 조회 실패");
        const data = await res.json();
        setComments(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("댓글 로딩 오류:", err);
      }
    };

    fetchComments();
  }, [postId]);

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

  const isCommentAuthor = (comment) =>
    isLoggedIn && comment.userId === currentUser?.id;

  const isPostAuthor = () => isLoggedIn && currentUser?.id === post?.userId;

  const handleCommentReaction = (commentId, type) => {
    const currentReaction = commentReactions[commentId];
    setCommentReactions((prev) => {
      if (currentReaction === type) {
        const updated = { ...prev };
        delete updated[commentId];
        return updated;
      } else {
        return { ...prev, [commentId]: type };
      }
    });

    setComments((prev) =>
      prev.map((c) => {
        if (c.id !== commentId) return c;
        let updatedLikes = c.likes || 0;
        let updatedDislikes = c.dislikes || 0;

        if (currentReaction === type) {
          if (type === "like") updatedLikes--;
          else updatedDislikes--;
        } else if (currentReaction === "like" && type === "dislike") {
          updatedLikes--;
          updatedDislikes++;
        } else if (currentReaction === "dislike" && type === "like") {
          updatedDislikes--;
          updatedLikes++;
        } else if (!currentReaction) {
          if (type === "like") updatedLikes++;
          else updatedDislikes++;
        }

        return { ...c, likes: updatedLikes, dislikes: updatedDislikes };
      })
    );
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    const commentText = e.target.comment.value.trim();
    if (!commentText || !currentUser) return;

    const newComment = {
      postId: postIdNum,
      userId: currentUser.id,
      authorAlias: currentUser.alias,
      profileIcon: getAliasIcon(currentUser.alias),
      content: commentText,
    };

    try {
      const res = await fetch(`http://localhost:8080/posts/${postIdNum}/comments`, {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      });

      if (res.ok) {
        const saved = await res.json();
        setComments((prev) => [...prev, saved]);
        e.target.reset();
      } else {
        alert("댓글 등록 실패");
      }
    } catch (err) {
      console.error("댓글 저장 중 오류:", err);
    }
  };

  const handleEditComment = async (commentId, currentContent) => {
    const newContent = prompt("댓글을 수정하세요", currentContent);
    if (!newContent || newContent.trim() === "") return;

    try {
      const res = await fetch(`http://localhost:8080/comments/${commentId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: newContent }),
      });

      if (!res.ok) throw new Error("수정 실패");

      setComments((prev) =>
        prev.map((c) =>
          c.id === commentId ? { ...c, content: newContent } : c
        )
      );
    } catch (err) {
      console.error("댓글 수정 오류:", err);
      alert("댓글 수정에 실패했습니다.");
    }
  };

  const handleDeleteComment = async (commentId) => {
    if (!window.confirm("댓글을 삭제하시겠습니까?")) return;

    try {
      const res = await fetch(`http://localhost:8080/comments/${commentId}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("삭제 실패");

      setComments((prev) => prev.filter((c) => c.id !== commentId));
    } catch (err) {
      console.error("댓글 삭제 오류:", err);
      alert("댓글 삭제에 실패했습니다.");
    }
  };

  const handleEditPost = async () => {
    const newContent = prompt("게시글을 수정하세요", post.content);
    if (!newContent || newContent.trim() === "") return;

    try {
      const res = await fetch(`http://localhost:8080/posts/${post.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: newContent }),
      });

      if (!res.ok) throw new Error("게시글 수정 실패");

      navigate(0);
    } catch (err) {
      console.error("게시글 수정 오류:", err);
      alert("게시글 수정 실패");
    }
  };

  const handleDeletePost = async () => {
    if (!window.confirm("게시글을 삭제하시겠습니까?")) return;

    try {
      const res = await fetch(`http://localhost:8080/posts/${post.id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("게시글 삭제 실패");

      alert("삭제 완료");
      navigate("/home");
    } catch (err) {
      console.error("게시글 삭제 오류:", err);
      alert("게시글 삭제 실패");
    }
  };

  return (
    <div className="bg-[#0b0c2a] min-h-screen text-white px-6 py-4">
      <div className="bg-[#1a1b3a] rounded-xl p-6 shadow-md">
        <div className="flex justify-between items-center text-sm text-gray-400 mb-1">
          <span>{post.category}</span>
          <div className="flex items-center gap-2 text-sm font-semibold text-blue-300">
            <img
              src={post.profileIcon || "/icons/default.png"}
              className="w-5 h-5"
              alt="icon"
            />
            <span>{post.author || post.authorAlias}</span>
          </div>
        </div>

        <div className="text-base leading-relaxed mb-3">{post.content}</div>

        {isPostAuthor() && (
          <div className="flex justify-end gap-3 mb-2 text-sm text-gray-400">
            <button
              onClick={() => navigate("/new", { state: { post } })}
              className="hover:text-yellow-300"
            >
              ✏️ 수정
            </button>
            <button onClick={handleDeletePost} className="hover:text-red-300">
              🗑️ 삭제
            </button>
          </div>
        )}

        <div className="flex gap-4 text-sm items-center mb-4">
          <span>💖 {post.likes || 0}</span>
          <span>💬 {comments.length}</span>
        </div>

        <hr className="border-gray-700 mb-4" />
        <h3 className="mb-3 text-lg font-semibold">댓글</h3>

        {comments.length === 0 && (
          <p className="text-gray-400">아직 댓글이 없습니다.</p>
        )}

        <div className="space-y-4">
          {comments.map((c) => (
            <div
              key={c.id}
              className="bg-[#2a2b4a] rounded-md p-3 flex justify-between items-start"
            >
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  <img
                    src={c.profileIcon || "/icons/default.png"}
                    className="w-4 h-4 mr-1"
                    alt="icon"
                  />
                  <span className="font-bold text-sm text-blue-300 mr-2">
                    {c.authorAlias}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(c.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p>{c.content}</p>
                {isCommentAuthor(c) && (
                  <div className="flex gap-2 mt-1 text-xs text-gray-400">
                    <button
                      onClick={() => handleEditComment(c.id, c.content)}
                      className="hover:text-yellow-300"
                    >
                      ✏️ 수정
                    </button>
                    <button
                      onClick={() => handleDeleteComment(c.id)}
                      className="hover:text-red-300"
                    >
                      🗑️ 삭제
                    </button>
                  </div>
                )}
              </div>
              <div className="flex flex-col items-center text-xs space-y-1 ml-4">
                <button
                  onClick={() => handleCommentReaction(c.id, "like")}
                  className={
                    commentReactions[c.id] === "like"
                      ? "text-blue-400"
                      : "text-blue-300 hover:text-blue-400"
                  }
                >
                  👍 {c.likes || 0}
                </button>
                <button
                  onClick={() => handleCommentReaction(c.id, "dislike")}
                  className={
                    commentReactions[c.id] === "dislike"
                      ? "text-red-400"
                      : "text-red-300 hover:text-red-400"
                  }
                >
                  👎 {c.dislikes || 0}
                </button>
              </div>
            </div>
          ))}
        </div>

        {isLoggedIn ? (
          <form onSubmit={handleAddComment} className="mt-6">
            <input
              name="comment"
              maxLength={100}
              placeholder="100자 이내로 댓글 작성"
              className="w-full bg-[#2a2b4a] px-3 py-2 rounded-md text-white placeholder-gray-400"
            />
            <br/><br/>
            <button
              type="submit"
              className="mt-2 bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-md font-bold"
            >
              댓글 달기
            </button>
            <br/><br/>
            <button
              onClick={() => navigate(-1)}
              className="mt-2 bg-gray-500 hover:bg-pink-600 px-4 py-2 rounded-md font-bold"
            >
              뒤로가기
            </button>
          </form>
        ) : (
          <p className="mt-6 text-gray-400">
            댓글을 작성하려면{" "}
            <a href="/login" className="underline text-blue-400">
              로그인
            </a>{" "}
            이 필요합니다.
          </p>
        )}
      </div>
    </div>
  );
}
