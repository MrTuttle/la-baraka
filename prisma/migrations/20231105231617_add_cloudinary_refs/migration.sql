-- CreateTable
CREATE TABLE `Image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `publicId` VARCHAR(255) NOT NULL,
    `alt` VARCHAR(255) NOT NULL,
    `assignedToRoomId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_assignedToRoomId_fkey` FOREIGN KEY (`assignedToRoomId`) REFERENCES `Room`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
