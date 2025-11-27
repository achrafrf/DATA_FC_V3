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
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);

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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-fit bg-gradient-to-br from-slate-50 to-teal-50 py-6 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-teal-600 bg-clip-text text-transparent mb-3">
            Avis clients
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
Partagez votre expérience avec nous et rejoignez notre communauté en pleine expansion.          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Form Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/60 p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">✏️</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800">Ajoutez votre commentaire</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-teal-600">
                nom
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 transition-all duration-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none hover:border-gray-300 bg-white/50 backdrop-blur-sm"
                  placeholder="Écrivez votre nom ici..."
                />
              </div>

              {/* Comment Textarea */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-teal-600">
                  Commentaire
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                  rows={3}
                  className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 transition-all duration-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none hover:border-gray-300 bg-white/50 backdrop-blur-sm resize-none"
                  placeholder="Partagez votre opinion et votre expérience avec nous..."
                />
              </div>

              {/* Rating Stars */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-teal-600">
                  Évaluation
                </label>
                <div className="flex gap-1 justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(0)}
                      className="transform transition-all duration-200 hover:scale-110 active:scale-95"
                    >
                      <FiStar
                        className={`w-8 h-8 cursor-pointer transition-all duration-200 ${
                          (hover || rating) >= star 
                            ? "text-yellow-400 fill-yellow-400 drop-shadow-lg" 
                            : "text-gray-300 hover:text-yellow-200"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <div className="text-center mt-1">
                  <span className="text-xs text-gray-500">
                    {rating > 0 ? ` Évalué avec${rating} étoile${rating > 1 ? 'ات' : ''}` : 'Choisissez le nombre étoiles'}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                 Envoi...
                  </>
                ) : (
                  <>
                    <span>Soumettre un commentaire</span>
                    <span className="text-base">🚀</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Comments Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">💬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                Commentaires ({comments.length})
              </h3>
            </div>

            {comments.length > 0 ? (
              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {comments.map((c, index) => (
                  <div 
                    key={c.id}
                    className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/60 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.01] animate-slide-in"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {c.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <span className="font-bold text-gray-800 text-sm">{c.name}</span>
                      </div>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FiStar
                            key={star}
                            className={`w-3 h-3 ${
                              c.rating >= star 
                                ? "text-yellow-400 fill-yellow-400" 
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-right pr-1 text-sm">
                      {c.text}
                    </p>
                    <div className="mt-2 pt-2 border-t border-gray-100">
                      <span className="text-xs text-gray-500">
                        تم النشر منذ قليل
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-200/50">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">📝</span>
                </div>
                <h4 className="text-base font-semibold text-gray-600 mb-1">
                  Aucun commentaire pour l instant
                </h4>
                <p className="text-gray-500 text-xs">
Soyez le premier à partager votre expérience et à contribuer à la construction de la communauté.                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
        }
        
        /* Scrollbar Styling */
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}