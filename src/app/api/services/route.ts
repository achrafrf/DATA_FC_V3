// src/app/api/services/route.ts
import { NextRequest, NextResponse } from "next/server";
import { 
  getServices, 
  addService, 
  updateService, 
  deleteService, 
  Service 
} from "@/lib/db";

// ================== GET ==================
// GET all services or one service by id
export async function GET(req: NextRequest) {
  try {
    const idParam = req.nextUrl.searchParams.get("id");

    const data = await getServices();

    if (idParam) {
      const id = Number(idParam);
      const service = data.find(s => s.id === id);
      if (!service) {
        return NextResponse.json({ error: "Service not found" }, { status: 404 });
      }
      return NextResponse.json(service); // ↪️ خدمة واحدة
    }

    return NextResponse.json(data); // ↪️ كل الخدمات
  } catch (err) {
    console.error("GET error:", err);
    return NextResponse.json({ error: "Failed to fetch services" }, { status: 500 });
  }
}

// ================== POST ==================
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const services = await getServices();

    const newService: Service = {
      id: services.length ? services[services.length - 1].id + 1 : 1,
      ...body,
    };

    await addService(newService);
    return NextResponse.json(newService, { status: 201 });
  } catch (err) {
    console.error("POST error:", err);
    return NextResponse.json({ error: "Failed to add service" }, { status: 500 });
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

    const updated = await updateService(id, body);
    if (!updated) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (err) {
    console.error("PUT error:", err);
    return NextResponse.json({ error: "Failed to update service" }, { status: 500 });
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
    const deleted = await deleteService(id);
    if (!deleted) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DELETE error:", err);
    return NextResponse.json({ error: "Failed to delete service" }, { status: 500 });
  }
}
