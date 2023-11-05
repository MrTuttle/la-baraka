"use client";
// app/issue/page.tsx

import React from "react";
import { Button } from "@radix-ui/themes";
import { CldImage } from "next-cloudinary";

const home = () => {
  return (
    <>
      <Button>New Issue</Button>
      <CldImage
        width="960"
        height="600"
        src="kh4tt0exbzev7p3csh32"
        sizes="100vw"
        alt="Description of my image"
      />
    </>
  );
};

export default home;
