// app/validationSchema.ts

import { z } from "zod";

export const menuSchema = z.object({
  title: z.string().min(1, "title is required.").max(255),
  description: z.string().min(1, "description is required"),
  price: z.number().optional(),
});
export const roomSchema = z.object({
  title: z.string().min(1, "title is required.").max(255),
  description: z.string().min(1, "description is required"),
  price: z.number().min(1, "price is required.").max(200),
});
export const eventSchema = z.object({
  title: z.string().min(1, "title is required.").max(255),
  description: z.string().min(1, "description is required"),
  price: z.number().min(1, "price is required.").max(200),
});
export const imageSchema = z.object({
  publicId: z.string().min(1, "no publicId for rsc image"),
  alt: z.string().min(5, "Give a short description image for accessibility"),
  cover: z.boolean().default(false),
  assignedToRoomId: z.number().min(1),
});
export const userRoomSchema = z.object({
  firstName: z.string().min(1, "First name is required.").max(255),
  name: z
    .string()
    .min(1, "name is required in userRoomShema")
    .max(25, "max 25 digits form name")
    .optional()
    .nullable(),
  phone: z
    .string()
    .min(10, "phone is required in userRoomShema, at least 10 digit "),
  email: z
    .string()
    .min(10, "email is required in userRoomShema")
    .max(25, "max 25 digit in userRoomSchema")
    .optional(),
  reservationDates: z
    .object({
      assignedToRoomId: z.number().optional(),
      checkIn: z.string(),
      checkOut: z.string(),
      status: z.enum(["OCCUPIED", "VACANT", "IN_PROGRESS"]),
      // status: z.enum(["OCCUPIED", "VACANT", "IN_PROGRESS"]),
    })
    .optional(),
});
export const patchUserRoomSchema = z.object({
  firstName: z.string().optional(),
  name: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().optional(),
  reservationDates: z
    .object({
      checkIn: z.string().optional(),
      // .min(new Date("2024-01-01"), { message: "already passed" }),
      checkOut: z.string().optional(),
      // .min(new Date("2024-01-01"), { message: "already passed" }),
      status: z.enum(["OCCUPIED", "VACANT", "IN_PROGRESS"]).optional(),
    })
    .optional(),
});
export const patchRoomSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255).optional(),
  description: z
    .string()
    .min(1, "Description is required.")
    .max(65535)
    .optional(),
  price: z.number().min(1, "price is required.").max(200).optional(),
});
export const reservationSchema = z.object({
  assignedToRoomId: z.number().min(1, "Room is required.").max(10),
  assignedToUserRoomId: z.number().min(1, "User is required.").max(65535),
  checkIn: z.date(),
  checkOut: z.date(),
});
export const patchReservationSchema = z.object({
  assignedToRoomId: z.number().min(1, "Room is required.").max(10).optional(),
  assignedToUserRoomId: z
    .number()
    .min(1, "User is required.")
    .max(65535)
    .optional(),
  checkIn: z.date().optional(),
  checkOut: z.date().optional(),
  status: z.enum(["OCCUPIED", "VACANT", "IN_PROGRESS"]).optional(),
});

// EXEMPLES //
export const createIssueSchema = z.object({
  title: z.string().min(1, "title is required.").max(255),
  description: z.string().min(1, "description is required"),
});

export const issueSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255),
  description: z.string().min(1, "Description is required.").max(65535),
});

export const patchIssueSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255).optional(),
  description: z
    .string()
    .min(1, "Description is required.")
    .max(65535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, "AssignedToUserId is required.")
    .max(255)
    .optional()
    .nullable(),
});
