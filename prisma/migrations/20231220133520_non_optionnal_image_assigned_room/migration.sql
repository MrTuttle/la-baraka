/*
  Warnings:

  - Made the column `assignedToRoomId` on table `Image` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Image` MODIFY `assignedToRoomId` INTEGER NOT NULL;
