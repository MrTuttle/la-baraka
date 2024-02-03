// app/chambres/new/page.tsx

// import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import RoomFormSkeleton from "@/app/chambres/_components/RoomFormSkeleton";

// import RoomForm from "../_components/RoomForm";
const RoomForm = dynamic(() => import("@/app/chambres/_components/RoomForm"), {
  ssr: false,
  loading: () => <RoomFormSkeleton />,
});

const NewRoomPage = () => {
  return <RoomForm />;
};

export default NewRoomPage;
