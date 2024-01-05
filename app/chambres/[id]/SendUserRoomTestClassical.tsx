// doesn't work in a
"use client";
import { FormEvent } from "react";
export default function SendUserRoomTestClassical() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("GROS LOG");

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/userRooms", {
      method: "POST",
      body: formData,
    });
    console.log("RESPONSE", response);
    // handle response if nescessary
    // const data = await response.json();
    // console.log("DATA", data);
    // ..
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="phone" defaultValue="0000001122" />
      <button type="submit">Submit</button>
    </form>
  );
}
