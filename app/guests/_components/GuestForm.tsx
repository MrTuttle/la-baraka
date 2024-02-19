"use client";

import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { patchUserRoomSchema, userRoomSchema } from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
// import { Reservation, UserRoom } from "@prisma/client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";

// redefine the complete type UserRoom & Reservation
// it seems that prisma client doesn't go to nested seond level
// props passed by parent lost nested reservations if i don't redefine
type Reservation = {
  id: number;
  checkIn: Date;
  checkOut: Date;
  status: string;
  assignedToRoomId: number;
  assignedToUserRoomId: number;
};
type UserRoom = {
  id: number;
  firstName: string | null;
  name: string | null;
  email: string | null;
  phone: string;
  emailVerified: Date | null;
  reservationDates: Reservation[];
};

type GuestFormData = z.infer<typeof patchUserRoomSchema>;

const resaArray: Reservation[] = [];
type Array = {
  // resaArray: Reservation[] = [];
  resaArray: Reservation[];
};
// const pack = { guest: { reservationDates: guest.reservationDates } };
type Props = {
  savePost: (e: React.FormEvent, formData: IPost) => void;
};

const GuestForm = ({ guest }: { guest?: UserRoom }) =>
  // { pack }: {reservationDates: Reservation},
  // { pack }: {{reservationDates}:  {reservationDates: UserRoom}}
  // { resaArray }: { resaArray: Array },
  // { reservationPack }: { reservationPack: Reservation }
  // { resas }: { resas?: Reservation },
  // { resaArray }: { resas?: Reservation }[]
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

    // function to display all imputs reservations - fail -> return void
    const resas = (guest: UserRoom) => {
      const mappedElement = guest?.reservationDates.map((resa, index) => {
        <div key={index} className="border">
          <p>Date {resa.id}</p>
          <TextField.Root>
            <TextField.Input
              placeholder="CheckIn"
              defaultValue={resa.checkIn.toLocaleString("fr-Fr", {
                dateStyle: "medium",
              })}
              {...register("reservationDates.checkIn")}
            />
          </TextField.Root>
          <TextField.Root>
            <TextField.Input
              placeholder="CheckOut"
              defaultValue={resa.checkOut.toLocaleString("fr-Fr", {
                dateStyle: "medium",
              })}
              {...register("reservationDates.checkIn")}
            />
          </TextField.Root>
        </div>;
      });
      console.log(`mapped element ${mappedElement}`);

      return mappedElement;
    };
    console.log(
      `R E S E R V A T I O N S : ${
        guest?.firstName
      } - ${guest?.reservationDates.map((resa) => resa.checkIn)}`
    );

    return (
      <div className="max-w-xl">
        <p>Resas :</p>

        <p>
          {guest?.reservationDates.map((resa, index) => (
            <span key={index}>
              {resa.checkIn.toLocaleString("fr-FR", { dateStyle: "medium" })}
            </span>
          ))}
        </p>
        {/* {reservationPack} */}

        {/* {reservationPack.checkIn.toLocaleString("fr-FR")} */}
        {/* <p>{resas?.checkIn.toLocaleString("fr-FR", { dateStyle: "short" })}</p> */}
        {/* <p>
          ResaArray 1 :{" "}
          {resaArray.resaArray.map((resa, index) => (
            <span key={index}>{resa.checkIn.toLocaleString("fr-FR")}</span>
          ))}
        </p> */}
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

          {/* RESERVATION ACCESS */}
          <p>R E S E R V A T I O N S</p>
          {guest?.reservationDates.map((resa, index) => (
            <div key={index} className="border p-4">
              <p>Resa Id :{resa.id}</p>
              <label>Check In</label>
              <TextField.Root>
                <TextField.Input
                  defaultValue={resa.checkIn.toLocaleString("fr-FR", {
                    dateStyle: "medium",
                  })}
                  placeholder={resa.checkIn.toLocaleString("fr-FR", {
                    dateStyle: "medium",
                  })}
                  {...register("reservationDates.checkIn")}
                ></TextField.Input>
              </TextField.Root>
              <label>Check out</label>
              <TextField.Root>
                <TextField.Input
                  defaultValue={resa.checkOut.toLocaleString("fr-FR", {
                    dateStyle: "medium",
                  })}
                  placeholder={resa.checkOut.toLocaleString("fr-FR", {
                    dateStyle: "medium",
                  })}
                  {...register("reservationDates.checkOut")}
                ></TextField.Input>
              </TextField.Root>
            </div>
          ))}

          <Button disabled={isSubmitting}>
            {guest ? "Update guest" : "Submit New guest"}{" "}
            {isSubmitting && <Spinner />}
          </Button>
        </form>
      </div>
    );
  };

export default GuestForm;
