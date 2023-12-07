import prisma from "@/prisma/client";
import { Card, Grid, Inset, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import DisplayCld from "../components/DisplayCld";
import CldImageClient from "../components/CldImageClient";
import Image from "next/image";
import imagepublic from "@/public/90125_1039_375.jpg";

const ImagesListPage = async () => {
  const images = await prisma.image.findMany();
  return (
    <div className="mx-4">
      <h1>Images List Page</h1>
      <Grid columns="3" gap="3" width="auto">
        {images.map((image, index) => (
          <Card key={index} asChild style={{ maxWidth: 350 }}>
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
                {image.publicId}
              </Text>
              <Text as="div" color="gray" size="2">
                room id :{image.assignedToRoomId}
              </Text>
              <p></p>
            </a>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default ImagesListPage;
