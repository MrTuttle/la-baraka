import prisma from "@/prisma/client";
import { Button, Card, Link, Text } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import MenuSwiper from "../components/swiper/MenuSwiper";

interface Menu {
  title: string;
  description: string;
  id: number;
}

const menusPage = async () => {
  const menus = await prisma.menu.findMany();
  const menuslist = [{}];
  const pushMenuList = () => {
    menus.map((menu) => menuslist.push(menu));
    console.log("la baraka :");

    // console.log(menuslist);
    // console.log("title :" + menuslist[2].title);
    // Menu d'hiver => yes it's works => should pass as props to swiper component
  };
  pushMenuList();
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
      <MenuSwiper menuslist={menuslist} />
    </>
  );
};
export const revalidate = 0;

export default menusPage;
