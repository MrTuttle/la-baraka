import prisma from "@/prisma/client";
import { UserRoom } from "@prisma/client";
// import UserRooms from "@/app/types/userRoom"

export default async function getUserRooms() {
  "use server";
  const guests = await prisma.userRoom.findMany();
  console.log("guests type : ", typeof guests);

  return guests;
  // console.log("getUserRoom Launched : ", findUserRooms);
}
