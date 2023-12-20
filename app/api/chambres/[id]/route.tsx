// app/chambres/api/[id]/route.tsx

import { menuSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

// export async function PATCH(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   const body = await request.json();
//   const validation = roomSchema.safeParse(body);
//   if (!validation.success)
//     return NextResponse.json(validation.error.format(), { status: 400 });
//   const menu = await prisma.menu.findUnique({
//     where: {
//       id: parseInt(params.id),
//     },
//   });
//   if (!menu)
//     return NextResponse.json({ error: "Invalid room" }, { status: 404 });
//   const updatedMenu = await prisma.menu.update({
//     where: { id: menu.id },
//     data: {
//       title: body.title,
//       description: body.description,
//     },
//   });
//   return NextResponse.json(updatedMenu);
// }

export async function DELETE(
  resquest: NextRequest,
  { params }: { params: { id: string } }
) {
  const room = await prisma.room.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!room)
    return NextResponse.json({ error: "invalid room" }, { status: 404 });
  // delete related images first (assignedRoomId is not optionnal in schema)
  await prisma.image.deleteMany({
    where: { assignedToRoomId: room.id },
  });
  // delete related dates before delete room (assignedRoomId is not optionnal in schema)
  await prisma.reservation.deleteMany({
    where: { assignedToRoomId: room.id },
  });
  await prisma.room.delete({
    where: {
      id: room.id,
    },
  });
  return NextResponse.json({});
}
