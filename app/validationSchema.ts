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
export const imageSchema = z.object({
  publicId: z.string().min(1, "no publicId for rsc image"),
  alt: z.string().min(5, "Give a short description image for accessibility"),
  cover: z.boolean().default(false),
  assignedToRoomId: z.number().min(1),
});
export const userRoomSchema = z.object({
  firstName: z.string().min(1, "title is required.").max(255),
  name: z
    .string()
    .min(1, "name is required in userroomshema")
    .max(255)
    .optional()
    .nullable(),
  phone: z.string().min(10, "phone is required"),
  email: z.string().min(10, "email is required").optional(),
  reservationDates: z.object({
    assignedToRoomId: z.number(),
    checkIn: z.date(),
    checkOut: z.date(),
    status: z.enum(["OCCUPIED", "VACANT", "IN_PROGRESS"]),
  }),
});
export const patchUserRoomSchema = z.object({
  firstName: z.string().optional(),
  name: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().optional(),
  reservationDates: z.object({
    checkIn: z
      .date()
      .min(new Date("2024-01-01"), { message: "already passed" }),
  }),
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
