// app/menus/[id]/edit/page.tsx

import React from "react";
// import IssueForm from "../../_components/IssueForm";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import MenuForm from "../../components/MenuForm";
// import MenuForm from "@/app/components/MenuForm";

interface Props {
  params: { id: string };
}

const EditMenuPage = async ({ params }: Props) => {
  const menu = await prisma.menu.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!menu) notFound();

  return <MenuForm menu={menu} />;
};

export default EditMenuPage;
