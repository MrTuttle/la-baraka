// app/menus/api/[id]/route.tsx

import { patchReservationSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

// code light (trop permissif), mais permet de passer les dates en type string pour ResaFormm.tsx
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const reservation = await prisma.reservation.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  // if (reservation)
  //   return NextResponse.json(reservation.error.format(), {status: 400})

  const updatedReservation = await prisma.reservation.update({
    where: { id: reservation?.id },
    data: {
      checkIn: body.checkIn,
      checkOut: body.checkOut,
      assignedToRoomId: body.assignedToRoomId,
      assignedToUserRoomId: body.assignedToUserRoomId,
      status: body.status,
    },
  });
  return NextResponse.json(updatedReservation, { status: 201 });
}

// code plus sophistiqué, les dates doivent être passées type Date,
// ce qui fait échouer Resaformm.tsx

// export async function PATCH(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   const body = await request.json();
//   const validation = patchReservationSchema.safeParse(body);
//   if (!validation.success)
//     return NextResponse.json(validation.error.format(), { status: 400 });
//   const reservation = await prisma.reservation.findUnique({
//     where: {
//       id: parseInt(params.id),
//     },
//   });
//   if (!reservation)
//     return NextResponse.json({ error: "Invalid reservation" }, { status: 404 });
//   const updatedReservation = await prisma.reservation.update({
//     where: { id: reservation.id },
//     data: {
//       assignedToRoomId: body.assignedToRoomId,
//       assignedToUserRoomId: body.assignedToUserRoomId,
//       checkIn: body.checkIn,
//       checkOut: body.checkOut,
//       status: body.status,
//     },
//   });
//   return NextResponse.json(updatedReservation);
// }

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
