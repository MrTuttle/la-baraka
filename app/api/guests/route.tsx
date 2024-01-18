import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { userRoomSchema } from "@/app/validationSchema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = userRoomSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const newUserRoom = await prisma.userRoom.create({
    data: {
      firstName: body.firstName,
      name: body.name,
      email: body.email,
      phone: body.phone,
    },
    // include: {
    //   reservationDates: true
    // }
  });
  return NextResponse.json(newUserRoom, { status: 201 });
}
