"use client";

import React from "react";
import DeleteUserRoom from "../actions/DeleteUserRoom";

interface Props {
  guest: number;
}
const DeleteGuest = ({ guest }: Props) => {
  return (
    <button
      onClick={() => {
        DeleteUserRoom(guest);
      }}
    >
      Delete{" "}
    </button>
  );
};

export default DeleteGuest;
