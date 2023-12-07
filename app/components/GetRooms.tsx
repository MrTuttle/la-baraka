import prisma from "@/prisma/client";
import React from "react";
import AssignImgForm from "./AssignImgForm";

const GetRooms = async () => {
  const rooms = await prisma.room.findMany();

  return (
    <>
      <p>GetRoom</p>
      <AssignImgForm />
    </>
  );
  // <div>

  //   {rooms.map((room, index) => (
  //     <p key={index}>chambre : {room.id}</p>
  //   ))}
  // </div>
};

export default GetRooms;
