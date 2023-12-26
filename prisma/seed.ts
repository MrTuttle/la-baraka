import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const clearReservations = await prisma.reservation.deleteMany({});
  const clearImages = await prisma.image.deleteMany({});
  const clearRooms = await prisma.room.deleteMany({});
  const chambrebleue = await prisma.room.upsert({
    where: { id: 0 },
    update: {},
    create: {
      title: "Chambre Bleue",
      description: "3 lits, salle de bain",
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
      reservationDates: {
        create: {
          date: new Date("2023-12-24T00:00"),
        },
      },
    },
  });
  const chambrejaune = await prisma.room.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: "Chambre Jaune",
      description: "3 lits, salle de bain",
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
      reservationDates: {
        create: [
          {
            date: new Date("2023-12-24T00:00"),
          },
          {
            date: new Date("2023-12-25T00:00"),
          },
        ],
      },
    },
  });
  const seeImages = await prisma.image.findMany({});
  console.log({ chambrebleue, chambrejaune, seeImages });
  const seeReservations = await prisma.reservation.findMany({});
  console.log("reservations :");
  console.log(seeReservations);
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
