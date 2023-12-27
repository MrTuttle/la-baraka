import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import MenuFormSkeleton from "@/app/menus/_components/MenuFormSkeleton";

const MenuForm = dynamic(() => import("@/app/menus/_components/MenuForm"), {
  ssr: false,
  loading: () => <MenuFormSkeleton />,
});

interface Props {
  params: { id: string };
}

const EditMenuPage = async ({ params }: Props) => {
  const menu = await prisma.menu.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!menu) notFound();

  return (
    <div className="mx-4">
      <MenuForm menu={menu} />
    </div>
  );
};

export default EditMenuPage;
