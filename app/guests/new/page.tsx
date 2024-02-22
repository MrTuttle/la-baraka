import React, { ComponentPropsWithoutRef } from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import GuestFormSkeleton from "./loading";
import Link from "next/link";
import GuestFormDateStr from "../_components/GuestFormDateStr";
import GuestNewForm from "../_components/GuestNewForm";

const GuestForm = dynamic(() => import("@/app/guests/_components/GuestForm"), {
  ssr: false,
  loading: () => <GuestFormSkeleton />,
});

interface Props {
  params: { id: string };
}
type UserRoom = {
  id: number;
  firstName: string | null;
  name: string | null;
  email: string | null;
  phone: string;
  emailVerified: Date | null;
};

type Reservation = {
  id: number;
  checkIn: Date;
  checkOut: Date;
  status: String;
  assignedToRoomId: number;
  assignedToUserRoomId: number;
};

const newGuest = async ({ params }: Props) => {
  type ExpDivProps = {
    foo: string;
    bar: string;
  } & ComponentPropsWithoutRef<"div">; // ajoute toute les props de <'div'>, <button'>, <'input'> etc...

  return (
    <div className="mx-4 pt-20">
      <GuestNewForm />{" "}
    </div>
  );
};

export default newGuest;
