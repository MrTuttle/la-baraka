// app/menus/EdditMenuButton.tsx

// import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button, Flex } from "@radix-ui/themes";
import { HiOutlinePencilSquare } from "react-icons/hi2";

import Link from "next/link";

const EdditMenuButton = ({ menuId }: { menuId: number }) => {
  return (
    <div className="flex gap-1 hover:text-blue-600">
      <HiOutlinePencilSquare />
      <Link href={`/menus/edit/${menuId}`} className=" text-xs">
        Edit Menu
      </Link>
    </div>
  );
};

export default EdditMenuButton;
