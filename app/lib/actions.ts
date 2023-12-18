"use server";

import prisma from "@/prisma/client";
import { z } from "zod";
const FormSchema = z.object({
  publicId: z.string(),
  alt: z.string(),
  cover: z.boolean(),
  assignedToRoomId: z.number(),
});

export async function createImage(formData: FormData) {
  const rawFormData = {
    publicId: formData.get("publicId"),
    alt: formData.get("alt"),
    cover: formData.get("cover"),
    assignedRoomId: formData.get("assignedRoom"),
  };
  console.log("raw form data :");
  console.log(rawFormData);
  console.log(typeof rawFormData.publicId);
  console.log(typeof rawFormData.alt);
  console.log(typeof rawFormData.cover);
  console.log(typeof rawFormData.assignedRoomId);
}

export async function getRooms() {
  const rooms = await prisma.room.findMany();
  console.log("GET ROOMS FUNCTION :");

  console.log(rooms);
  console.log(typeof rooms[1].title);
  return rooms;
}
