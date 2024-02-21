import prisma from "@/prisma/client";
import { Box, Button, Card, Flex, Link, Section, Text } from "@radix-ui/themes";
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
      <Section className="mx-4 pt-20">
        <div className="sm:w-8/12 lg:w-6/12  mx-auto p-8">
          <h1 className="text-2xl">Menu page</h1>
          <p className=" font-semibold">What should’you do here ?</p>
          <ul className=" list-disc list-inside py-4">
            <li>See all menus</li>
            <li>Create a menu</li>
            <li>Modify a menu</li>
            <li>Delete a menu</li>
          </ul>
        </div>

        <div className="px-4 flex flex-col gap-3 justify-end flex-wrap">
          <div className="pb-3 w-full sm:w-8/12 lg:w-6/12  mx-auto">
            <Link href="menus/new">
              <Button>Créer un nouveau menu</Button>
            </Link>
          </div>
        </div>

        <div className="px-4 flex flex-col gap-3 justify-center flex-wrap">
          {menus.map((menu) => (
            <div
              key={menu.id}
              className="pb-3 w-full sm:w-8/12 lg:w-6/12  mx-auto border rounded p-8"
            >
              <div className="flex flex-wrap -mx-3 mb-6 justify-between">
                <div className=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Menu n° {menu.id}
                </div>
                <div className="flex gap-4">
                  <EdditMenuButton menuId={menu.id} />
                  <DeleteMenuButton menuId={menu.id} />
                </div>
              </div>
              {/* <DeleteMenuButton menuId={menu.id} /> */}
              {/* <EdditMenuButton menuId={menu.id} /> */}
              <div className="flex flex-col gap-2">
                <ul>
                  <li>
                    <strong>Intitulé : </strong>
                    {menu.title}
                  </li>
                  <li>
                    <strong>Prix : </strong>
                    {menu.price > 0 ? `${menu.price} €` : "non renseigné"}
                    {/* {menu.price > 0 && " - " + menu.price + " €"} */}
                  </li>
                  <li>
                    <strong>Description : </strong>
                  </li>
                </ul>

                <ReactMarkdown className="p-4 bg-gray-100 rounded">
                  {menu.description}
                </ReactMarkdown>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};
export const revalidate = 0;

export default menusPage;
