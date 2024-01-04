"use client";
//app/components/DialogRoomRequest/DialogRoomRequest.tsx

import * as Dialog from "@radix-ui/react-dialog";
// import { Cross2Icon } from "@radix-ui/react-icons";
import { HiMiniXMark } from "react-icons/hi2";

import "./styles.css";
import axios from "axios";

import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { roomSchema } from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Room } from "@prisma/client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";

type RoomFormData = z.infer<typeof roomSchema>;

const DialogRoomRequest = ({ room }: { room?: Room }) => {
  const name = "Fischer";
  const firstName = "Bobby";

  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RoomFormData>({
    resolver: zodResolver(roomSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      if (room) await axios.patch("/api/chambres/" + room.id, data);
      else await axios.post("/api/chambres", data);
      router.push("/chambres");
      router.refresh();
    } catch (error) {
      setSubmitting(false);
      setError("An unexpected error occurred.");
    }
  });
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className=" bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-all">
          Dialog
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Make changes to your profile here. Click save when you’re done.
          </Dialog.Description>
          {/* DEBUT */}
          <div className="max-w-xl">
            {error && (
              <Callout.Root color="red" className="mb-5">
                <Callout.Text>{error}</Callout.Text>
              </Callout.Root>
            )}
            <form className="space-y-3" onSubmit={onSubmit}>
              <TextField.Root>
                <TextField.Input
                  defaultValue={room?.title}
                  placeholder="Title"
                  {...register("title")}
                />
              </TextField.Root>
              <TextField.Root>
                <TextField.Input
                  defaultValue={room?.price}
                  placeholder="Price"
                  {...register("price", { valueAsNumber: true })}
                />
              </TextField.Root>
              <ErrorMessage>{errors.title?.message}</ErrorMessage>
              <Controller
                name="description"
                control={control}
                defaultValue={room?.description}
                render={({ field }) => (
                  <SimpleMDE placeholder="Description" {...field} />
                )}
              />
              <ErrorMessage>{errors.description?.message}</ErrorMessage>
              <Button disabled={isSubmitting}>
                {room ? "Update room" : "Submit New room"}{" "}
                {isSubmitting && <Spinner />}
              </Button>
            </form>
          </div>
          {/* FIN */}
          {/* <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              First Name
            </label>
            <input className="Input" id="name" defaultValue={name} />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Name
            </label>
            <input className="Input" id="name" defaultValue={name} />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="phone">
              Tél.
            </label>
            <input className="Input" id="username" defaultValue="06 01 02 03" />
          </fieldset> */}

          {/* <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button
                className="Button green"
                onClick={async () => {
                  console.log("BOUTON CLICK");
                  await axios.post("../api/userRooms");
                }}
              >
                Save changes
              </button>
            </Dialog.Close>
          </div> */}
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              {/* <Cross2Icon /> */}
              <HiMiniXMark />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogRoomRequest;
