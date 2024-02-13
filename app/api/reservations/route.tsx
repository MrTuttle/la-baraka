// app/api/reservations/routes.tsx

import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newDate = await prisma.reservation.create({
    data: {
      checkIn: body.checkIn,
      checkOut: body.checkOut,
      assignedToRoomId: body.assignedToRoomId,
      assignedToUserRoomId: body.assignedToUserRoomId,
      status: body.status,
    },
  });
  return NextResponse.json(newDate, { status: 201 });
}
