/*
  Warnings:

  - You are about to alter the column `totalValue` on the `Enrollment` table. The data in that column could be lost. The data in that column will be cast from `Money` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE "public"."Enrollment" ALTER COLUMN "totalValue" SET DATA TYPE DECIMAL(65,30);
