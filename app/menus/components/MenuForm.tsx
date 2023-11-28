// app/menus/components/MenuForm.tsx

"use client";
import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchema";
import z from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { Menu } from "@prisma/client";

type MenuFormData = z.infer<typeof createIssueSchema>;

// issue?: -> optional props typed in Issue by prisma, only needed on edit page
// interface bloc is factorized inline
// interface Props {
//   issue?: Issue;
// }

const MenuForm = ({ menu }: { menu?: Menu }) => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<MenuFormData>({
    resolver: zodResolver(createIssueSchema),
  });
  // console.log(register("title"));
  // register return props that we should apply to an input field to track changes

  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      await axios.post("/api/menus", data);
      router.push("/menus");
    } catch (error) {
      setSubmitting(false);
      // console.log(error);
      setError("An unexpected error occured");
    }
  });

  return (
    <div className=" max-w-lg ">
      {error && (
        <Callout.Root color="red" className="mb-3">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className="space-y-3" onSubmit={onSubmit}>
        <TextField.Root>
          <TextField.Input
            defaultValue={menu?.title}
            placeholder="Title"
            {...register("title")}
          ></TextField.Input>
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          defaultValue={menu?.description}
          render={({ field }) => (
            <SimpleMDE placeholder="description" {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <Button disabled={isSubmitting}>
          Submit New menu
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default MenuForm;
