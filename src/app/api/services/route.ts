import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/app/api/services/services.json");

export interface Service {
  id: number;
  title: string;
  description: string;
}

const getServices = (): Service[] => {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data) as Service[];
};

const saveServices = (services: Service[]) => {
  fs.writeFileSync(filePath, JSON.stringify(services, null, 2));
};

// --------------------
// GET
// --------------------
export async function GET(req: NextRequest) {
  try {
    const services = getServices();
    const id = req.nextUrl.searchParams.get("id");
    if (id) {
      const service = services.find(s => s.id === parseInt(id));
      return NextResponse.json(service || { message: "Not found" }, { status: service ? 200 : 404 });
    }
    return NextResponse.json(services);
  } catch (error) {
    console.error("GET /api/services error:", error);
    return NextResponse.json({ message: "Server error", detail: (error as Error).message }, { status: 500 });
  }
}

// --------------------
// POST
// --------------------
export async function POST(req: NextRequest) {
  try {
    const service: Service = await req.json();
    const services = getServices();
    service.id = services.length ? services[services.length - 1].id + 1 : 1;
    services.push(service);
    saveServices(services);
    return NextResponse.json(service);
  } catch (error) {
    console.error("POST /api/services error:", error);
    return NextResponse.json({ message: "Server error", detail: (error as Error).message }, { status: 500 });
  }
}

// --------------------
// PUT
// --------------------
export async function PUT(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    if (!id) return NextResponse.json({ message: "ID is required" }, { status: 400 });

    const updatedService: Partial<Service> = await req.json();
    const services = getServices();
    const index = services.findIndex(s => s.id === parseInt(id));
    if (index === -1) return NextResponse.json({ message: "Not found" }, { status: 404 });

    services[index] = { ...services[index], ...updatedService };
    saveServices(services);
    return NextResponse.json(services[index]);
  } catch (error) {
    console.error("PUT /api/services error:", error);
    return NextResponse.json({ message: "Server error", detail: (error as Error).message }, { status: 500 });
  }
}

// --------------------
// DELETE
// --------------------
export async function DELETE(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    if (!id) return NextResponse.json({ message: "ID is required" }, { status: 400 });

    let services = getServices();
    services = services.filter(s => s.id !== parseInt(id));
    saveServices(services);
    return NextResponse.json({ message: "Deleted successfully" });
  } catch (error) {
    console.error("DELETE /api/services error:", error);
    return NextResponse.json({ message: "Server error", detail: (error as Error).message }, { status: 500 });
  }
}
