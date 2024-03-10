"use client";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import React, {
  ChangeEventHandler,
  useEffect,
  useState,
  ChangeEvent,
} from "react";
import { Room } from "@prisma/client";
import { addHours } from "@/app/utilities/hoursOffset";

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

  const onChange: ChangeEventHandler<FormValues> = (event) => {
    console.log(`data onChange : ${event.type}`);
  };

  //  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //    // Do something
  //    console.log(``);

  //  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(`RESA : ${resa}`); //=> its the props, typed form values
    // console.log(`EVENT : ${event}`);
    console.log(`EVENT type : ${event?.type}`); //=> submit
    console.log(`EVENT phase : ${event?.eventPhase}`); //=> submit

    console.log(`ResaFormm data : ${typeof data}`);
    console.log(`ResaFormm typeOf data.checkIn : ${typeof data.checkIn}`); //=> string
    console.log(
      `ResaFormm typeOf data.checkIn.valueOff : ${data.checkIn.valueOf()}`
    ); //=> date
    console.log(
      `ResaFormm typeOf data.checkIn.valueOff : ${data.checkOut.valueOf()}`
    ); //=> date
    console.log(`ResaFormm Object.keys(data) : ${Object.keys(data)}`);
    console.log(`ResaFormm Object.values : ${Object.values(data)}`);
    console.log(`Resaform data.checkIn : ${data.checkIn}`);
    console.log(`Resaform data.checkOut : ${data.checkOut}`);

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

  const onError = () => {
    console.log("WRONG");
  };

  // resa ? addHours(resa.checkIn, 24) : console.log("no checkin");
  // resa ? addHours(resa.checkOut, 24) : console.log("no checkout");

  return (
    <div className=" pt-20 border px-4">
      <p className="pb-10">Nouvelle reservation - ResaForm {resa?.id}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              N° Chambre
            </label>
            <input
              {...register("assignedToRoomId", {
                required: true,
                valueAsNumber: true,
              })}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field ex: 2024-06-05T00:00:00.000Z
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              N° Guest
            </label>
            <input
              {...register("assignedToUserRoomId", {
                valueAsNumber: true,
                required: true,
              })}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Check In
            </label>
            <input
              placeholder="2024-06-05T00:00:00.000Z"
              {...register("checkIn")}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Check Out
            </label>
            <input
              // type="date"
              {...register("checkOut")}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Etat
            </label>
            <div className="relative">
              <select
                {...register("status")}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="VACANT">Vacant</option>
                <option value="OCCUPIED">Occupied</option>
                <option value="IN_PROGRESS">in progress</option>
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
          </div>
          {/* <div className="md:flex md:items-center">
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </div> */}
          <div className="flex p-4">
            <div className="shadow bg- bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
              <input type="submit" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
