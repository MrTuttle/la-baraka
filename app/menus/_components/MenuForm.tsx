"use client";

import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { menuSchema } from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Menu } from "@prisma/client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";
import SelectIcon from "./SelectIcon";

type MenuFormData = z.infer<typeof menuSchema>;

const MenuForm = ({ menu }: { menu?: Menu }) => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<MenuFormData>({
    resolver: zodResolver(menuSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      if (menu) await axios.patch("/api/menus/" + menu.id, data);
      else await axios.post("/api/menus", data);
      router.push("/menus");
      router.refresh();
    } catch (error) {
      setSubmitting(false);
      setError("An unexpected error occurred.");
    }
  });

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className="space-y-3" onSubmit={onSubmit}>
        <TextField.Root>
          <TextField.Input
            defaultValue={menu?.title}
            placeholder="Title"
            {...register("title")}
          />
        </TextField.Root>
        <TextField.Root>
          <TextField.Input
            defaultValue={menu?.price}
            placeholder="Price"
            {...register("price", { valueAsNumber: true })}
          />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          defaultValue={menu?.description}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting}>
          {menu ? "Update menu" : "Submit New menu"}{" "}
          {isSubmitting && <Spinner />}
        </Button>
      </form>
      <SelectIcon />
    </div>
  );
};

export default MenuForm;
