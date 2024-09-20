// pages/api/topics/index.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const topics = await prisma.topic.findMany({
      include: {
        tags: true,
        authors: true,
        chapters: true,
        categories: true,
      },
    });
    console.log(topics);
    return NextResponse.json(
      {
        success: true,
        message: "Topics fetched successfully!",
        data: topics,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error fetching topics" },
      { status: 500 }
    );
  }
}
