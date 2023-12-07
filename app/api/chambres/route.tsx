// app/api/chambres/route.tsx

import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createRoomSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createRoomSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const newRoom = await prisma.room.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });
  return NextResponse.json(newRoom, { status: 201 });
}

export async function GET(request: NextRequest) {
  const users = await prisma.room.findMany({ orderBy: { title: "asc" } });
  return NextResponse.json(users);
}
// => ok in postman : GET http://localhost:3000/api/chambres + empty body
