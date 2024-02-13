import React from "react";
import { Controller, useForm } from "react-hook-form";

export function Input({ register, name, ...rest }) {
  return <input {...register(name)} {...rest} />;
}
