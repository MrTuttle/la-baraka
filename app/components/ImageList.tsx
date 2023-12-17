import prisma from "@/prisma/client";
import { Card, Grid, Inset, Text } from "@radix-ui/themes";
import React from "react";
import CldImageClient from "../components/CldImageClient";
const ImageList = async () => {
  const images = await prisma.image.findMany();

  return (
    <>
      <Grid columns={{ initial: "1", md: "3", xl: "5" }} gap="3" width="auto">
        {images.map((image, index) => (
          <Card key={index} asChild style={{ maxWidth: 400 }}>
            <a href={"/images/" + image.id}>
              <Inset clip="padding-box" side="top" pb="current">
                <CldImageClient
                  src={image.publicId}
                  width={600}
                  height={300}
                  sizes="100vh"
                  alt={image.alt}
                />
              </Inset>
              <Text as="div" size="2" weight="bold">
                public id : {image.publicId}
              </Text>
              <Text as="div" color="gray" size="2">
                associated room id :{image.assignedToRoomId}
              </Text>
              <Text as="p" color="gray" size="2">
                Cover : {image.cover.toString()}
              </Text>
            </a>
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default ImageList;
