// app/menus/EdditMenuButton.tsx

// import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button, Flex } from "@radix-ui/themes";
import { HiOutlinePencilSquare } from "react-icons/hi2";

import Link from "next/link";

const EdditMenuButton = ({ menuId }: { menuId: number }) => {
  return (
    <Flex align="center" gap="1">
      <HiOutlinePencilSquare />
      <Link href={`/menus/${menuId}/edit`}>Edit Menu</Link>
    </Flex>
  );
};

export default EdditMenuButton;
