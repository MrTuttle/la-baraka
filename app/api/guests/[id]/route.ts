// app/api/guests/[id]/route.ts

import { patchUserRoomSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = patchUserRoomSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });
  const guest = await prisma.userRoom.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!guest)
    return NextResponse.json({ error: "Invalid room" }, { status: 404 });
  const updatedUserRoom = await prisma.userRoom.update({
    where: { id: guest.id },
    data: {
      firstName: body.firstName,
      name: body.name,
      email: body.email,
      phone: body.phone,
    },
  });
  return NextResponse.json(updatedUserRoom);
}

export async function DELETE(
  resquest: NextRequest,
  { params }: { params: { id: string } }
) {
  const guest = await prisma.userRoom.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!guest)
    return NextResponse.json({ error: "invalid guest" }, { status: 404 });
  // delete related images first (’cause assignedRoomId is not optionnal in schema)
  // images can't exist without room)
  // await prisma.image.deleteMany({
  //   where: { assignedToRoomId: room.id },
  // });
  // delete related dates before delete room (assignedRoomId is not optionnal in schema)
  await prisma.reservation.deleteMany({
    where: { assignedToUserRoomId: guest.id },
  });
  await prisma.userRoom.delete({
    where: {
      id: guest.id,
    },
  });
  return NextResponse.json({});
}
