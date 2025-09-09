import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// مسار ملف التعليقات
const filePath = path.join(process.cwd(), "src/app/api/comments/comments.json");

// تعريف TypeScript للتعليق
interface Comment {
  id: number;
  name: string;
  text: string;
  rating: number;
}

// 📌 Helper: قراءة التعليقات من JSON
function readComments(): Comment[] {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]"); // إنشاء الملف إذا لم يكن موجود
  }
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data) as Comment[];
}

// 📌 Helper: كتابة التعليقات في JSON
function writeComments(comments: Comment[]) {
  fs.writeFileSync(filePath, JSON.stringify(comments, null, 2));
}

// ✅ GET: استرجاع جميع التعليقات + متوسط التقييم
export async function GET() {
  const comments = readComments();
  const avgRating =
    comments.length > 0
      ? comments.reduce((sum, c) => sum + c.rating, 0) / comments.length
      : 0;

  return NextResponse.json({ comments, avgRating });
}

// ✅ POST: إضافة تعليق جديد
export async function POST(req: Request) {
  const body = await req.json();
  const comments = readComments();

  const newComment: Comment = {
    id: Date.now(),
    name: body.name,
    text: body.text,
    rating: body.rating,
  };

  comments.push(newComment);
  writeComments(comments);

  return NextResponse.json(newComment, { status: 201 });
}

// ✅ DELETE: حذف تعليق
export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const idParam = url.searchParams.get("id");
    if (!idParam) {
      return NextResponse.json({ error: "Missing id" }, { status: 400 });
    }

    const id = Number(idParam);
const comments = readComments();

    const index = comments.findIndex(c => c.id === id);
    if (index === -1) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 });
    }

    // إزالة التعليق
    comments.splice(index, 1);
    writeComments(comments);

    return NextResponse.json({ message: "Comment deleted" }, { status: 200 });
 } catch {
  return NextResponse.json({ error: "Server error" }, { status: 500 });
}

}
