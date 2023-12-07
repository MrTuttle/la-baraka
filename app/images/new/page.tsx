import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, TextField } from "@radix-ui/themes";
import AssignImgForm from "@/app/components/AssignImgForm";
import GetRooms from "@/app/components/GetRooms";

interface ImageForm {
  publicId: string;
  alt: string;
  assignedToRoomId: number | null;
}

const NewImagePage = () => {
  return (
    <>
      <GetRooms />
    </>
  );
};

export default NewImagePage;
