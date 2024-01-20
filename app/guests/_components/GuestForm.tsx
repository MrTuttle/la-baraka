"use client";

import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { patchUserRoomSchema, userRoomSchema } from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Reservation, UserRoom } from "@prisma/client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";

type GuestFormData = z.infer<typeof patchUserRoomSchema>;

const GuestForm = ({ guest }: { guest?: UserRoom }) =>
  // { reservationDates }: { reservationDates: Reservation }
  {
    const router = useRouter();
    const {
      register,
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<GuestFormData>({
      resolver: zodResolver(userRoomSchema),
    });
    const [error, setError] = useState("");
    const [isSubmitting, setSubmitting] = useState(false);

    const onSubmit = handleSubmit(async (data) => {
      try {
        setSubmitting(true);
        if (guest) await axios.patch("/api/guests/" + guest.id, data);
        else await axios.post("/api/guests", data);
        router.push("/guests");
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
              defaultValue={guest?.firstName!}
              placeholder="First Name"
              {...register("firstName")}
            />
          </TextField.Root>
          <TextField.Root>
            <TextField.Input
              defaultValue={guest?.name!}
              placeholder="Name"
              {...register("name")}
            />
          </TextField.Root>
          <ErrorMessage>{errors.phone?.message}</ErrorMessage>
          <TextField.Root>
            <TextField.Input
              defaultValue={guest?.email!}
              placeholder="Email"
              {...register("email")}
            />
          </TextField.Root>
          <TextField.Root>
            <TextField.Input
              defaultValue={guest?.phone}
              placeholder="Phone"
              {...register("phone")}
            />
          </TextField.Root>

          <Button disabled={isSubmitting}>
            {guest ? "Update guest" : "Submit New guest"}{" "}
            {isSubmitting && <Spinner />}
          </Button>
        </form>
      </div>
    );
  };

export default GuestForm;
