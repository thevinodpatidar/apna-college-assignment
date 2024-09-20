// pages/api/topics/index.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await prisma.category.findMany({});
    console.log(categories);
    return NextResponse.json(
      {
        success: true,
        message: "Categories fetched successfully!",
        data: categories,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error fetching categories" },
      { status: 500 }
    );
  }
}
