// app/menus/api/[id]/route.tsx

import { reservationSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = reservationSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });
  const reservation = await prisma.reservation.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!reservation)
    return NextResponse.json({ error: "Invalid reservation" }, { status: 404 });
  const updatedReservation = await prisma.reservation.update({
    where: { id: reservation.id },
    data: {
      assignedToRoomId: body.assignedToRoomId,
      assignedToUserRoomId: body.assignedToUserRoomId,
      checkIn: body.checkIn,
      checkOut: body.checkOut,
      status: body.status,
    },
  });
  return NextResponse.json(updatedReservation);
}

export async function DELETE(
  resquest: NextRequest,
  { params }: { params: { id: string } }
) {
  const reservation = await prisma.reservation.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!reservation)
    return NextResponse.json({ error: "invalid issue" }, { status: 404 });
  await prisma.reservation.delete({
    where: {
      id: reservation.id,
    },
  });
  return NextResponse.json({});
}
