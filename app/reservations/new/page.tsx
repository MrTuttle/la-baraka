// app/chambres/new/page.tsx

// import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import ResaFormSkeleton from "@/app/reservations/_components/ResaFormSkeleton";
import prisma from "@/prisma/client";
import { Reservation, Room, UserRoom } from "@prisma/client";

// import RoomForm from "../_components/RoomForm";
const ResaForm = dynamic(
  () => import("@/app/reservations/_components/ResaForm"),
  {
    ssr: false,
    loading: () => <ResaFormSkeleton />,
  }
);

const NewResaPage = async () => {
  const rooms = await prisma.room.findMany({});
  const guests = await prisma.userRoom.findMany({});
  const createListSelect = (rooms: Room[], guests: UserRoom[]) => {
    const roomsIds = rooms.map((item, index) => item.id);
    const listRooms = roomsIds;
    const guestIds = guests.map((item, index) => item.id);
    const listGuests = guestIds;
    return { listRooms, listGuests };
  };
  const listSelect = createListSelect(rooms, guests);
  return <ResaForm listSelect={listSelect} />;
};

export default NewResaPage;
