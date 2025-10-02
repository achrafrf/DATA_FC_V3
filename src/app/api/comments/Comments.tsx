"use client";

import { useState, useEffect } from "react";
import { FiStar } from "react-icons/fi";

interface Comment {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export default function CommentRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  // 📌 استرجاع التعليقات عند تحميل الصفحة
  const fetchComments = async () => {
    try {
      const res = await fetch("/api/comments");
      const data = await res.json();
      setComments(Array.isArray(data.comments) ? data.comments : []);
    } catch (error) {
      console.error("Failed to fetch comments", error);
      setComments([]);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  // 📌 إرسال تعليق جديد
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, text: comment, rating }),
      });

      if (res.ok) {
        // إعادة جلب التعليقات بعد الإرسال
        await fetchComments();

        // reset form
        setName("");
        setComment("");
        setRating(0);
      }
    } catch (error) {
      console.error("Failed to submit comment", error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full mx-auto mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">💬 Ajoutez votre commentaire</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="max-w-2xl">
          <label className="block text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-teal-500 outline-none"
          />
        </div>

        <div className="max-w-2xl">
          <label className="block text-sm font-medium text-gray-700">Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            rows={4}
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-teal-500 outline-none"
          />
        </div>

        <div className="max-w-2xl">
          <label className="block text-sm font-medium text-gray-700 mb-1">Notation</label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FiStar
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                className={`w-8 h-8 cursor-pointer transition-colors ${
                  (hover || rating) >= star ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"
        >
          Envoyer
        </button>
      </form>

      {comments.length > 0 && (
        <div className="mt-8 space-y-4 max-w-2xl">
          <h3 className="text-xl font-semibold text-gray-800">📌 Comments</h3>
          {comments.map((c) => (
            <div key={c.id} className="border border-gray-200 rounded-lg p-4 shadow-sm bg-gray-50">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-teal-700">{c.name}</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar
                      key={star}
                      className={`w-5 h-5 ${c.rating >= star ? "text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-700">{c.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
