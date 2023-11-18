import prisma from "@/prisma/client";
import { Card, Text } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";

interface Menu {
  title: string;
  description: string;
  id: number;
}

const menusPage = async () => {
  const menus = await prisma.menu.findMany();
  return (
    <>
      <div>Menus</div>

      {menus.map((menu) => (
        <Card key={menu.id} className="prose" mt="4">
          <Text size="6" weight="light" key={menu.id}>
            {menu.title}
          </Text>
          <ReactMarkdown>{menu.description}</ReactMarkdown>
        </Card>
      ))}
    </>
  );
};

export default menusPage;
