// app/api/menus/routes.tsx

import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newImage = await prisma.image.create({
    data: {
      publicId: body.publicId,
      alt: body.alt,
      assignedToRoomId: body.assignedToRoomId,
    },
  });
  return NextResponse.json(newImage, { status: 201 });
}