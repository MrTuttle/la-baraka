"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { Button, TextField } from "@radix-ui/themes";
import prisma from "@/prisma/client";

interface ImageForm {
  publicId: string;
  alt: string;
  assignedToRoomId: number | null;
}

const NewImagePage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
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
          <TextField.Root>
            <TextField.Input
              placeholder="assignedToRoomId"
              {...register("assignedToRoomId", { valueAsNumber: true })}
            ></TextField.Input>
          </TextField.Root>
          <Button>Ajouter l’image</Button>
        </form>
      </section>
    </>
  );
};

export default NewImagePage;
