// app/component/AssignImgForm.tsx
// this form receives data when he is placed in GetRooms "server component"
// use this to link images with rooms id
"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import axios from "axios";
import { Button, Checkbox, Flex, Text, TextField } from "@radix-ui/themes";
import GetRooms from "./GetRooms";
import { CheckboxForAll } from "./CheckBoxForAll";
import UploadWidget from "./UploadWidget";

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
  const { register, handleSubmit, formState } = useForm();
  const [data, setData] = useState("");
  const onSubmit = (data: Rooms) => console.log(data);
  // console.log(errors);
  // const checkboxRef = useRef(null);
  // const list = [14, 18];
  const [getPublicId, setGetPublicId] = useState("");
  const handleOnSuccess = (publicId: string) => {
    console.log("PUBLIC ID HANDLE", publicId);
    setGetPublicId(publicId);
  };

  return (
    <>
      <section className="mx-4 my-4">
        <UploadWidget onSuccess={handleOnSuccess} public_id="" />
      </section>
      <section className="mx-4 my-4">
        <p>{getPublicId}</p>
        <form
          className="max-w-lg space-y-3"
          onSubmit={handleSubmit(async (data) => {
            axios.post("/api/images", data);
            router.push("/images");
            router.refresh();
            // console.log("DATAS :");
            // console.log(data);
          })}
        >
          <TextField.Root>
            <TextField.Input
              type="text"
              placeholder="public id a coller ici"
              defaultValue={getPublicId.toString()}
              {...register("publicId", {})}
            ></TextField.Input>
          </TextField.Root>
          <TextField.Root>
            <TextField.Input
              type="text"
              placeholder="alt"
              {...register("alt", {})}
            ></TextField.Input>
          </TextField.Root>
          <Flex align="center">
            <input
              type="checkbox"
              placeholder="cover"
              {...register("cover", {})}
            />
            <label className="pl-2">Image de couverture</label>
          </Flex>

          <div className="relative">
            <p>Assignez un numéro de chambre a cette image :</p>
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              {...register("assignedToRoomId", { valueAsNumber: true })}
            >
              {listRooms.map((room, index) => (
                <option key={index}>{room.id}</option>
              ))}
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
          {/* <input type="submit" /> */}

          <Button>Assigner l’image</Button>
        </form>
      </section>
    </>
  );
};
export const revalidate = 0;

export default AssignImgForm;
