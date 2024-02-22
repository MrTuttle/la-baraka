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
import { Section } from "@radix-ui/themes";
import ErrorMessage from "@/app/components/ErrorMessage";

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
  firstName: string | null;
  name: string | null;
  email: string | null;
  phone: string | null;
  emailVerified: Date | null;
  reservationDates: Reservation[];
};

const GuestNewForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<UserRoom>();
  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const onSubmit: SubmitHandler<UserRoom> = async (data) => {
    console.log(`GuestFormDateStr data : ${data}`);
    console.log(`GuestFormDateStr typeOf data : ${typeof data}`);
    console.log(`GuestFormDateStr Object.keys(data) : ${Object.keys(data)}`);
    console.log(`GuestFormDateStr Object.values : ${Object.values(data)}`);
    console.log(`GuestFormDateStr Object.entries : ${Object.entries(data)}`);
    try {
      setSubmitting(true);
      // if (guest) await axios.patch("/api/guests/" + guest.id, data);
      await axios.post("/api/guests", data);
      router.push("/guests");
      router.refresh();
      // console.log(`SUBMIT ON GUESTS ${guest?.id}`);
    } catch (error) {
      setSubmitting(false);
      // console.log(`SUBMIT FAILL ON GUESTS ${guest?.id}`);
      // console.log(data);
      setError("An unexpected error occurred.");
    }
  };
  return (
    <Section className=" pt-40 px-4">
      <div className="sm:w-8/12 lg:w-6/12  mx-auto p-8">
        <h1 className="text-2xl">Guest creation</h1>
        <p className=" font-semibold">What should’you do here ?</p>
        <ul className=" list-disc list-inside py-4">
          <li>Manualy create a guest</li>
          <li className="text-gray-400">
            Add his dates reservations
            <em className="text-orange-500">(coming soon)</em>
          </li>
        </ul>
      </div>
      <div className="px-4 flex flex-col gap-3 justify-center flex-wrap">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-lg border rounded px-4 py-8"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Guest First Name
              </label>
              <input
                placeholder="First Name"
                {...register("firstName", {
                  required: "First name required",
                })}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              <ErrorMessage />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Guest Last Name
              </label>
              <input
                placeholder="n° Guest"
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
                {...register("email")}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Room
              </label>
              <input
                placeholder="room id"
                {...register("reservationDates.assignedToRoomId", {
                  valueAsNumber: true,
                })}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Etat{" "}
              </label>
              <div className="relative">
                <select
                  {...register(`reservationDates.status`)}
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

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Check In
              </label>

              <input
                placeholder="2024-04-19T00:00:00.000Z"
                {...register("reservationDates.checkIn")}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Check Out
              </label>

              <input
                placeholder="2024-04-19T00:00:00.000Z"
                {...register("reservationDates.checkOut")}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>
          {/* {guest?.reservationDates.map((resa, index) => (
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
          ))} */}
          <div className="flex p-4 mb-20">
            <div className=" bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
              {/* <input type="submit" /> */}
              <button disabled={isSubmitting}>
                Submit
                {/* {guest ? "Update" : "Submit New resa"}{" "} */}
                {isSubmitting && <Spinner />}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default GuestNewForm;
