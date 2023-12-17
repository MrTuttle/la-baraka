import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

interface Image {
  publicId: string;
  alt: string;
  assignedToRoomId: number | null;
}

export const Postimages = async (data: String) => {
  const router = useRouter();
  axios.post("/api/images", data);
  router.push("/images");
  router.refresh();
  console.log("DATA");
  console.log(data);
};
