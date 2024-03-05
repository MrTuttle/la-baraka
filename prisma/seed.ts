// build command on Vercel hosting :
// prisma generate && prisma migrate deploy && prisma db seed && next build
// if need a rollback :
// prisma generate && prisma migrate resolve --rolled-back "20240109204344_reservation_constraints" && next build
// DELETE ALL + IDS RESETS (DEV MODE)
// prisma migrate reset
// (PROD MODE)
// prisma generate && prisma migrate reset --force && prisma migrate deploy && prisma db seed && next build
// NORMAL COMMAND IN PROD MOD
// prisma generate && prisma migrate deploy && prisma db seed && next build

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

  const chambre1 = await prisma.room.upsert({
    where: { id: 3 },
    update: {},
    create: {
      title: "Chambre 1",
      description: `* 1 à 2 personnes, un grand lit.
* Lavabo dans la chambre.
* Salle de Douche et WC sur le palier.
* Vue sur la placette.
* Plateau de courtoisie.`,
      price: 50,

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
      //     assignedToUserRoomId: 0,
      //   },
      // },
    },
  });
  const chambre2 = await prisma.room.upsert({
    where: { id: 4 },
    update: {},
    create: {
      title: "Chambre 2",
      description: `* 1 à 3 personnes, un grand lit et un petit lit.\n\n * Lavabo dans la chambre\n\n * Salle de Douche et WC sur le palier. \n\n * Vue sur la placette.
* Plateau de courtoisie.\n\n`,
      price: 50,

      assignedRoom: {
        create: [
          {
            publicId: "oqc8zcy0wybr1e8mvu9r",
            alt: "La Chambre 2",
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
  const chambre3 = await prisma.room.upsert({
    where: { id: 5 },
    update: {},
    create: {
      title: "Chambre 3",
      description: `* 1 à 2 personnes, un grand lit. * Lavabo dans la chambre. * Salle de Douche et WC sur le palier.
* Terrasse vue sur la rivière. * Plateau de courtoisie.`,
      price: 60,

      assignedRoom: {
        create: [
          {
            publicId: "oqc8zcy0wybr1e8mvu9r",
            alt: "La Chambre 2",
            cover: true,
          },
        ],
      },
    },
  });
  const chambre4 = await prisma.room.upsert({
    where: { id: 6 },
    update: {},
    create: {
      title: "Chambre 4",
      description: `* 1 à 2 personnes, un grand lit. * Lavabo dans la chambre.
* Salle de Douche et WC sur le palier.
* Côté rivière. * Plateau de courtoisie`,
      price: 50,

      assignedRoom: {
        create: [
          {
            publicId: "oqc8zcy0wybr1e8mvu9r",
            alt: "La Chambre 4",
            cover: true,
          },
        ],
      },
    },
  });
  const chambre5 = await prisma.room.upsert({
    where: { id: 7 },
    update: {},
    create: {
      title: "Chambre 5",
      description: `* 1 à 3 personnes, un grand lit et un petit lit.
* Salle de Douche et WC dans la chambre.
* Côté rivière. * Plateau de courtoisie.`,
      price: 50,

      assignedRoom: {
        create: [
          {
            publicId: "oqc8zcy0wybr1e8mvu9r",
            alt: "La Chambre 5",
            cover: true,
          },
        ],
      },
    },
  });

  //// USERS ROOM
  const userRoomJack = await prisma.userRoom.upsert({
    where: { id: 3 },
    update: {},
    create: {
      firstName: "Jacky",
      name: "Russel",
      phone: "(+33) 00 00 00 00 00",
      reservationDates: {
        create: [
          {
            assignedToRoomId: 3,
            checkIn: new Date("2024-04-20T00:00"),
            checkOut: new Date("2024-04-22T00:00"),
            status: "OCCUPIED",
          },
          {
            assignedToRoomId: 3,
            checkIn: new Date("2024-05-20T00:00"),
            checkOut: new Date("2024-05-23T00:00"),
            status: "OCCUPIED",
          },
        ],
      },
    },
    include: {
      reservationDates: true,
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
          assignedToRoomId: 4,
          checkIn: new Date("2024-06-10T00:00"),
          checkOut: new Date("2024-06-13T00:00"),
        },
      },
    },
    include: {
      reservationDates: true,
    },
  });
  const userRoomHelen = await prisma.userRoom.upsert({
    where: { id: 3 },
    update: {},
    create: {
      firstName: "Helen",
      name: "Avré",
      phone: "(+33) 10 20 30 40 50",
      reservationDates: {
        create: {
          assignedToRoomId: 5,
          checkIn: new Date("2024-04-01T00:00"),
          checkOut: new Date("2024-04-02T00:00"),
        },
      },
    },
    include: {
      reservationDates: true,
    },
  });

  const seeImages = await prisma.image.findMany({});
  console.log({
    //  userRoomJack,
    //   userRoomBob,
    //   userRoomHelen,
    menuDuJour,
    menuSalads,
    menuPlats,
    chambre1,
    chambre2,
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
