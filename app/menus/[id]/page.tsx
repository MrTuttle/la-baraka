//app/menus/[id]/page.tsx

import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const MenuDetailPage = async ({ params }: Props) => {
  // if (typeof params.id !== "string") notFound();
  // if (typeof params.id !== "number") notFound();
  const menu = await prisma.menu.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!menu) notFound();
  return (
    <div className="mx-4">
      <h1>Detail Menu</h1>
      <p>Id: {menu.id}</p>
      <p>createdAt: {menu.createdAt.toDateString()}</p>
      <p>updatedAt: {menu.updatedAt.toDateString()}</p>
      <p>title: {menu.title}</p>
      <p>description: {menu.description}</p>
      <p>price: {menu.price}</p>
    </div>
  );
};

export default MenuDetailPage;
