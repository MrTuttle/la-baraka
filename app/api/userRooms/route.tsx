// app/api/userRooms/routes.tsx

import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newUserRoom = await prisma.userRoom.create({
    data: {
      name: body.name,
      firstName: body.firstName,
      email: body.email,
      phone: body.phone,
      emailVerified: body.emailVerified,
      // reservationDates: {
      //   date: body.date,
      // },
    },
  });
  return NextResponse.json(newUserRoom, { status: 201 });
}
