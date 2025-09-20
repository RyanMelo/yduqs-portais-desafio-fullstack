/*
  Warnings:

  - You are about to drop the `Matricula` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Matricula";

-- CreateTable
CREATE TABLE "public"."Enrollment" (
    "id" TEXT NOT NULL,
    "totalValue" MONEY NOT NULL,
    "numberOfInstallments" INTEGER NOT NULL,
    "documentNumber" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "highSchoolGraduation" INTEGER NOT NULL,
    "terms" BOOLEAN NOT NULL,
    "whatsAppNotifications" BOOLEAN,

    CONSTRAINT "Enrollment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Enrollment_documentNumber_key" ON "public"."Enrollment"("documentNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Enrollment_email_key" ON "public"."Enrollment"("email");
