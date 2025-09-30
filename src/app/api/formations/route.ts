import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import { v4 as uuidv4 } from "uuid";

// ✅ تعريف Formation
export interface Formation {
  id: string; // UUID
  title: string;
  description: string;
  code: string;
  image?: string;
  objectifs?: string;
  population?: string;
  duree?: string;
  date?: string;
  type?: "formation" | "service";
}

// ✅ helper functions
const getFormations = async (): Promise<Formation[]> => {
  return (await kv.get<Formation[]>("formations")) || [];
};

const saveFormations = async (formations: Formation[]) => {
  await kv.set("formations", formations);
};

// --------------------
// GET
// --------------------
export async function GET(req: NextRequest) {
  try {
    const formations = await getFormations();
    const id = req.nextUrl.searchParams.get("id");

    if (id) {
      const formation = formations.find(f => f.id === id);
      return NextResponse.json(
        formation || { message: "Not found" },
        { status: formation ? 200 : 404 }
      );
    }

    return NextResponse.json(formations);
  } catch (error) {
    console.error("GET /api/formations error:", error);
    return NextResponse.json({ message: "Server error", detail: (error as Error).message }, { status: 500 });
  }
}

// --------------------
// POST
// --------------------
export async function POST(req: NextRequest) {
  try {
    const formation: Partial<Formation> = await req.json();
    const formations = await getFormations();

    const newFormation: Formation = {
      id: uuidv4(),
      title: formation.title || "",
      description: formation.description || "",
      code: formation.code || "DFC7",
      objectifs: formation.objectifs,
      population: formation.population,
      duree: formation.duree,
      image: formation.image,
      date: formation.date,
      type: formation.type,
    };

    formations.push(newFormation);
    await saveFormations(formations);

    return NextResponse.json(newFormation);
  } catch (error) {
    console.error("POST /api/formations error:", error);
    return NextResponse.json({ message: "Server error", detail: (error as Error).message }, { status: 500 });
  }
}

// --------------------
// PUT
// --------------------
export async function PUT(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    if (!id)
      return NextResponse.json({ message: "ID is required" }, { status: 400 });

    const formations = await getFormations();
    const index = formations.findIndex(f => f.id === id);
    if (index === -1)
      return NextResponse.json({ message: "Not found" }, { status: 404 });

    const updates: Partial<Formation> = await req.json();
    formations[index] = { ...formations[index], ...updates };

    await saveFormations(formations);
    return NextResponse.json(formations[index]);
  } catch (error) {
    console.error("PUT /api/formations error:", error);
    return NextResponse.json({ message: "Server error", detail: (error as Error).message }, { status: 500 });
  }
}

// --------------------
// DELETE
// --------------------
export async function DELETE(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    if (!id)
      return NextResponse.json({ message: "ID is required" }, { status: 400 });

    let formations = await getFormations();
    formations = formations.filter(f => f.id !== id);

    await saveFormations(formations);
    return NextResponse.json({ message: "Deleted successfully" });
  } catch (error) {
    console.error("DELETE /api/formations error:", error);
    return NextResponse.json({ message: "Server error", detail: (error as Error).message }, { status: 500 });
  }
}
