/*
  Warnings:

  - You are about to drop the column `date` on the `Reservation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[assignedToRoomId,checkIn]` on the table `Reservation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `checkIn` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `checkOut` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Reservation_assignedToRoomId_date_assignedToUserRoomId_key` ON `Reservation`;

-- AlterTable
ALTER TABLE `Reservation` DROP COLUMN `date`,
    ADD COLUMN `checkIn` DATE NOT NULL,
    ADD COLUMN `checkOut` DATE NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Reservation_assignedToRoomId_checkIn_key` ON `Reservation`(`assignedToRoomId`, `checkIn`);
