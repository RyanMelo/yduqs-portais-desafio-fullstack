/*
  Warnings:

  - Added the required column `name` to the `Enrollment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Enrollment" ADD COLUMN     "name" TEXT NOT NULL;
