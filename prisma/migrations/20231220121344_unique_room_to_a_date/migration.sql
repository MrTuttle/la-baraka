/*
  Warnings:

  - A unique constraint covering the columns `[assignedToRoomId,date]` on the table `Reservation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Reservation_assignedToRoomId_date_key` ON `Reservation`(`assignedToRoomId`, `date`);
