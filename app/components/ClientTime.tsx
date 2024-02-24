"use client";
import React from "react";

const ClientTime = () => {
  return <li>ClientTime : {new Date().toUTCString()}</li>;
};

export default ClientTime;
