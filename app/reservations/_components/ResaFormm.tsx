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

// function Input(props: UseControllerProps<FormValues>){

//   const {field, fieldState}= useController(props);
//   return (
//     <div>
//       <input {...field} placeholder={props.name} />
//     </div>
//   );
// };

const ResaFormm = ({ resa }: { resa: FormValues }) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormValues>();
  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // const { control, register, handleSubmit } = useForm<Inputs>({
  //   defaultValues: {
  //     exampleDate1: new Date(2022, 8, 1),
  //     exampleDate2: new Date(2022, 8, 1),
  //   },
  // });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
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
      console.log(`SUBMIT ON RESA ${resa.id}`);
    } catch (error) {
      setSubmitting(false);
      console.log(`SUBMIT FAILL ON RESA ${resa.id}`);
      console.log(data);
      setError("An unexpected error occurred.");
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

  return (
    <>
      <div>
        ResaFormmm n° {resa.id} - status : {resa.status}
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
          <div>
            <label>CheckIn - try 2024-06-05T00:00:00.000Z :</label>
            <input {...register("checkIn")} />
            {/* <Controller control={} /> */}
          </div>
          <div>
            <label>CheckIn - try 2024-06-05T00:00:00.000Z :</label>
            <input {...register("checkOut")} />
            {/* <Controller control={} /> */}
          </div>

          <div>
            <input
            // type="datetime-local" // fail with defaultValue={resa.checkIn.toLocaleDateString("fr-FR", { dateStyle: "short",})}
            // type="date" // fail to display current date placeholder
            // type="datetime" // display current date default value
            // placeholder="CheckIn"
            // defaultValue="2024-01-31T12:33" // display this value
            // defaultValue={resa.checkIn.toDateString()} // work
            // {...register("checkIn", { valueAsDate: true })} // axios send a string, we want date
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
              <option value="VACANT">Vacant</option>
              <option defaultChecked={true} value="OCCUPIED">
                Occupied
              </option>
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
