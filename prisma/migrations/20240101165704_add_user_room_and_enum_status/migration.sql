/*
  Warnings:

  - A unique constraint covering the columns `[assignedToRoomId,date,assignedToUserRoomId]` on the table `Reservation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `assignedToUserRoomId` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Reservation_assignedToRoomId_date_key` ON `Reservation`;

-- DropIndex
DROP INDEX `Reservation_assignedToRoomId_idx` ON `Reservation`;

-- AlterTable
ALTER TABLE `Reservation` ADD COLUMN `assignedToUserRoomId` INTEGER NOT NULL,
    ADD COLUMN `status` ENUM('OCCUPIED', 'VACANT', 'IN_PROGRESS') NOT NULL DEFAULT 'VACANT';

-- CreateTable
CREATE TABLE `UserRoom` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NOT NULL,
    `emailVerified` DATETIME(3) NULL,

    UNIQUE INDEX `UserRoom_email_key`(`email`),
    INDEX `UserRoom_id_idx`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Reservation_assignedToUserRoomId_idx` ON `Reservation`(`assignedToUserRoomId`);

-- CreateIndex
CREATE UNIQUE INDEX `Reservation_assignedToRoomId_date_assignedToUserRoomId_key` ON `Reservation`(`assignedToRoomId`, `date`, `assignedToUserRoomId`);
