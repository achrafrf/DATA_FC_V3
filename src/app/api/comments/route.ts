import { NextRequest, NextResponse } from "next/server";
import { getComments, addComment, deleteComment, Comment } from "@/lib/db";

export async function GET() {
  try {
    const data = await getComments();
    return NextResponse.json(data);
  } catch (err) {
    console.error("GET comments error:", err);
    return NextResponse.json({ error: "Failed to fetch comments" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const comments = await getComments();

    const newComment: Comment = {
      id: comments.length ? comments[comments.length - 1].id + 1 : 1,
      date: new Date().toISOString(),
      ...body,
    };

    await addComment(newComment);
    return NextResponse.json(newComment, { status: 201 });
  } catch (err) {
    console.error("POST comments error:", err);
    return NextResponse.json({ error: "Failed to add comment" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const idParam = req.nextUrl.searchParams.get("id");
    if (!idParam) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const id = Number(idParam);
    await deleteComment(id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DELETE comments error:", err);
    return NextResponse.json({ error: "Failed to delete comment" }, { status: 500 });
  }
}
