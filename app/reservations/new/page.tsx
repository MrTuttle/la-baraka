// app/chambres/new/page.tsx

// import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import ResaFormSkeleton from "@/app/reservations/_components/ResaFormSkeleton";

// import RoomForm from "../_components/RoomForm";
const ResaForm = dynamic(
  () => import("@/app/reservations/_components/ResaForm"),
  {
    ssr: false,
    loading: () => <ResaFormSkeleton />,
  }
);

const NewResaPage = () => {
  return <ResaForm />;
};

export default NewResaPage;
