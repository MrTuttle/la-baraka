import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { userRoomSchema } from "@/app/validationSchema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = userRoomSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const newUserRoom = await prisma.userRoom.create({
    data: {
      firstName: body.firstName,
      name: body.name,
      email: body.email,
      phone: body.phone,
      reservationDates: {
        create: {
          checkIn: body.checkIn,
          checkOut: body.checkOut,
          assignedToRoomId: body.assignedToRoomId,
          status: "IN_PROGRESS",
        },
      },
    },
    include: {
      reservationDates: true,
    },
  });
  return NextResponse.json(newUserRoom, { status: 201 });
}

// import prisma from "@/prisma/client";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(request: NextRequest) {
//  const body = await request.json();
//  const newUserRoom = await prisma.userRoom.create({
//    data: {
//      firstName: body.firstName,
//      name: body.name,
//      email: body.email,
//      phone: body.phone,
//      reservationDates: {
//        create: {
// ISSUE : all dynamic nested datas faill in postman
// checkIn: body.checkIn, // ok if we get dates in string
// checkIn: new Date(body.checkIn), // unvalid date
// checkIn: new Date("2024-06-10T00:00"), // ok but 9 instead of 10 (terminal)
// checkIn: new Date("2024-06-09T22:00:00.000Z"), // ok EUREKA! maybe the soluce of late  date posts !
//         checkIn: new Date("2024-06-09T00:00:00.000Z"), // ok work with T00
//         checkOut: new Date("2024-06-11T22:00:00.000Z").toISOString(), // ok date in iso string publish in db

//         // checkOut: body.checkOut,
//         // assignedToRoomId: body.assignedToRoomId, // undefined
//         assignedToRoomId: 1, // ok
//         // status: "IN_PROGRESS", // ok
//         status: body.status,
//       },
//     },
//   },
// include: {
//   reservationDates: true,
// },
//  });
//  return NextResponse.json(newUserRoom, { status: 201 });

// FAIL WITH DATES VALIDATION, ZOD PROBLEMS ON ENUMS
