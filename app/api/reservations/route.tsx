// app/api/reservations/routes.tsx

import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newDate = await prisma.reservation.create({
    data: {
      date: body.date,
      assignedToRoomId: body.assignedToRoomId,
      assignedToUserRoomId: body.assignedToUserRoomId,
    },
  });
  return NextResponse.json(newDate, { status: 201 });
}
