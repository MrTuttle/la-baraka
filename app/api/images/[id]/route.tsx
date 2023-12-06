// app/chambres/api/[id]/route.tsx

import { menuSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  resquest: NextRequest,
  { params }: { params: { id: string } }
) {
  const image = await prisma.image.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!image)
    return NextResponse.json({ error: "invalid image" }, { status: 404 });
  await prisma.image.delete({
    where: {
      id: image.id,
    },
  });
  return NextResponse.json({});
}
