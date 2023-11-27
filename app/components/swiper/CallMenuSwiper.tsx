import prisma from "@/prisma/client";
import React from "react";

import MenuSwiper from "./MenuSwiper";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "./styles.css";
// import "@/app/components/swiper/style.css";

// import required modules
// import { Pagination } from "swiper/modules";

const CallMenuSwiper = async () => {
  const menus = await prisma.menu.findMany();
  // menus.map((menu) => console.log(`Menu title : ${menu.title}`));
  //=> liste des menus

  const menulisttable = [{}];

  const pushMenuList = (menuslist: object[]) => {
    menus.map((menu) => menulisttable.push(menu));
    // console.log("la barake push II :");
    // console.log("title :" + menuslist[2].title);
  };
  pushMenuList(menus);
  // console.log(menulisttable);

  return <MenuSwiper list={menus} />;
};

export default CallMenuSwiper;
