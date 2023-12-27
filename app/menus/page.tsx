import prisma from "@/prisma/client";
import { Box, Button, Card, Flex, Link, Text } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";
import EdditMenuButton from "./EditMenuButton";

import DeleteMenuButton from "./[id]/DeleteMenuButton";

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
      <div className="mx-4 pt-20">
        <Link href="menus/new">
          <Button>Créer un nouveau menu</Button>
        </Link>

        {menus.map((menu) => (
          <Card key={menu.id} className="prose" mt="4">
            <Flex align="center" justify="between">
              <Text size="1" weight="bold">
                id : {menu.id}
              </Text>
              <DeleteMenuButton menuId={menu.id} />
              <EdditMenuButton menuId={menu.id} />
            </Flex>
            <Text size="6" weight="light" key={menu.id}>
              {menu.title}
              {menu.price > 0 && " - " + menu.price + " €"}
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
