import prisma from "@/prisma/client";
import { Box, Button, Card, Link, Text } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";
import EdditMenuButton from "./EditMenuButton";

import MenuSwiper from "../components/swiper/MenuSwiper";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import "@/app/components/swiper/style.css";

// import required modules
import { Pagination } from "swiper/modules";

// interface Props {
//   title: string;
//   description: string;
//   id: number;
// }
// interface Props {
//   menuslist: [
//     {
//       title: string;
//       id: number;
//       description: string;
//       price: number | null;
//     }
//   ];
// }

const menusPage = async () => {
  const menus = await prisma.menu.findMany();
  // menus.map((menu) => console.log(`Menu title : ${menu.title}`));
  //=> liste des menus
  const menupack = [{}];

  const pushMenuList = (menuslist: object[]) => {
    delete menupack[0];
    menus.map((menu) => menupack.push(menu));
    console.log("la baraka push :");

    // console.log("title :" + menuslist[2].title);
    // Menu d'hiver => yes it's works => should pass as props to swiper component
  };
  pushMenuList(menus);
  console.log(menupack);

  // PATCH

  return (
    <>
      <div className="mx-4">
        <div>Menus</div>
        <Link href="menus/new">
          <Button>Créer un nouveau menu</Button>
        </Link>

        {menus.map((menu) => (
          <Card key={menu.id} className="prose" mt="4">
            <Box>
              <EdditMenuButton menuId={menu.id} />
            </Box>
            <Text size="6" weight="light" key={menu.id}>
              {menu.title} - {menu.price}€
            </Text>
            <ReactMarkdown>{menu.description}</ReactMarkdown>
          </Card>
        ))}
      </div>
      <MenuSwiper list={menus} />
    </>
  );
};
export const revalidate = 0;

export default menusPage;
