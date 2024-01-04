// app/menus/[id]/SendBookingButton.tsx
"use client";
// import { Pencil2Icon } from "@radix-ui/react-icons";

import { Button, Flex, AlertDialog, Text } from "@radix-ui/themes";
import { HiOutlineTrash } from "react-icons/hi2";

import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

// { title }: { title: string }
// { roomId }: { roomId: number }
interface Props {
  title: string;
  roomId: number;
}

const SendBookingButton = ({ title, roomId }: Props) => {
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
            <button className=" bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-all">
              Reserver
            </button>
            {/* <Text as="p" size="1">
              Reserver (send booking button)
            </Text> */}
          </Flex>
        </Link>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Confirm Sending id:{roomId}</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure you want to book this room - {title}- . This action
          cannot be undone related booking dates and images will be also
          deleted.
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
                console.log("SendBookingButton :");

                console.log(`LOG:${title} type = ${typeof title}`);
                //=> renvois le number ok

                await axios.post("../api/send-email");
                router.back();
                // router.push("/send-email");
                // router.refresh();
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

export default SendBookingButton;
