import prisma from "@/prisma/client";
import DisplayCldMulti from "./DisplayCldMulti";
import DisplayCld from "./DisplayCld";
// import { Room, ImageRoom } from "@/app/chambres/page";

interface Props {
  roomId: number;
}

const GetCldIdList = async ({ roomId }: Props) => {
  const imagess = await prisma.image.findMany({
    where: {
      assignedToRoom: {
        id: roomId,
      },
    },
    select: {
      publicId: true,
      alt: true,
    },
  });
  // console.log(" CONTENUS DE images AVEC idRoom = 4 :");
  // console.log(images);
  // return imagess;
  return (
    <>
      {imagess.map((e, index) => (
        <DisplayCld key={index} public_id={e.publicId} alt={e.alt} />
      ))}
    </>
  );
};

export default GetCldIdList;
