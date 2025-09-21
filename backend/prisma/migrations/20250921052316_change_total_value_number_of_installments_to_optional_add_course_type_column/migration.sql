/*
  Warnings:

  - Added the required column `courseType` to the `Enrollment` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."CourseType" AS ENUM ('INPERSON', 'DISTANCE');

-- AlterTable
ALTER TABLE "public"."Enrollment" ADD COLUMN     "courseType" "public"."CourseType" NOT NULL,
ALTER COLUMN "totalValue" DROP NOT NULL,
ALTER COLUMN "numberOfInstallments" DROP NOT NULL;
