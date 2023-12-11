import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, Card, Flex, Grid, Text, TextField } from "@radix-ui/themes";
import AssignImgForm from "@/app/components/AssignImgForm";
import GetRooms from "@/app/components/GetRooms";
import ImageList from "@/app/components/ImageList";
import UploadWidget from "@/app/components/UploadWidget";

interface ImageForm {
  publicId: string;
  alt: string;
  assignedToRoomId: number | null;
}

const NewImagePage = () => {
  return (
    <>
      <div className="prose mx-4">
        <Grid columns="2" gap="2" width="100%" className="mb-4">
          <Card>
            <Flex direction="column" gap="3" align="center">
              <Text> Ajouter une image à la photothèque</Text>
              <UploadWidget />
            </Flex>
          </Card>
          <Card>
            <GetRooms />
          </Card>
        </Grid>

        <ImageList />
      </div>
    </>
  );
};

export default NewImagePage;
