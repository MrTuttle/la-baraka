// app/issues/new/page.tsx

"use client";
import { Button, TextField } from "@radix-ui/themes";
// import SimpleMDE from "react-simplemde-editor";
import dynamic from "next/dynamic";
import { useForm, Controller } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { CldUploadWidget } from "next-cloudinary";
import UploadWidget from "@/app/components/UploadWidget";

interface RoomForm {
  title: string;
  description: string;
  price: number;
}
const SimpleMDE = dynamic(async () => import("react-simplemde-editor"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const NewRoomPage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<RoomForm>();
  // console.log(register("title"));
  // register return props that we should apply to an input field to track changes

  return (
    <section className="mx-4">
      <form
        className=" max-w-lg space-y-3"
        onSubmit={handleSubmit(async (data) => {
          // console.log("DATA : " + data.title + "dec : " + data.description);
          axios.post("/api/chambres", data);
          router.push("/chambres");
          router.refresh();
        })}
      >
        <TextField.Root>
          {/* // the function register return an object with 4 properties, // thats
        why we use spread operator, // so we can add those 4 properties as props
      to this component */}
          <TextField.Input
            placeholder="Title"
            {...register("title")}
          ></TextField.Input>
        </TextField.Root>
        <TextField.Root>
          <TextField.Input
            placeholder="prix"
            {...register("price", { valueAsNumber: true })}
          ></TextField.Input>
        </TextField.Root>

        {/* // simpleMDE doesn't support additional props with spead operator // so we
      need to use a different technique. // we use controller component in
    react-form */}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="description" {...field} />
          )}
        />

        {/* <UploadWidget /> */}
        <Button>Ajouter la chambre</Button>
      </form>
    </section>
  );
};

export default NewRoomPage;
