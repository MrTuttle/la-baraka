import prisma from "@/prisma/client";
import React from "react";
import DisplayCldMulti from "./DisplayCldMulti";
import DisplayCld from "./DisplayCld";
import { Room, ImageRoom } from "@/app/chambres/page";
import { equal } from "assert";

const publicIdList: string[] = [];

interface Props {}

const GetCldList = async ({ assignedToRoomId }: ImageRoom) => {
  console.log("ROOM ID PROPS");
  console.log(assignedToRoomId);
  const passedRoomId = { assignedToRoomId };
  console.log(passedRoomId);
  const rooms = await prisma.room.findMany({
    where: {
      assignedRoom: {
        some: {},
      },
    },
  });
  console.log("ROOM");
  console.log(rooms);
  const getPublicIds = async ({ assignedToRoomId }: ImageRoom) => {
    const images = await prisma.image.findMany({
      select: {
        publicId: true,
      },
    });
    // const images = await prisma.image.findMany({
    //   where: { assignedToRoomId: roomId },
    // });
    console.log("GETCLDLIST LOG");
    console.log("room id:");
    console.log(passedRoomId);
    console.log("PUBLIC IDS :");
    console.log(images);

    // RESET TABLE BEFORE PUSH IN
    publicIdList.length = 0;
    // console.log("resetable:");
    // console.log(publicIdList);

    // FILL TABLE WITH RESULT OF IMAGES FUNCTION
    images.map((image) => {
      publicIdList.push(image.publicId);
    });
    console.log("publicIdList :");
    console.log(publicIdList);
    // publicIdList.map((publicId, index) => <p key={index}>{publicId}</p>);
  };
  // getPublicIds({assignedToRoomId:});
  // getPublicIds({roomId}: Props);
  // console.log("list 2");
  // console.log(publicIdList);

  return (
    <>
      <div>GetCldList</div>
      {/* {rooms.map((room, index) => (
        <p key={index}>Room id : {room.id}</p>
      ))} */}
      {/* {images.map((image, index) => (
        <p key={index}>Image : {image.publicId}</p>
      ))} */}
      {publicIdList.map((publicId, index) => (
        <p key={index}>Public id : {publicId}</p>
      ))}
      <DisplayCldMulti imgList={getPublicIds} />

      {/* <DisplayCld /> */}
    </>
  );
};

export default GetCldList;
