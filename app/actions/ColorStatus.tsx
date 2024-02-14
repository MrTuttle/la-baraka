import React from "react";

// work with enums in Reservation model
// & <Badge> radix UI component

// compare string enum value
// and return a string color name

// radix available colors for <Badge> :
// "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "brown" | "orange" | "sky" | "mint" | "lime" | "yellow" | "amber" | "gold" | "bronze" | "gray"

export const ColorStatus = (status: string) => {
  if (status === "VACANT") {
    return "grass";
  }
  if (status === "OCCUPIED") {
    return "ruby";
  }
  if (status === "IN_PROGRESS") {
    return "indigo";
  } else {
    return "gray";
  }
};
