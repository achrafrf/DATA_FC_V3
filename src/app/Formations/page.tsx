'use client';

import { useState, useEffect } from "react";
import { 
  FiEdit, 
  FiTrash2, 
  FiPlus, 
  FiHome, 
  FiUser, 
  FiBriefcase, 
  FiLogOut, 
  FiMessageSquare,
  FiBook
} from "react-icons/fi";
import { useUser, ClerkLoaded, SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import TextType from "./TextType";
import Image from 'next/image'
import { useCallback } from "react";
import RichTextEditor, { RichTextEditorHandle } from "@/app/Formations/RichTextEditor";
import { useRef } from "react";


interface Item {
  id: number;
  title: string;
  description: string;
  image?: string;
  objectifs?: string;
  population?: string;
  duree?: string;
  code?: string; 
  customCode?: string;
}

interface Comment {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export default function DashboardPage() {
  const { isSignedIn , isLoaded } = useUser();
  const router = useRouter();

const [currentPage, setCurrentPage] = useState<'dashboard' | 'formations' | 'services' | 'comments' | 'autres'>('dashboard');
  const [items, setItems] = useState<Item[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Item | null>(null);

  const [totalFormations, setTotalFormations] = useState(0);
  const [totalServices, setTotalServices] = useState(0);

  const [totalComments, setTotalComments] = useState(0);
  const [avgRating, setAvgRating] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);

  const [confirmOpen, setConfirmOpen] = useState(false);
const [deleteTarget, setDeleteTarget] = useState<{ id: number; type: "item" | "comment" } | null>(null);

const editorRef = useRef<RichTextEditorHandle>(null);
const [editorValue, setEditorValue] = useState("");

const [selectedCode, setSelectedCode] = useState("DFC1"); 

const [form, setForm] = useState<Partial<Item>>({});


const [selectedPage, setSelectedPage] = useState<string | null>(null);
const [pages, setPages] = useState<{ id: string; title: string; content: string }[]>([]);






  // ✅ Alert State
  const [alert, setAlert] = useState<{ message: string; type: "success" | "error" } | null>(null);

  useEffect(() => {
     if (isLoaded && !isSignedIn) {
      router.replace('/login'); // إعادة التوجيه إذا غير مسجل
    }
  }, [isLoaded, isSignedIn, router]);

  const fetchItems = useCallback(async () => {
  try {
    // --- Formations ---
    const resFormations = await fetch('/api/formations');
    let dataFormations: Item[] = [];
    if (resFormations.ok) {
      const json = await resFormations.json();
      dataFormations = Array.isArray(json) ? json : [];
    }
    setTotalFormations(dataFormations.length);

    // --- Services ---
    const resServices = await fetch('/api/services');
    let dataServices: Item[] = [];
    if (resServices.ok) {
      const json = await resServices.json();
      dataServices = Array.isArray(json) ? json : [];
    }
    setTotalServices(dataServices.length);

    // --- Comments ---
    const resComments = await fetch('/api/comments');
    let dataComments: { comments: Comment[]; avgRating: number } = { comments: [], avgRating: 0 };
    if (resComments.ok) {
      const json = await resComments.json();
      dataComments = {
        comments: Array.isArray(json.comments) ? json.comments : [],
        avgRating: typeof json.avgRating === "number" ? json.avgRating : 0,
      };
    }
    setTotalComments(dataComments.comments.length);
    setAvgRating(Number(dataComments.avgRating?.toFixed(1)) || 0);
    setComments(dataComments.comments);

    // --- Items حسب الصفحة الحالية ---
    const currentData = currentPage === 'formations' ? dataFormations : dataServices;
    setItems(Array.isArray(currentData) ? currentData : []);
  } catch (error) {
    console.error("Fetch error:", error);
    showAlert("❌ Failed to load data from server", "error");
  }
}, [currentPage]);



  useEffect(() => {
    if (isSignedIn) fetchItems();
  }, [isSignedIn, fetchItems]);

  const showAlert = (message: string, type: "success" | "error") => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 3000);
  };

  useEffect(() => {
  const loadPages = async () => {
    if (currentPage !== 'autres') return; // ✅ الشرط داخل الدالة وليس خارج useEffect
    try {
      const res = await fetch('/api/pages');
      const data = await res.json();
      setPages(data);
    } catch {
      showAlert("❌ Échec du chargement des pages", "error");
    }
  };
  loadPages();
}, [currentPage]);

 const handleSave = async (data: Partial<Item>) => {
  try {
    const endpoint = currentPage === 'formations' ? '/api/formations' : '/api/services';
    let res;

    if (editing) {
      res = await fetch(`${endpoint}?id=${editing.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } else {
      res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    }

    let jsonData;
    try {
      jsonData = await res.json();
    } catch {
      jsonData = null; // إذا الرد فارغ
    }

    if (res.ok && jsonData) {
  showAlert(`✅ ${editing ? "Updated" : "Added"} successfully`, "success");
  setModalOpen(false);
  setEditing(null);
  fetchItems();
}
 else {
      showAlert(jsonData?.message || "❌ Something went wrong!", "error");
    }
  } catch (error) {
    console.error("Save error:", error);
    showAlert("❌ Error connecting to server", "error");
  }
};


  const handleDelete = async (id: number) => {
    try {
      const endpoint = currentPage === 'formations' ? '/api/formations' : '/api/services';
      const res = await fetch(`${endpoint}?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        showAlert("✅ Deleted successfully", "success");
        fetchItems();
      } else {
        showAlert("❌ Failed to delete", "error");
      }
    } catch {
      showAlert("❌ Error connecting to server", "error");
    }
  };

const handleEdit = (item: Item) => {
  setEditing(item);
  setEditorValue(item.description || ""); // ⚡ هنا نملأ الـ editor
  setModalOpen(true);
};



  if (!isLoaded || !isSignedIn) return null;

  // حذف تعليق
  const handleDeleteComment = async (id: number) => {
    try {
      const res = await fetch(`/api/comments?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        showAlert("✅ Comment deleted", "success");
        fetchItems(); // إعادة جلب التعليقات بعد الحذف
      } else {
        showAlert("❌ Failed to delete comment", "error");
      }
    } catch {
      showAlert("❌ Error connecting to server", "error");
    }
  };






const handleSavePage = async () => {
  const content = editorRef.current?.getContent() || "";
  const current = pages.find(p => p.id === selectedPage);
  if (!current) return;
  
  const updated = { ...current, content };
  await fetch('/api/pages', {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updated),
  });

  showAlert("✅ Page mise à jour avec succès", "success");
};


  return (
    <ClerkLoaded>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-800">
        {/* Sidebar */}
        <aside className="w-64 bg-gradient-to-b from-teal-700 to-teal-600 text-white flex flex-col shadow-lg dark:bg-gray-700">
          <div className="flex flex-col items-center justify-center p-6 border-b border-teal-500">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-amber-400 shadow-md mb-3">
              <Image
                src="/pic.png"
                alt="Image"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="text-xl font-bold">AZIZ CHAKIK</div>
            <p>datafc2019@gmail.com</p>
          </div>

          <nav className="flex-1">
            <ul>
              <li onClick={() => setCurrentPage('dashboard')} className={`px-6 py-3 flex items-center gap-2 cursor-pointer hover:bg-teal-500 ${currentPage==='dashboard'?'bg-teal-500':''}`}>
                <FiHome /> Dashboard
              </li>
              <li onClick={() => setCurrentPage('formations')} className={`px-6 py-3 flex items-center gap-2 cursor-pointer hover:bg-teal-500 ${currentPage==='formations'?'bg-teal-500':''}`}>
                <FiUser /> Formations
              </li>
              <li onClick={() => setCurrentPage('services')} className={`px-6 py-3 flex items-center gap-2 cursor-pointer hover:bg-teal-500 ${currentPage==='services'?'bg-teal-500':''}`}>
                <FiBook /> Services
              </li>
              <li 
  onClick={() => setCurrentPage('autres')} 
  className={`px-6 py-3 flex items-center gap-2 cursor-pointer hover:bg-teal-500 ${currentPage==='autres'?'bg-teal-500':''}`}
>
  <FiBriefcase /> Autres
</li>

              <li 
                onClick={() => setCurrentPage('comments')} 
                className={`px-6 py-3 flex items-center gap-2 cursor-pointer hover:bg-teal-500 ${currentPage==='comments'?'bg-teal-500':''}`}
              >
                <FiMessageSquare />  Comments
              </li>
            </ul>
          </nav>

          <div className="px-6 py-3 border-t border-teal-500 mt-auto hover:bg-teal-500">
            <SignOutButton redirectUrl="/login">
              <button className="w-full flex items-center gap-2 text-left">
                <FiLogOut /> Déconnexion
              </button>
            </SignOutButton>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-auto">

          {/* ✅ Alert at bottom-right */}
          {alert && (
            <div
              className={`fixed bottom-4 right-4 z-50 px-4 py-2 rounded-lg shadow-lg text-white transform transition-all duration-300 ${
                alert.type === "success" ? "bg-green-600" : "bg-red-600"
              }`}
            >
              {alert.message}
            </div>
          )}

          {/* Dashboard */}
          {currentPage === 'dashboard' && (
            <>
              <h1 className="text-3xl font-bold text-gray-800 mb-6">
                <TextType
                  text={["Bonjour, aziz chakik", "Bienvenue chez DATA FC"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow p-6 flex flex-col dark:bg-gray-600">
                  <h2 className="text-xl font-semibold text-gray-700 dark:text-white">Total Formations</h2>
                  <p className="mt-2 text-3xl font-bold text-teal-600 dark:text-white">{totalFormations}</p>
                  <span className="mt-1 text-gray-500 text-sm dark:text-white">Updated today</span>
                </div>

                <div className="bg-white rounded-xl shadow p-6 flex flex-col dark:bg-gray-600">
                  <h2 className="text-xl font-semibold text-gray-700 dark:text-white">Total Services</h2>
                  <p className="mt-2 text-3xl font-bold text-teal-600 dark:text-white">{totalServices}</p>
                  <span className="mt-1 text-gray-500 text-sm dark:text-white">Updated today</span>
                </div>

                <div className="bg-white rounded-xl shadow p-6 flex flex-col dark:bg-gray-600">
                  <h2 className="text-xl font-semibold text-gray-700 dark:text-white">Total Comments</h2>
                  <p className="mt-2 text-3xl font-bold text-teal-600 dark:text-white">{totalComments}</p>
                  <span className="mt-1 text-gray-500 text-sm dark:text-white">Avg Rating: ⭐ {avgRating}</span>
                </div>
              </div>
            </>
          )}

          {/* Formations / Services Page */}
          {(currentPage === 'formations' || currentPage === 'services') && (
            <>
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">
                  {currentPage === 'formations' ? "📚 Formations" : "💼 Services"}
                </h1>

                 {currentPage === 'formations' && (
    <select
      value={selectedCode}
      onChange={(e) => setSelectedCode(e.target.value)}
      className="border bg-teal-600 text-white rounded px-3 py-2 focus:ring-2 focus:ring-teal-500"
    >
      <option className="bg-white text-teal-600 font-bold" value="DFC1">DFC1 : GRH et Management</option>
      <option className="bg-white text-teal-600 font-bold" value="DFC2">DFC2 : Formation</option>
      <option className="bg-white text-teal-600 font-bold" value="DFC3">DFC3 : Qualité-Santé-Sécurité-Environnement (QSSE)</option>
      <option className="bg-white text-teal-600 font-bold" value="DFC4">DFC4 : Finance, Comptabilité et Assurance</option>
      <option className="bg-white text-teal-600 font-bold" value="DFC5">DFC5 : Communication</option>
      <option className="bg-white text-teal-600 font-bold" value="DFC6">DFC6 : Management</option>
      <option className="bg-white text-teal-600 font-bold" value="DFC7">DFC7 : TIC et Informatique</option>
      <option className="bg-white text-teal-600 font-bold" value="DFC8">DFC8 : Vente & Marketing</option>
      <option className="bg-white text-teal-600 font-bold" value="DFC9">DFC9 : Sécurité routière</option>
    </select>
  )}

<button
  className="flex items-center gap-2 bg-teal-600 text-white px-4 py-3 rounded-lg hover:bg-teal-700"
  onClick={() => {
    setEditing(null);
    setEditorValue("");
    // ✅ عند الفتح، نملأ الكود المختار من الـ select في الأعلى
    setForm(prev => ({ ...prev, code: selectedCode }));
    setModalOpen(true);
  }}
>
  <FiPlus /> Add {currentPage === 'formations' ? "Formation" : "Service"}
</button>


              </div>

              {/* Table */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-teal-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase">Code</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase">Title</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase">Description</th>
                      <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items
  .filter((item) => currentPage === 'formations' ? item.code === selectedCode : true)
  .map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 font-mono text-teal-800">{item.customCode || "-"}</td>
                        <td className="px-6 py-4 font-bold text-teal-700 cursor-pointer hover:underline">
                          <a href={`/${currentPage}/${item.id}`}>{item.title}</a>
                        </td>
<td className="px-6 py-4 max-w-none">
  {item.description
    ? `${item.description.replace(/<[^>]+>/g, '').slice(0, 10)}${item.description.replace(/<[^>]+>/g, '').length > 10 ? "..." : ""}`
    : ""}
</td>

                        <td className="px-6 py-4 text-right space-x-2">
                          <button onClick={() => handleEdit(item)} className="text-yellow-500 hover:text-yellow-600"><FiEdit /></button>
<button 
  onClick={() => {
    setDeleteTarget({ id: item.id, type: "item" });
    setConfirmOpen(true);
  }} 
  className="text-red-500 hover:text-red-600"
>
  <FiTrash2 />
</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Modal */}
              {modalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-xl p-6 w-full max-w-2xl shadow-lg overflow-y-auto max-h-[90vh]">
                    <h2 className="text-xl font-bold mb-4 text-teal-700">
                      {editing ? "✏️ Edit" : "➕ Add"} {currentPage === 'formations' ? "Formation" : "Service"}
                    </h2>
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                   handleSave({
  title: formData.get("title") as string,
  image: formData.get("image") as string,
  objectifs: formData.get("objectifs") as string,
  population: formData.get("population") as string,
  duree: formData.get("duree") as string,
  description: editorRef.current?.getContent() || "",
  code: currentPage === 'formations' ? (formData.get("code") as string) : undefined,
  customCode: currentPage === 'formations' 
    ? `DFC${formData.get("customCode")}` 
    : undefined,
});





                    }} className="space-y-4">
                      {/* form inputs ... كما في كودك */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input name="title" defaultValue={editing?.title} className="w-full border rounded px-3 py-2 mt-1 focus:ring-2 focus:ring-teal-500" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input name="image" defaultValue={editing?.image} className="w-full border rounded px-3 py-2 mt-1 focus:ring-2 focus:ring-teal-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Objectifs</label>
                        <input name="objectifs" defaultValue={editing?.objectifs} className="w-full border rounded px-3 py-2 mt-1 focus:ring-2 focus:ring-teal-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Population cible</label>
                        <input name="population" defaultValue={editing?.population} className="w-full border rounded px-3 py-2 mt-1 focus:ring-2 focus:ring-teal-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Durée</label>
                        <input name="duree" defaultValue={editing?.duree} className="w-full border rounded px-3 py-2 mt-1 focus:ring-2 focus:ring-teal-500" />
                      </div>

                      {/* <-- NEW: code select (only for formations) */}
                      {currentPage === 'formations' && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Catégorie (Code)</label>
                         <input
  type="text"
  name="code"
  value={form.code || selectedCode}
  readOnly
  className="w-full bg-gray-100 border rounded px-3 py-2 mt-1 text-gray-600 cursor-not-allowed"
  title="Catégorie sélectionnée automatiquement"
/>

                        </div>
                        
                      )}
{currentPage === 'formations' && (
  <div className="mt-3">
    <label className="block text-sm font-medium text-gray-700">
      CODE :
    </label>
    <input
  type="text"
  name="customCode"
  defaultValue={editing?.customCode?.replace(/^DFC/, "") || ""} // إزالة DFC إذا موجود عند التعديل
  placeholder="NUMBER"
  required
  className="w-full border rounded px-3 py-2 mt-1 focus:ring-2 focus:ring-teal-500"
/>

  </div>
)}

                     <div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Programme de formation (Description)
  </label>
<RichTextEditor ref={editorRef} initialValue={editorValue} />
</div>


                      <div className="flex justify-end gap-2 mt-4">
                        <button type="button" onClick={() => { setModalOpen(false); setEditing(null); }} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">Save</button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </>
          )}
          {/* Autres Page */}
{currentPage === 'autres' && (
  <div className="bg-white rounded-xl shadow-md p-6">
    <h1 className="text-2xl font-bold text-teal-700 mb-6">📦 Gestion du contenu</h1>

    {/* Tabs */}
    <div className="flex gap-2 mb-4 flex-wrap">
      {[
        { id: "interentreprises", label: "Formation Interentreprises" },
        { id: "devis", label: "Demande de devis" },
        { id: "vivier", label: "Notre vivier de compétence" },
        { id: "contact", label: "Contact" },
      ].map(page => (
        <button
          key={page.id}
          onClick={() => setSelectedPage(page.id)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold border ${
            selectedPage === page.id
              ? "bg-teal-600 text-white"
              : "bg-gray-100 text-teal-600 hover:bg-teal-200"
          }`}
        >
          {page.label}
        </button>
      ))}
    </div>

    {/* Content editor */}
    {selectedPage && (
      <div>
        <h2 className="text-xl font-bold text-teal-700 mb-3">
          Modifier : {pages.find(p => p.id === selectedPage)?.title}
        </h2>
        <RichTextEditor
          ref={editorRef}
          initialValue={editorValue}
        />
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={handleSavePage}
            className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
          >
            💾 Enregistrer
          </button>
        </div>
      </div>
    )}
  </div>
)}



          {/* Comments Page */}
          {currentPage==='comments' && (
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-teal-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase">Comment</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase">Rating</th>
                    <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {comments.map(c=>(
                    <tr key={c.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 font-bold text-teal-700">{c.name}</td>
                      <td className="px-6 py-4">{c.text}</td>
                      <td className="px-6 py-4">⭐ {c.rating}</td>
                      <td className="px-6 py-4 text-right">
<button 
  onClick={() => {
    setDeleteTarget({ id: c.id, type: "comment" });
    setConfirmOpen(true);
  }}
  className="text-red-500 hover:text-red-600"
>
  <FiTrash2 />
</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
{confirmOpen && deleteTarget && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm">
      <h2 className="text-lg font-bold text-gray-800 mb-4">⚠️ Confirmation</h2>
      <p className="mb-6 text-gray-600">
        Etes-vous sûr de vouloir supprimer cet {deleteTarget.type === "item" ? "élément" : "comment"}?
      </p>
      <div className="flex justify-end gap-2">
        <button
          onClick={() => {
            setConfirmOpen(false);
            setDeleteTarget(null);
          }}
          className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            if (deleteTarget.type === "item") {
              handleDelete(deleteTarget.id);
            } else {
              handleDeleteComment(deleteTarget.id);
            }
            setConfirmOpen(false);
            setDeleteTarget(null);
          }}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
)}

        </main>
      </div>
    </ClerkLoaded>
  );
}