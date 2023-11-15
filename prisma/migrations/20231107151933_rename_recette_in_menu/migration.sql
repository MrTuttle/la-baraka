/*
  Warnings:

  - You are about to drop the column `assignedToRecetteId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the `Recette` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Image` DROP FOREIGN KEY `Image_assignedToRecetteId_fkey`;

-- AlterTable
ALTER TABLE `Image` DROP COLUMN `assignedToRecetteId`,
    ADD COLUMN `assignedToMenuId` INTEGER NULL;

-- DropTable
DROP TABLE `Recette`;

-- CreateTable
CREATE TABLE `Menu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_assignedToMenuId_fkey` FOREIGN KEY (`assignedToMenuId`) REFERENCES `Menu`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
