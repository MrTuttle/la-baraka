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
      <div>menusPage</div>
      <Card className="prose" mt="4">
        {menus.map((menu) => (
          <>
            <Text size="6" weight="light" key={menu.id}>
              {menu.title}
            </Text>
            <ReactMarkdown key={menu.id}>{menu.description}</ReactMarkdown>
          </>
        ))}
      </Card>
    </>
  );
};

export default menusPage;
