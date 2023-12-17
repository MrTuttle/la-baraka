import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Text,
  TextField,
} from "@radix-ui/themes";
import AssignImgForm from "@/app/components/AssignImgForm";
import GetRooms from "@/app/components/GetRooms";
import ImageList from "@/app/components/ImageList";
import UploadWidget from "@/app/components/UploadWidget";

// interface ImageForm {
//   publicId: string;
//   alt: string;
//   assignedToRoomId: number | null;
// }

// const NewImagePage = ({ publicId }: ImageForm) => {
const NewImagePage = () => {
  return (
    <>
      <Flex
        direction={{ initial: "column", md: "row" }}
        gap="4"
        className="mx-4 mb-4"
      >
        <Flex direction="column" justify="center" gap="4">
          <Card>
            <Flex
              gap="3"
              direction="column"
              height="max-content"
              justify="center"
            >
              <Text className="text-center font-bold">
                {" "}
                Ajouter une image à la photothèque
              </Text>
              <UploadWidget />
            </Flex>
          </Card>
          <Card>
            <Flex
              gap="3"
              direction="column"
              height="max-content"
              justify="center"
            >
              <Text className="text-center font-bold">
                {" "}
                Assigner l’image à une chambre
              </Text>
              <GetRooms />
            </Flex>
          </Card>
        </Flex>
      </Flex>
      <h1 className="prose font-bold text-2xl px-4 pt-24  pb-12">
        Liste des images de chambres
      </h1>
      <Flex className="mx-4">
        <ImageList />
      </Flex>
    </>
  );
};

export default NewImagePage;
