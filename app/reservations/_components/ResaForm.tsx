"use client";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
// import * as React from "react";

import {
  useForm,
  SubmitHandler,
  Controller,
  UseControllerProps,
  useController,
} from "react-hook-form";

// type FormData = {
//   firstName: string;
//   lastName: string;
//   age: number;
// };

type FormValues = {
  // firstName?: string;
  // lastName?: string;
  // email?: string;
  id: number;
  checkIn: Date;
  checkOut: Date;
  // status: $Enums.Status;
  // status: string;
  status: "VACANT" | "OCCUPIED" | "IN_PROGRESS";
  assignedToRoomId: number;
  assignedToUserRoomId: number;
};

export default function ResaForm({ resa }: { resa?: FormValues }) {
  // RHForm tools
  // const {
  //   register,
  //   setValue,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FormData>();

  const router = useRouter();
  const { register, handleSubmit } = useForm<FormValues>();
  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(`REASA : ${resa}`);
    console.log(`ResaFormm data : ${data}`);
    console.log(`ResaFormm typeOf data : ${typeof data}`);
    console.log(`ResaFormm Object.keys(data) : ${Object.keys(data)}`);
    console.log(`ResaFormm Object.values : ${Object.values(data)}`);
    try {
      setSubmitting(true);
      if (resa) await axios.patch("/api/reservations/" + resa.id, data);
      else await axios.post("/api/reservations", data);
      router.push("/reservations");
      router.refresh();
      console.log(`SUBMIT ON RESA `);
    } catch (error) {
      setSubmitting(false);
      console.log(`SUBMIT FAILL ON RESA `);
      console.log(data);
      setError("An unexpected error occurred.");
    }
  };

  return (
    <div className=" pt-20 my-border-red">
      <h1> Resa form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>N° Chambre</label>
        <input {...register("assignedToRoomId", { valueAsNumber: true })} />
        <label>N° Guest</label>
        <input {...register("assignedToUserRoomId", { valueAsNumber: true })} />
        <label>In</label>
        <input {...register("checkIn")} />
        <label>Out</label>
        <input {...register("checkOut")} />
        <div>
          <select {...register("status")}>
            <option value="VACANT">Vacant</option>
            <option defaultChecked={true} value="OCCUPIED">
              Occupied
            </option>
            <option value="IN_PROGRESS">in progress</option>
          </select>
        </div>
        <div className="flex p-4">
          <div className="inline transition-all p-2 hover:p-3 border rounded bg-slate-200 hover:bg-slate-400">
            <input type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
