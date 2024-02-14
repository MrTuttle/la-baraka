"use client";

import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { patchReservationSchema } from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Reservation, Room } from "@prisma/client";
import { Button, Callout, TextField, TextFieldRoot } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { FormEvent, FormHTMLAttributes, useState } from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";
import Form from "@/app/components/rFforms/Form";
import { Input } from "@/app/components/rFforms/Input";
import { Select } from "@/app/components/rFforms/Select";
import { FormStatus } from "react-dom";

type ResaFormData = z.infer<typeof patchReservationSchema>;

const ResaForm = ({ resa }: { resa: Reservation }) => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ResaFormData>({
    resolver: zodResolver(patchReservationSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      if (resa) await axios.patch("/api/reservations/" + resa.id, data);
      else await axios.post("/api/reservations", data);
      router.push("/reservations");
      router.refresh();
    } catch (error) {
      setSubmitting(false);
      setError("An unexpected error occurred.");
    }
  });
  // melvin

  // const handleuSubmit = (e: FormEvent) => {
  //   console.log("e TARGET :", e.target);

  //   e.preventDefault();
  //   const form = e.target;
  //   const formData = new FormData(form);
  //   const checkIn = formData.get("checkIn");
  //   const checkOut = formData.get("checkOut");
  //   const assignedToRoomId = formData.get("assignedToRoomId");
  //   form.reset();
  //   alert(`checkIn : ${checkIn}`);
  //   alert(`CLIK`);
  // };
  // melvin end

  const stat = () => {
    if (!resa!.status) <p>ok : {resa!.status}</p>;
  };
  console.log("START :", stat());

  return (
    <>
      <h1>Form 0 | step by step</h1>
      {resa.status === undefined ? (
        <p>no</p>
      ) : (
        <p> yes I have a satus : {resa?.status}</p>
      )}
      {/* affiche VACANT OK, but typescript doesn't like it */}
      {resa!.status && <p>I swear i have a status : {resa?.status}</p>}
      {/* resa! say to typescript no! resa is not undefine, i know that */}
      {stat()}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-border-red p-10 flex-col gap-20">
          <div>
            <label> Chambre </label>
            <input
              type="number"
              aria-label="chambre"
              placeholder="assignedToRoomId"
              defaultValue={resa!.assignedToRoomId}
              {...register("assignedToRoomId", { valueAsNumber: true })}
            />
          </div>
          <div>
            <label> Guest ID </label>
            <input
              type="number"
              aria-label="Chambre :"
              placeholder={resa.assignedToRoomId}
              defaultValue={resa?.assignedToUserRoomId}
              {...register("assignedToUserRoomId", { valueAsNumber: true })}
            />
          </div>
          <div>
            <label>Date d’arrivée </label>
            <input type="datetime" placeholder={resa?.checkIn} {...register} />
          </div>
          <div>
            <label>Date de départ </label>
            <input type="datetime" placeholder={resa?.checkOut} {...register} />
          </div>
          <div>
            <select {...register(resa?.status)}>
              <option value="VACANT">Vacant</option>
              <option value="OCCUPIED">Occupied</option>
              <option value="IN_PROGRESS">in progress</option>
            </select>
          </div>
          <div>
            <input type="submit" />
          </div>
        </div>
      </form>
      <h1>Form 1 aria react hook form</h1>
      {/* <Form onSubmit={onSubmit} defaultValues="">
        <Input register="" name="firstName" />
        <Input register="" name="lastName" />
        <Select
          register=""
          name="gender"
          options={["female", "male", "other"]}
        />

        <Input register="" name="" type="submit" value="Submit" />
      </Form> */}
      <h1>Form 2 Melvin style</h1>
      {/* <div className="max-w-xl px-4 py-40 md:w-3/4 mx-auto">
        <form onSubmit={handleuSubmit}>
          <label htmlFor="Checkin">{resa?.checkIn.toLocaleDateString()}</label>
          <input
            name="checkIn"
            type="text"
            id="checkIn"
            placeholder={resa?.checkIn.toLocaleDateString()}
          />
          <button type="submit">Submit</button>
        </form>
      </div> */}
      <h1>Form 3</h1>
      {/* <div className="max-w-xl px-4 py-40 md:w-3/4 mx-auto">
        {error && (
          <Callout.Root color="red" className="mb-5">
            <Callout.Text>{error}</Callout.Text>
          </Callout.Root>
        )}
        <form className="space-y-3" onSubmit={onSubmit}>
          <div className="form-control">
            <input
              placeholder={resa?.checkIn.toLocaleDateString("fr-FR", {
                dateStyle: "medium",
              })}
              type="text"
              id="checkIn"
              {...register("checkIn", {
                valueAsDate: true,
                required: {
                  value: true,
                  message: "date required",
                },
              })}
            />
          </div>
          <TextFieldRoot>
            <TextField.Input
              defaultValue={resa?.status}
              placeholder="status"
              {...register("status")}
            />
          </TextFieldRoot>

          <div className="relative">
            <p>STATUS SELECT</p>
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              defaultValue={resa!.status}
              placeholder="status"
              {...register("status")}
            >
              {resa?.status.
              map((statu, index) => (
                <option key={index}>{statu.enum}</option>
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
          <p>select 2</p>
          <select
            name={resa?.status}
            options={["VACANT", "OCCUPIED", "IN_PROGRESS"]}
          />

          <TextField.Root>
            <TextField.Slot>Room</TextField.Slot>
            <TextField.Input
              placeholder="assignedToRoomId"
              {...register("assignedToRoomId", { valueAsNumber: true })}
            />
          </TextField.Root>
          <TextField.Root>
            <TextField.Slot>Guest</TextField.Slot>
            <TextField.Input
              defaultValue={resa?.assignedToUserRoomId}
              placeholder="Guest user"
              {...register("assignedToUserRoomId", { valueAsNumber: true })}
            />
          </TextField.Root>
          <ErrorMessage>{errors.assignedToUserRoomId?.message}</ErrorMessage>
          <TextField.Root>
          <TextField.Input
            defaultValue={resa?.checkIn}
            placeholder="Check In"
            {...register("checkIn", { valueAsDate: true })}
          />
        </TextField.Root>
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
            {resa ? "Update resa" : "Submit Resa"} {isSubmitting && <Spinner />}
          </Button>
        </form>
      </div> */}
    </>
  );
};

export default ResaForm;
