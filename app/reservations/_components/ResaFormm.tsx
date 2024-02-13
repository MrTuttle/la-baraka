"use client";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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

const ResaFormm = ({ resa }: { resa: FormValues }) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormValues>();
  const [isSubmitting, setSubmitting] = useState(false);
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
    console.log(typeof data);
    try {
      setSubmitting(true);
      if (resa) await axios.patch("/api/reservations/" + resa.id, data);
      router.push("/reservations");
      router.refresh();
      console.log(`SUBMIT ON RESA ${resa.id}`);
    } catch (error) {
      setSubmitting(false);
      console.log(`SUBMIT FAILL ON RESA ${resa.id}`);
      console.log(data);
    }
  };
  // GET URL IN NEXT JS
  // const pathname = usePathname();
  // console.log(`PATHNAME = ${pathname}`);

  // NEXT JS Do something in response to a route change
  // import { usePathname, useSearchParams } from "next/navigation";

  // function ExampleClientComponent() {
  //   const pathname = usePathname();
  //   const searchParams = useSearchParams();
  //   useEffect(() => {
  //     // Do something here...
  //   }, [pathname, searchParams]);
  // }

  const displayVacantStatus = (status: string) => {
    if (status === "VACANT") {
      // faire quelque chose
      return true;
    } else {
      // faire encore autre chose
      return false;
    }
  };
  const displayOccupiedStatus = (status: string) => {
    if (status === "OCCUPIED") {
      // faire quelque chose
      return true;
    } else {
      // faire encore autre chose
      return false;
    }
  };
  const displayInprogressStatus = (status: string) => {
    if (status === "IN_PROGRESS") {
      // faire quelque chose
      return true;
    } else {
      // faire encore autre chose
      return false;
    }
  };

  return (
    <>
      <div>
        ResaFormm n° {resa.id} - status : {resa.status}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="my-border-red">
        <div className="my-border-green p-4 flex flex-wrap gap-2">
          {/* <div>
            <input placeholder="votre nom" {...register("firstName")} />
          </div> */}
          {/* <div>
            <input placeholder="votre prénom" {...register("lastName")} />
          </div> */}
          {/* <div>
            <input
              placeholder="nom@email.com"
              // type="email"
              {...register("email")}
            />
          </div> */}
          <div>
            <input
              placeholder="n° chambre"
              defaultValue={resa.assignedToRoomId}
              {...register("assignedToRoomId", { valueAsNumber: true })}
            />
          </div>
          <div>
            <input
              placeholder="n° Guest"
              defaultValue={resa.assignedToUserRoomId}
              {...register("assignedToUserRoomId", { valueAsNumber: true })}
            />
          </div>
          {/* <div>
            <label>Date d’arrivée </label>
            <input
              placeholder="2024-05-05T00:00:00.000Z"
              defaultValue={resa.checkIn.toLocaleDateString("fr-FR", {
                dateStyle: "full",
              })}
              {...register("checkIn", { valueAsDate: true })}
            />
          </div> */}
          {/* <div>
            <label>Date de départ </label>
            <input
              placeholder="2024-05-06T00:00:00.000Z"
              defaultValue={resa.checkOut.toLocaleDateString("fr-FR", {
                dateStyle: "full",
              })}
              {...register("checkOut", { valueAsDate: true })}
            />
          </div> */}
          <div>
            <select {...register("status")}>
              <option
                defaultChecked={displayVacantStatus(resa.status)}
                value="VACANT"
              >
                Vacant
              </option>
              <option
                defaultChecked={displayOccupiedStatus(resa.status)}
                value="OCCUPIED"
              >
                Occupied
              </option>
              <option
                defaultChecked={displayInprogressStatus(resa.status)}
                value="IN_PROGRESS"
              >
                in progress
              </option>
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
