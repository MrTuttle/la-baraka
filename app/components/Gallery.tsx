"use client";
import { Button, Dialog } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const Gallery = () => {
  return (
    <div>
      <Link href="#">Gallery</Link>
      <Dialog.Root>
        <Dialog.Trigger>
          {/* <Link href="">Gallery</Link> */}
          <Button>Show</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>Title</Dialog.Title>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default Gallery;
