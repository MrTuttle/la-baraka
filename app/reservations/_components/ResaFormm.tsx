"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  id: number;
  checkIn: Date;
  checkOut: Date;
  // status: $Enums.Status;
  // status: string;
  status: "VACANT" | "OCCUPIED" | "IN_PROGRESS";
  assignedToRoomId: number;
  assignedToUserRoomId: number;
};

const ResaFormm = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    console.log(typeof data);
  };

  return (
    <>
      <div>ResaFormm</div>
      <form onSubmit={handleSubmit(onSubmit)} className="my-border-red">
        <div className="my-border-green p-4 flex flex-wrap gap-2">
          <div>
            <input placeholder="votre nom" {...register("firstName")} />
          </div>
          <div>
            <input placeholder="votre prénom" {...register("lastName")} />
          </div>
          <div>
            <input
              placeholder="nom@email.com"
              // type="email"
              {...register("email")}
            />
          </div>
          <div>
            <input placeholder="n° chambre" {...register("assignedToRoomId")} />
          </div>
          <div>
            <input
              placeholder="n° Guest"
              {...register("assignedToUserRoomId")}
            />
          </div>
          <div>
            <label>Date d’arrivée</label>
            <input
              placeholder="2024-05-05T00:00:00.000Z"
              {...register("checkIn")}
            />
          </div>
          <div>
            <label>Date de</label>
            <input
              placeholder="2024-05-06T00:00:00.000Z"
              {...register("checkOut")}
            />
          </div>
          <div>
            <select {...register("status")}>
              <option value="VACANT">Vacant</option>
              <option value="OCCUPIED">Occupied</option>
              <option value="IN_PROGRESS">in progress</option>
            </select>
          </div>
        </div>
        <div className="flex p-4">
          <div className="inline transition-all p-2 hover:p-3 border rounded bg-slate-200 hover:bg-slate-400">
            <input type="submit" />
          </div>
        </div>
      </form>
    </>
  );
};

export default ResaFormm;
