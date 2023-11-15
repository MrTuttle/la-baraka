-- AlterTable
ALTER TABLE `Image` ADD COLUMN `assignedToRecetteId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Recette` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_assignedToRecetteId_fkey` FOREIGN KEY (`assignedToRecetteId`) REFERENCES `Recette`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
