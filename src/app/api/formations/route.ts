import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/app/api/formations/formations.json");

export interface Formation {
  id: number;
  title: string;
  description: string;
  image?: string;
  objectifs?: string;
  population?: string;
  duree?: string;
}

const getFormations = (): Formation[] => {
  if (!fsSync.existsSync(filePath)) return [];
  const data = fsSync.readFileSync(filePath, "utf-8");
  return JSON.parse(data) as Formation[];
};

// use fs/promises for writes, fsSync for existence/read
import fsSync from "fs";
const saveFormations = (formations: Formation[]) => {
  fsSync.writeFileSync(filePath, JSON.stringify(formations, null, 2));
};

export async function GET(req: NextRequest) {
  const formations = getFormations();
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

export async function POST(req: NextRequest) {
  let formation: Partial<Formation> = {};
  let imageUrl: string | undefined;

  // detect form-data vs json
  const contentType = req.headers.get("content-type") || "";
  if (contentType.includes("multipart/form-data")) {
    const formData = await req.formData();
    formation.title = formData.get("title") as string;
    formation.description = formData.get("description") as string;
    formation.objectifs = formData.get("objectifs") as string;
    formation.population = formData.get("population") as string;
    formation.duree = formData.get("duree") as string;

    const file = formData.get("image") as File | null;
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const uploadsDir = path.join(process.cwd(), "public/uploads");
      await fs.mkdir(uploadsDir, { recursive: true });
      const filename = `${Date.now()}-${file.name}`;
      await fs.writeFile(path.join(uploadsDir, filename), buffer);
      imageUrl = `/uploads/${filename}`;
      formation.image = imageUrl;
    }
  } else {
    formation = await req.json();
  }

  const formations = getFormations();
  const newFormation: Formation = {
    id: formations.length ? formations[formations.length - 1].id + 1 : 1,
    title: formation.title || "",
    description: formation.description || "",
    objectifs: formation.objectifs,
    population: formation.population,
    duree: formation.duree,
    image: formation.image || imageUrl,
  };

  formations.push(newFormation);
  saveFormations(formations);
  return NextResponse.json(newFormation);
}

export async function PUT(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id)
    return NextResponse.json({ message: "ID is required" }, { status: 400 });

  const formations = getFormations();
  const index = formations.findIndex(f => f.id === parseInt(id));
  if (index === -1)
    return NextResponse.json({ message: "Not found" }, { status: 404 });

  const contentType = req.headers.get("content-type") || "";
  let updates: Partial<Formation> = {};

  if (contentType.includes("multipart/form-data")) {
    const formData = await req.formData();
    updates.title = formData.get("title") as string;
    updates.description = formData.get("description") as string;
    updates.objectifs = formData.get("objectifs") as string;
    updates.population = formData.get("population") as string;
    updates.duree = formData.get("duree") as string;

    const file = formData.get("image") as File | null;
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const uploadsDir = path.join(process.cwd(), "public/uploads");
      await fs.mkdir(uploadsDir, { recursive: true });
      const filename = `${Date.now()}-${file.name}`;
      await fs.writeFile(path.join(uploadsDir, filename), buffer);
      updates.image = `/uploads/${filename}`;
    }
  } else {
    updates = await req.json();
  }

  formations[index] = { ...formations[index], ...updates };
  saveFormations(formations);
  return NextResponse.json(formations[index]);
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id)
    return NextResponse.json({ message: "ID is required" }, { status: 400 });

  let formations = getFormations();
  formations = formations.filter(f => f.id !== parseInt(id));
  saveFormations(formations);
  return NextResponse.json({ message: "Deleted successfully" });
}
  