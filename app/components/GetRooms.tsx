// app/components/GetRooms.tsx
// "use server" component which gives data to "client component" AssignImgForm

import prisma from "@/prisma/client";
import React from "react";
import AssignImgForm from "./AssignImgForm";
// import { getRooms } from "../lib/actions";

const GetRooms = async () => {
  const rooms = await prisma.room.findMany();
  // console.log(rooms);
  // for future factorazing :
  // const grooms = await getRooms();
  // for now we cannot map the result (type issue)

  return (
    <>
      <AssignImgForm listRooms={rooms} />
    </>
  );
  // <div>

  //   {rooms.map((room, index) => (
  //     <p key={index}>chambre : {room.id}</p>
  //   ))}
  // </div>
};

export default GetRooms;
