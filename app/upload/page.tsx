// app/upload/page.tsx
"use client";

import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { createImage } from "../lib/actions";
import { Postimages } from "../utilities/postimages";
import prisma from "@/prisma/client";
import { getRooms } from "../lib/actions";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  const rooms = getRooms();

  return (
    <>
      <p>Form</p>
      <form action={createImage}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          <div className="mb-4">
            <label
              htmlFor="customer"
              className="mb-2 block text-sm font-medium"
            >
              Choose customer
            </label>
            <div className="relative">
              <select
                id="customer"
                name="customerId"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
                aria-describedby="customer-error"
              >
                <option value="" disabled>
                  Select a customer
                </option>
                {/* {rooms.map((customer) => (
                  <option key={customer.id} value={customer.id}>
                    {customer.name}
                  </option>
                ))} */}
              </select>
            </div>
          </div>
          <input placeholder="publicId"></input>
        </div>
      </form>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="portrait image"
        ></CldImage>
      )}
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
          // console.log(result);

          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
