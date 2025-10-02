// src/app/api/formations/route.ts
import { NextRequest, NextResponse } from "next/server";
import { 
  getFormations, 
  addFormation, 
  updateFormation, 
  deleteFormation, 
  Formation 
} from "@/lib/db";

// ================== GET ==================
// GET all formations or one formation by id
export async function GET(req: NextRequest) {
  try {
    const idParam = req.nextUrl.searchParams.get("id");

    const data = await getFormations();

    if (idParam) {
      const id = Number(idParam);
      const formation = data.find(f => f.id === id);
      if (!formation) {
        return NextResponse.json({ error: "Formation not found" }, { status: 404 });
      }
      return NextResponse.json(formation); // ↪️ ترجع formation واحد
    }

    return NextResponse.json(data); // ↪️ ترجع جميع formations
  } catch (err) {
    console.error("GET error:", err);
    return NextResponse.json({ error: "Failed to fetch formations" }, { status: 500 });
  }
}

// ================== POST ==================
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const formations = await getFormations();

    const newFormation: Formation = {
      id: formations.length ? formations[formations.length - 1].id + 1 : 1,
      ...body,
    };

    await addFormation(newFormation);
    return NextResponse.json(newFormation, { status: 201 });
  } catch (err) {
    console.error("POST error:", err);
    return NextResponse.json({ error: "Failed to add formation" }, { status: 500 });
  }
}

// ================== PUT ==================
export async function PUT(req: NextRequest) {
  try {
    const idParam = req.nextUrl.searchParams.get("id");
    if (!idParam) {
      return NextResponse.json({ error: "Missing id parameter" }, { status: 400 });
    }

    const id = Number(idParam);
    const body = await req.json();

    const updated = await updateFormation(id, body);
    if (!updated) {
      return NextResponse.json({ error: "Formation not found" }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (err) {
    console.error("PUT error:", err);
    return NextResponse.json({ error: "Failed to update formation" }, { status: 500 });
  }
}

// ================== DELETE ==================
export async function DELETE(req: NextRequest) {
  try {
    const idParam = req.nextUrl.searchParams.get("id");
    if (!idParam) {
      return NextResponse.json({ error: "Missing id parameter" }, { status: 400 });
    }

    const id = Number(idParam);
    const deleted = await deleteFormation(id);
    if (!deleted) {
      return NextResponse.json({ error: "Formation not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DELETE error:", err);
    return NextResponse.json({ error: "Failed to delete formation" }, { status: 500 });
  }
}
