// app/api/chambres/route.tsx

import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { eventSchema } from "@/app/validationSchema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = eventSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const newRoom = await prisma.room.create({
    data: {
      title: body.title,
      description: body.description,
      price: body.price,
    },
  });
  return NextResponse.json(newRoom, { status: 201 });
}

// export async function GET(request: NextRequest) {
//   const users = await prisma.room.findMany({ orderBy: { title: "asc" } });
//   return NextResponse.json(users);
// }
// => ok in postman : GET http://localhost:3000/api/chambres + empty body
