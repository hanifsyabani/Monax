/*
  Warnings:

  - Added the required column `price` to the `Plans` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `plans` ADD COLUMN `price` VARCHAR(191) NOT NULL;
