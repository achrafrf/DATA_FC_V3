import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

// GET all
export async function GET() {
  const rows = db.prepare("SELECT * FROM formations").all();
  return NextResponse.json(rows);
}

// POST add new
export async function POST(req: NextRequest) {
  const body = await req.json();
  const stmt = db.prepare(`
    INSERT INTO formations 
    (title, description, code, image, objectifs, population, duree)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
  const info = stmt.run(
    body.title,
    body.description,
    body.code,
    body.image,
    body.objectifs,
    body.population,
    body.duree
  );
  return NextResponse.json({ id: info.lastInsertRowid, ...body });
}

// PUT update
export async function PUT(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const body = await req.json();
  db.prepare(`
    UPDATE formations SET
    title=?, description=?, code=?, image=?, objectifs=?, population=?, duree=?
    WHERE id=?
  `).run(
    body.title,
    body.description,
    body.code,
    body.image,
    body.objectifs,
    body.population,
    body.duree,
    id
  );
  return NextResponse.json({ message: "updated" });
}

// DELETE
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  db.prepare("DELETE FROM formations WHERE id=?").run(id);
  return NextResponse.json({ message: "deleted" });
}
