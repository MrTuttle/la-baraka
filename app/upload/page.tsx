// app/upload/page.tsx
"use client";

import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
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
