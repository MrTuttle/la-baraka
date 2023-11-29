// app/menus/api/[id]/route.tsx

import { menuSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = menuSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });
  const menu = await prisma.menu.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!menu)
    return NextResponse.json({ error: "Invalid menu" }, { status: 404 });
  const updatedMenu = await prisma.menu.update({
    where: { id: menu.id },
    data: {
      title: body.title,
      description: body.description,
    },
  });
  return NextResponse.json(updatedMenu);
}

export async function DELETE(
  resquest: NextRequest,
  { params }: { params: { id: string } }
) {
  const menu = await prisma.menu.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!menu)
    return NextResponse.json({ error: "invalid issue" }, { status: 404 });
  await prisma.menu.delete({
    where: {
      id: menu.id,
    },
  });
  return NextResponse.json({});
}
