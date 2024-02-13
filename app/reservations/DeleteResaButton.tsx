// app/menus/[id]/DeleteRoomButton.tsx
"use client";
// import { Pencil2Icon } from "@radix-ui/react-icons";

import { Button, Flex, AlertDialog, Text } from "@radix-ui/themes";
import { HiOutlineTrash } from "react-icons/hi2";

import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
interface Props {
  resaId: number;
}

// const DeleteGuestButton = ({ guestId }: { guestId: number }) => {
const DeleteResaButton = ({ resaId }: Props) => {
  const router = useRouter();
  return (
    // <Link href="/chambres/new">
    //   <Flex gap="1">
    //     <HiOutlineTrash />
    //     <Text as="p" size="1">
    //       Supprimer
    //     </Text>
    //   </Flex>
    //   ;
    // </Link>
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Link href="">
          <Flex gap="1" align="center">
            <HiOutlineTrash />
            <Text as="p" size="1">
              Delete {resaId}
            </Text>
          </Flex>
        </Link>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure you want to delete this guest. This action cannot be
          undone related booking dates and images will be also deleted.{" "}
          {typeof resaId}
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
                console.log(`LOG:${resaId} type = ${typeof resaId}`);
                //=> renvois le number ok

                await axios.delete("../api/reservations/" + resaId);
                router.push("/reservations");
                router.refresh();
              }}
            >
              Ok
            </button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteResaButton;
