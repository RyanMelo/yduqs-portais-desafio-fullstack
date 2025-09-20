-- CreateTable
CREATE TABLE "public"."Matricula" (
    "id" TEXT NOT NULL,
    "valorTotal" MONEY NOT NULL,
    "quantidadeParcelas" INTEGER NOT NULL,
    "cpf" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "celular" TEXT NOT NULL,
    "anoConclusaoEnsinoMedio" INTEGER NOT NULL,
    "termos" BOOLEAN NOT NULL,
    "notificacoesWhatsApp" BOOLEAN,

    CONSTRAINT "Matricula_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Matricula_cpf_key" ON "public"."Matricula"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Matricula_email_key" ON "public"."Matricula"("email");
