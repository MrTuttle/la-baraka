"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, TextField } from "@radix-ui/themes";
import GetRooms from "./GetRooms";

interface ImageForm {
  publicId: string;
  alt: string;
  assignedToRoomId: number | null;
}
interface Rooms {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
interface List {
  listRooms: Rooms[];
}

const AssignImgForm = ({ listRooms }: List) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  // const list = [14, 18];
  return (
    <>
      <section className="mx-4">
        <form
          className="max-w-lg space-y-3"
          onSubmit={handleSubmit(async (data) => {
            axios.post("/api/images", data);
            router.push("/images");
            router.refresh();
          })}
        >
          <TextField.Root>
            <TextField.Input
              placeholder="publicId"
              {...register("publicId")}
            ></TextField.Input>
          </TextField.Root>
          <TextField.Root>
            <TextField.Input
              placeholder="Alt"
              {...register("alt")}
            ></TextField.Input>
          </TextField.Root>
          {/* <TextField.Root>
            <TextField.Input
              placeholder="assignedToRoomId"
              {...register("assignedToRoomId", { valueAsNumber: true })}
            ></TextField.Input>
          </TextField.Root> */}
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              {...register("assignedToRoomId", { valueAsNumber: true })}
            >
              {listRooms.map((room, index) => (
                <option key={index}>{room.id}</option>
              ))}
              {/* <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option> */}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <Button>Ajouter l’image</Button>
        </form>
      </section>
    </>
  );
};

export default AssignImgForm;
