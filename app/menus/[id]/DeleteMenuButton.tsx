// app/menus/[id]/DeleteMenuButton.tsx
"use client";

// import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button, Flex, AlertDialog, Text } from "@radix-ui/themes";
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
          <Link href="">
            <Flex gap="1" align="center">
              <HiOutlineTrash />
              <Text as="p" size="1">
                Delete Menu
              </Text>
            </Flex>
          </Link>
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
              <button
                onClick={async () => {
                  await axios.delete("api/menus/" + menuId);
                  router.push("/menus");
                  router.refresh();
                }}
              >
                Ok
              </button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteMenuButton;
