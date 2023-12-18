/*
  Warnings:

  - You are about to alter the column `price` on the `Room` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `Room` MODIFY `price` DOUBLE NULL;
