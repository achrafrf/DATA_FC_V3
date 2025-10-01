import { NextRequest, NextResponse } from "next/server";
import { getFormations, addFormation, updateFormation, deleteFormation, Formation } from "@/lib/db";

export async function GET() {
  try {
    const data = await getFormations();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch formations" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const formations = await getFormations();
    const newFormation: Formation = {
      id: formations.length ? formations[formations.length - 1].id + 1 : 1,
      ...body
    };
    await addFormation(newFormation);
    return NextResponse.json(newFormation);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to add formation" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const id = Number(req.nextUrl.searchParams.get("id"));
    const body = await req.json();
    const updated = await updateFormation(id, body);
    if (!updated) return NextResponse.json({ error: "Formation not found" }, { status: 404 });
    return NextResponse.json(updated);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to update formation" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const id = Number(req.nextUrl.searchParams.get("id"));
    await deleteFormation(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to delete formation" }, { status: 500 });
  }
}
