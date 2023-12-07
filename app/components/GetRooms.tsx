import prisma from "@/prisma/client";
import React from "react";
import AssignImgForm from "./AssignImgForm";

const GetRooms = async () => {
  const rooms = await prisma.room.findMany();
  console.log(rooms);

  return (
    <>
      <p>GetRoom</p>
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
