"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { Button, Flex } from "@radix-ui/themes";
import { Postimages } from "../utilities/postimages";
import { createImage } from "../lib/actions";
import { Text } from "@radix-ui/themes";

interface CloudinaryResult {
  public_id: string;
  onSuccess: (publicId: string) => void;
}

const UploadWidget = ({ onSuccess }: CloudinaryResult) => {
  const [publicId, setPublicId] = useState("");
  console.log(`PUBLIC ID STATE : ${publicId} - type : ${typeof publicId}`);
  // => PUBLIC ID STATE : uwsdjkl74rtyn1jv4y53 - type : string
  onSuccess(publicId);

  return (
    <>
      <CldUploadWidget
        uploadPreset="dnajczzs"
        options={{
          sources: ["local", "url", "camera"],
          multiple: false,
          maxFiles: 5,
          styles: {
            palette: {
              window: "#0f192c",
              sourceBg: "#1c293a",
            },
          },
        }}
        onUpload={(result, widget) => {
          console.log(`RESULT:`);
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          console.log("aaaa");
          setPublicId(info.public_id);
          // Postimages(info.public_id);
          console.log("CLD WIDGET PUBLI ID");
          console.log(info.public_id);

          console.log(result);
        }}
      >
        {({ open }) => <Button onClick={() => open()}>Upload</Button>}
      </CldUploadWidget>
      {publicId && (
        <Flex direction="column">
          <Text>Public id : {publicId}</Text>
          <Text size="1">
            Copie le code de cette image : <strong> {publicId}</strong> dans le
            champ ”public id” de la section suivante et assigne lui un numéro de
            chambre.
          </Text>
        </Flex>
      )}

      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="portrait image"
        ></CldImage>
      )}
    </>
  );
};

export default UploadWidget;
