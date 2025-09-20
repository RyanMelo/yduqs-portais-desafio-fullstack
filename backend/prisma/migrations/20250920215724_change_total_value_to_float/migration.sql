/*
  Warnings:

  - You are about to alter the column `totalValue` on the `Enrollment` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "public"."Enrollment" ALTER COLUMN "totalValue" SET DATA TYPE DOUBLE PRECISION;
