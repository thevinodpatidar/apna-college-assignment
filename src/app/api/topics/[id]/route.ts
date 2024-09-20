// pages/api/topics/[id].ts

import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  try {
    const topic = await prisma.topic.findUnique({
      where: { id: String(id) },
      include: {
        chapters: {
          include: {
            problems: true,
          },
        },
      },
    });

    if (!topic) {
      return NextResponse.json({ message: "Topic not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Topic fetched successfully!",
        data: topic,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error fetching topic" },
      { status: 500 }
    );
  }
}
