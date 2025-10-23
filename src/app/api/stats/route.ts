import { NextRequest, NextResponse } from "next/server"
import { getStats, updateStats } from "@/lib/db"

// GET stats
export async function GET() {
  try {
    const stats = await getStats()
    return NextResponse.json(stats)
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", details: (error as Error).message },
      { status: 500 }
    );
  }
}

// UPDATE stats
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();

    if (
      typeof body.experienceYears !== "number" ||
      typeof body.successfulProjects !== "number" ||
      typeof body.happyClients !== "number"
    ) {
      return NextResponse.json(
        { error: "Invalid or missing stats fields" },
        { status: 400 }
      );
    }

    await updateStats(body);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating stats:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: (error as Error).message },
      { status: 500 }
    );
  }
}
