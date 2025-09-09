import { NextRequest, NextResponse } from "next/server";
import { items, Item } from "../../data/itemsData";

export async function GET() {
  return NextResponse.json(items);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const newItem: Item = { id: Date.now(), ...data };
  items.push(newItem);
  return NextResponse.json(newItem);
}

export async function PUT(req: NextRequest) {
  const data = await req.json();
  const index = items.findIndex(i => i.id === data.id);
  if (index !== -1) {
    items[index] = { ...items[index], ...data };
    return NextResponse.json(items[index]);
  }
  return NextResponse.json({ error: "Item not found" }, { status: 404 });
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get("id"));
  const index = items.findIndex(i => i.id === id);
  if (index !== -1) {
    const removed = items.splice(index, 1);
    return NextResponse.json(removed[0]);
  }
  return NextResponse.json({ error: "Item not found" }, { status: 404 });
}
