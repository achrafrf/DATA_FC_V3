import { NextRequest, NextResponse } from "next/server";
import db from "../../../../prisma/client";

export async function POST(request:NextRequest) {
    const body =await request.json()

    const newContact = await db.contact.create({
        data:{
            ...body
        }
    })
    return NextResponse.json(newContact,{status:201})
}

export async function GET() {
    const contacts = await db.contact.findMany();
    return NextResponse.json(contacts, { status: 201 });
  }