// build command on Vercel hosting :
// prisma generate && prisma migrate deploy && prisma db seed && next build
// if need a rollback :
// prisma generate && prisma migrate resolve --rolled-back "20231226134654_menu_price_required" && next build
// DELETE ALL + IDS RESETS (DEV MODE)
// prisma migrate reset
// (PROD MODE)
// prisma generate && prisma migrate reset --force && prisma migrate deploy && prisma db seed && next build

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const clearReservations = await prisma.reservation.deleteMany({});
  const clearImages = await prisma.image.deleteMany({});
  const clearRooms = await prisma.room.deleteMany({});
  const clearMenus = await prisma.menu.deleteMany({});
  const clearUserRooms = await prisma.userRoom.deleteMany({});
  ////////////////////

  const menuDuJour = await prisma.menu.upsert({
    where: { id: 0 },
    update: {},
    create: {
      title: "Menu du jour",
      description: "Salade Joseph.\n\nEntrecôte maître d’hotel.\n\nCrumble",
      price: 15.5,
    },
  });
  const menuSalads = await prisma.menu.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: "Entrées",
      description:
        "Salade Joseph : salade du jardin, noix, huile d'olive.\n\nSalade Cesar.\n\nSalade Périgourdine.\n\nLyonnaise, Niçoise",
      price: 7,
    },
  });
  const menuPlats = await prisma.menu.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: "Plats",
      description:
        "Tagliatelles Carbonnara 8.5€.\n\nEntrecôte Maître d'Hôtel 12.9€.\n\nFilet de Perche 12.9€.\n\nAccompagnement aux choix :\n\nLégumes de saison, Gratin Dauphinois, Ratatouille",
      price: 0,
    },
  });

  const chambrebleue = await prisma.room.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: "Chambre Blu",
      description: `3 lits.

  Salle de bain.

  Balcon.

  Wifi.`,
      price: 50.99,

      assignedRoom: {
        create: [
          {
            publicId: "s1pqrceeb5yjoxlldsiv",
            alt: "La Chambre Bleue",
            cover: true,
          },
          {
            publicId: "q4akqqcgqdtuth6qflan",
            alt: "La Baraka - entrée",
            cover: false,
          },
        ],
      },
      // reservationDates: {
      //   create: {
      //     date: new Date("2023-12-24T00:00"),
      //     assignedToUserRoomId: 0,
      //   },
      // },
    },
  });
  const userRoomJack = await prisma.userRoom.upsert({
    where: { id: 1 },
    update: {},
    create: {
      firstName: "Jacky",
      name: "Russel",
      phone: "(+33) 00 00 00 00 00",
      reservationDates: {
        create: {
          checkIn: new Date("2023-12-24T00:00"),
          checkOut: new Date("2023-12-25T00:00"),
          assignedToRoomId: 1,
        },
      },
    },
  });
  const userRoomBob = await prisma.userRoom.upsert({
    where: { id: 2 },
    update: {},
    create: {
      firstName: "Boby",
      name: "Babouch",
      phone: "(+33) 00 00 00 00 00",
      reservationDates: {
        create: {
          checkIn: new Date("2024-01-10T00:00"),
          checkOut: new Date("2024-01-13T00:00"),
          assignedToRoomId: 2,
        },
      },
    },
  });
  const userRoomHelen = await prisma.userRoom.upsert({
    where: { id: 2 },
    update: {},
    create: {
      firstName: "Helen",
      name: "Ulle",
      phone: "(+33) 10 20 30 40 50",
      reservationDates: {
        create: {
          checkIn: new Date("2024-02-01T00:00"),
          checkOut: new Date("2024-02-02T00:00"),
          assignedToRoomId: 2,
        },
      },
    },
  });
  const chambrejaune = await prisma.room.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: "Chambre Jaune",
      description: "3 lits.\n\nSalle de bain.\n\nBalcon.\n\nWifi.",
      price: 50,

      assignedRoom: {
        create: [
          {
            publicId: "oqc8zcy0wybr1e8mvu9r",
            alt: "La Chambre Jaune",
            cover: true,
          },
          {
            publicId: "kh4tt0exbzev7p3csh32",
            alt: "La Baraka",
            cover: false,
          },
        ],
      },
      // reservationDates: {
      //   create: [
      //     {
      //       date: new Date("2023-12-24T00:00"),
      //       assignedToUserRoomId: 2,
      //     },
      //     {
      //       date: new Date("2023-12-25T00:00"),
      //       assignedToUserRoomId: 2,
      //     },
      //   ],
      // },
    },
  });
  const seeImages = await prisma.image.findMany({});
  console.log({
    userRoomJack,
    userRoomBob,
    userRoomHelen,
    menuDuJour,
    menuSalads,
    menuPlats,
    chambrebleue,
    chambrejaune,
    seeImages,
  });
  const seeReservations = await prisma.reservation.findMany({});
  console.log("reservations :");
  console.log(seeReservations);
  ////////////////////
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
