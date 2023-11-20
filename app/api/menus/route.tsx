// app/api/menus/routes.tsx

import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { price: number };
}

export async function POST(
  request: NextRequest,
  { params }: { params: { price: number } }
) {
  const body = await request.json();
  const newMenu = await prisma.menu.create({
    data: {
      title: body.title,
      description: body.description,
      price: body.price,
    },
  });
  return NextResponse.json(newMenu, { status: 201 });
}
