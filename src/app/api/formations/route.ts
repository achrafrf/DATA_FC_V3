import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

// ✅ تعريف Formation
export interface Formation {
  id: number;
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
  const formations = await getFormations();
  const id = req.nextUrl.searchParams.get("id");

  if (id) {
    const formation = formations.find(f => f.id === parseInt(id));
    return NextResponse.json(
      formation || { message: "Not found" },
      { status: formation ? 200 : 404 }
    );
  }

  return NextResponse.json(formations);
}

// --------------------
// POST
// --------------------
export async function POST(req: NextRequest) {
  let formation: Partial<Formation> = {};

  // 🔹 هنا بغيت نخليها بسيطة بلا upload file system
  formation = await req.json();

  const formations = await getFormations();
  const newFormation: Formation = {
    id: formations.length ? formations[formations.length - 1].id + 1 : 1,
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
}

// --------------------
// PUT
// --------------------
export async function PUT(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id)
    return NextResponse.json({ message: "ID is required" }, { status: 400 });

  const formations = await getFormations();
  const index = formations.findIndex(f => f.id === parseInt(id));
  if (index === -1)
    return NextResponse.json({ message: "Not found" }, { status: 404 });

  const updates: Partial<Formation> = await req.json();
  formations[index] = { ...formations[index], ...updates };

  await saveFormations(formations);
  return NextResponse.json(formations[index]);
}

// --------------------
// DELETE
// --------------------
export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id)
    return NextResponse.json({ message: "ID is required" }, { status: 400 });

  let formations = await getFormations();
  formations = formations.filter(f => f.id !== parseInt(id));

  await saveFormations(formations);
  return NextResponse.json({ message: "Deleted successfully" });
}
