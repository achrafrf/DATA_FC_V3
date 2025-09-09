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

export async function GET(req: NextRequest) {
  const services = getServices();
  const id = req.nextUrl.searchParams.get("id");
  if (id) {
    const service = services.find(s => s.id === parseInt(id));
    return NextResponse.json(service || { message: "Not found" }, { status: service ? 200 : 404 });
  }
  return NextResponse.json(services);
}

export async function POST(req: NextRequest) {
  const service: Service = await req.json();
  const services = getServices();
  service.id = services.length ? services[services.length - 1].id + 1 : 1;
  services.push(service);
  saveServices(services);
  return NextResponse.json(service);
}

export async function PUT(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ message: "ID is required" }, { status: 400 });
  const updatedService: Partial<Service> = await req.json();
  const services = getServices();
  const index = services.findIndex(s => s.id === parseInt(id));
  if (index === -1) return NextResponse.json({ message: "Not found" }, { status: 404 });
  services[index] = { ...services[index], ...updatedService };
  saveServices(services);
  return NextResponse.json(services[index]);
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ message: "ID is required" }, { status: 400 });
  let services = getServices();
  services = services.filter(s => s.id !== parseInt(id));
  saveServices(services);
  return NextResponse.json({ message: "Deleted successfully" });
}
