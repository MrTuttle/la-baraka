// app/component/AssignImgForm.tsx
// this form receives data when he is placed in GetRooms "server component"
// use this to link images with rooms id
"use client";
import React, { useRef, useState } from "react";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { Image, Room } from "@prisma/client";

import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import {
  Button,
  Callout,
  Checkbox,
  Flex,
  Text,
  TextField,
} from "@radix-ui/themes";
import GetRooms from "./GetRooms";
import { CheckboxForAll } from "./CheckBoxForAll";
import UploadWidget from "./UploadWidget";
import { imageSchema } from "@/app/validationSchema";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type TypeImageFormData = z.infer<typeof imageSchema>;
// interface ImageForm {
//   publicId: string;
//   alt: string;
//   assignedToRoomId: number | null;
// }
interface Rooms {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  price: number;
}
interface List {
  listRooms: Rooms[];
}

const AssignImgForm = (
  { listRooms }: { listRooms: Rooms[] },
  { image }: { image?: Image }
) =>
  // { image }: { image?: Image },
  {
    const router = useRouter();
    const {
      register,
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<TypeImageFormData>({
      resolver: zodResolver(imageSchema),
    });
    const [error, setError] = useState("");
    console.log(
      "LISTROOM",
      listRooms.map((e) => e.id)
    );

    const onSubmite = (data: Rooms) => console.log(data);
    // console.log(errors);
    // const checkboxRef = useRef(null);

    // --------- A CONSERVER ------------- //
    // DYNAMIC PUBLICID VALUE FROM UPLOADWIDGET
    const [getPublicId, setGetPublicId] = useState("");
    const handleOnSuccess = (publicId: string) => {
      console.log("PUBLIC ID HANDLE", publicId);
      setGetPublicId(publicId);
    };
    // END

    // STATIC PUBLICID VALUE FOR TESTS - to replace DYNAMIC PUBLICID VALUE FROM UPLOADWIDGET
    // const getPublicId: string = "cawdvxo81d8uulerrsrf";
    // END (instead uncomment DYNAMIC PUBLICID for prod)
    //------------------------------------//

    const [isSubmitting, setSubmitting] = useState(false);

    const onSubmit = handleSubmit(async (data) => {
      try {
        setSubmitting(true);
        if (image) await axios.patch("" + image.id, data);
        else await axios.post("/api/images", data);

        router.push("/images");
        router.refresh();
        // console.log("DATAS :");
        // console.log(data);
      } catch (error) {
        setSubmitting(false);
        setError("An unexpected error occurred.");
      }
    });

    return (
      <>
        <section className="mx-4 my-4">
          <UploadWidget onSuccess={handleOnSuccess} public_id="" />
        </section>
        <section className="mx-4 my-4">
          <p>{getPublicId}</p>
          {error && (
            <Callout.Root color="red" className="mb-5">
              <Callout.Text>{error}</Callout.Text>
            </Callout.Root>
          )}
          <form className="max-w-lg space-y-3" onSubmit={onSubmit}>
            <TextField.Root>
              <TextField.Input
                placeholder="publicId"
                defaultValue={getPublicId}
                {...register("publicId")}
              ></TextField.Input>
            </TextField.Root>
            <TextField.Root>
              <TextField.Input
                defaultValue={image?.alt}
                placeholder="alt"
                {...register("alt")}
              ></TextField.Input>
            </TextField.Root>
            {/* <Flex>
              <CheckboxForAll defaultState={false}></CheckboxForAll>
            </Flex> */}
            <Flex align="center">
              <input
                type="checkbox"
                defaultChecked={image?.cover}
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
                defaultValue={image?.assignedToRoomId}
                placeholder="assignedToRoomId"
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

            <Button disabled={isSubmitting}>
              {image ? "Update image" : "Submit image"}{" "}
              {isSubmitting && <Spinner />}
            </Button>
          </form>
        </section>
      </>
    );
  };
export const revalidate = 0;

export default AssignImgForm;
