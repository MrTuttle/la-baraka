/*
  Warnings:

  - Made the column `price` on table `Room` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Room` MODIFY `price` DOUBLE NOT NULL;
