import { NextResponse } from "next/server";
import { getAutres, addAutre, updateAutre, deleteAutre } from "@/lib/db";

export async function GET() {
  try {
    const data = await getAutres();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erreur GET /autres:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.mois || !body.formation || !body.duree || !body.prixJour || !body.prixTotal) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    const newItem = {
      id: Date.now(),
      mois: body.mois,
      formation: body.formation,
      duree: body.duree,
      prixJour: body.prixJour,
      prixTotal: body.prixTotal,
    };

    await addAutre(newItem);
    return NextResponse.json(newItem);
  } catch (error) {
    console.error("Erreur POST /autres:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, ...updates } = body;

    if (!id || !Number.isInteger(id)) {
      return NextResponse.json({ error: "ID invalide ou manquant" }, { status: 400 });
    }

    const updated = await updateAutre(id, updates);
    if (!updated) return NextResponse.json({ error: "Item introuvable" }, { status: 404 });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Erreur PUT /autres:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id") || "", 10);

    if (!Number.isInteger(id)) {
      return NextResponse.json({ error: "ID invalide ou manquant" }, { status: 400 });
    }

    const deleted = await deleteAutre(id);
    if (!deleted) return NextResponse.json({ error: "Item introuvable" }, { status: 404 });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur DELETE /autres:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
