"use client";

import React from "react";
import useDeviceDetection from "@/app/utilities/useDeviceDetection";

const DeviceDetection = () => {
  const device = useDeviceDetection();

  return (
    <div>
      <h1>Your Device: {device}</h1>
    </div>
  );
};

export default DeviceDetection;
