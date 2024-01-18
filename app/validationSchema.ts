// app/validationSchema.ts

import { z } from "zod";

export const createIssueSchema = z.object({
  title: z.string().min(1, "title is required.").max(255),
  description: z.string().min(1, "description is required"),
});
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
    .min(1, "description is required")
    .max(255)
    .optional()
    .nullable(),
  phone: z.string().min(10, "phone is required"),
});
export const patchUserRoomSchema = z.object({
  firstName: z.string().min(1, "title is required.").max(255),
  name: z.string().min(1, "description is required"),
  phone: z.string().min(10, "phone is required"),
  email: z.string().min(10, "email is required"),
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
