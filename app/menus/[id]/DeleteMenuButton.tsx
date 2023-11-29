// app/menus/[id]/DeleteMenuButton.tsx
"use client";

// import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button, Flex, AlertDialog } from "@radix-ui/themes";
import { HiOutlineTrash } from "react-icons/hi2";

import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const DeleteMenuButton = ({ menuId }: { menuId: number }) => {
  const router = useRouter();
  return (
    // <Flex align="center" gap="1">
    //   <HiOutlineTrash />
    //   <Link href={`/menus/${menuId}/edit`}>Delete Menu</Link>
    // </Flex>
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="red">
            <HiOutlineTrash />
            Delete Menu
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you want to delete this menu. This action cannot be
            undone.
          </AlertDialog.Description>
          <Flex mt="4" gap="2">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button
                onClick={async () => {
                  await axios.delete("api/menus/" + menuId);
                  router.push("/menus");
                  router.refresh();
                }}
              >
                Ok
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteMenuButton;
