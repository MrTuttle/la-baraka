import prisma from "@/prisma/client";
import { Button, Card, Link, Text } from "@radix-ui/themes";
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
      <div className="mx-4">
        <div>Menus</div>
        <Link href="menus/new">
          <Button>Créer un nouveau menu</Button>
        </Link>

        {menus.map((menu) => (
          <Card key={menu.id} className="prose" mt="4">
            <Text size="6" weight="light" key={menu.id}>
              {menu.title} - {menu.price}€
            </Text>
            <ReactMarkdown>{menu.description}</ReactMarkdown>
          </Card>
        ))}
      </div>
    </>
  );
};
export const revalidate = 0;

export default menusPage;
