import prisma from "@/prisma/client";
import { UserRoom } from "@prisma/client";
// import UserRooms from "@/app/types/userRoom"

export default async function DeleteUserRoom(id: number) {
  "use server";

  await prisma.userRoom.delete({
    where: { id: id },
  });
  //  const handleClick = (id: number) => {
  //    guestToDelete();
  //  };

  // console.log("getUserRoom Launched : ", findUserRooms);
}
