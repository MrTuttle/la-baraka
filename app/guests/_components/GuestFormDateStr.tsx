"use client";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  useForm,
  SubmitHandler,
  Controller,
  UseControllerProps,
  useController,
} from "react-hook-form";
import Spinner from "@/app/components/Spinner";

type Reservation = {
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

type UserRoom = {
  id: number;
  firstName: string;
  name: string;
  email: string;
  phone: string;
  emailVerified: Date;
  reservationDates: Reservation[];
};

// function Input(props: UseControllerProps<FormValues>){

//   const {field, fieldState}= useController(props);
//   return (
//     <div>
//       <input {...field} placeholder={props.name} />
//     </div>
//   );
// };

const GuestFormDateStr = ({ guest }: { guest?: UserRoom }) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<UserRoom>();
  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // const { control, register, handleSubmit } = useForm<Inputs>({
  //   defaultValues: {
  //     exampleDate1: new Date(2022, 8, 1),
  //     exampleDate2: new Date(2022, 8, 1),
  //   },
  // });

  const onSubmit: SubmitHandler<UserRoom> = async (data) => {
    console.log(`GuestFormDateStr data : ${data}`);
    console.log(`GuestFormDateStr typeOf data : ${typeof data}`);
    console.log(`GuestFormDateStr Object.keys(data) : ${Object.keys(data)}`);
    console.log(`GuestFormDateStr Object.values : ${Object.values(data)}`);
    try {
      setSubmitting(true);
      if (guest) await axios.patch("/api/guests/" + guest.id, data);
      else await axios.post("/api/guests", data);
      router.push("/guests");
      router.refresh();
      console.log(`SUBMIT ON GUESTS ${guest?.id}`);
    } catch (error) {
      setSubmitting(false);
      console.log(`SUBMIT FAILL ON GUESTS ${guest?.id}`);
      console.log(data);
      setError("An unexpected error occurred.");
    }
  };

  return (
    <>
      <div className=" pt-20 border px-4">
        <p className="pb-10"> Modifier la réservation n° {guest?.id}</p>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Guest First Name
              </label>
              <input
                placeholder="n° Guest"
                defaultValue={guest?.firstName}
                {...register("firstName")}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Guest Last Name
              </label>
              <input
                placeholder="n° Guest"
                defaultValue={guest?.name}
                {...register("name")}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Phone
              </label>
              <input
                placeholder="n° Guest"
                defaultValue={guest?.phone}
                {...register("phone")}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email
              </label>
              <input
                placeholder="n° Guest"
                defaultValue={guest?.email}
                {...register("email")}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>
          {guest?.reservationDates.map((resa, index) => (
            <div key={resa.id} className="border p-4 w-full">
              <p>Reservation n° : {resa.id}</p>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Chambre
                </label>
                <input
                  defaultValue={resa.assignedToRoomId}
                  {...register(`reservationDates.${resa.id}.assignedToRoomId`)}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Check In
                </label>
                <input
                  defaultValue={resa.checkIn.toISOString()}
                  {...register(`reservationDates.${resa.id}.checkIn`)}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Check Out
                </label>
                <input
                  defaultValue={resa.checkOut.toISOString()}
                  {...register(`reservationDates.${resa.id}.checkOut`)}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Etat{" "}
                  <span className="text-[0.5rem]">
                    (Actually {resa.status})
                  </span>
                </label>
                <div className="relative">
                  <select
                    {...register(`reservationDates.${resa.id}.status`)}
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
            </div>
          ))}
          <div className="flex p-4 mb-20">
            <div className=" bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
              {/* <input type="submit" /> */}
              <button disabled={isSubmitting}>
                {guest ? "Update" : "Submit New resa"}{" "}
                {isSubmitting && <Spinner />}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default GuestFormDateStr;
