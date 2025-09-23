'use client'

import { Box, Typography } from "@mui/material";
import Card from "@/components/ui/Card";

export default function CardsSection() {
  return (
    <>
      <Typography sx={{fontSize: '14px', fontWeight: '400', marginBottom: '16px'}}>2 opções encontradas</Typography>

      <Box sx={(theme) => ({
        display: 'flex',
        flexDirection: 'row',
        gap: '24px',

        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
        }
      })}>
        <Card
          cardType="WithPrice"
          modality="INPERSON"
          round="Manhã"
          discountPrice="4.752,00"
          installments="18"
          installmentsPrice="169,95"
          spotPrice="2.613,60"
          address="CAMPINAS - VILA INDUSTRIAL"
          street="RUA DR. SALES DE OLIVEIRA, Nº 1661 - VILA INDUSTRIAL - CAMP..."
          onClick={() => null}
        />

        <Card
          cardType="WithDescription"
          modality="EAD"
          description="Inscreva-se para saber tudo sobre os valores e garantir a sua vaga!"
          address="BARRA DA TIJUCA - TOM JOB..."
          street="AV. DAS AMÉRICAS, 4.200, BLOCO 11 - BARRA DA TIJUCA..."
          onClick={() => null}
        />
      </Box>
    </>
  )
}