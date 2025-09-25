'use client';

import React, { useCallback, useState } from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import CourseDetailsDrawer from './ui/CourseDetailsDrawer';
import Card from "@/components/ui/Card";
import { Course } from "@/types/Courses";
import { usePaymentSelectedStore } from "@/store/courseStore";
import { useRouter } from "next/navigation";

const courses: Course[] = [
  {
    id: "1",
    cardType: "WithPrice",
    modality: "INPERSON",
    round: "Presencial",
    discountPrice: "4.752,00",
    installments: "18",
    installmentsPrice: "169,95",
    spotPrice: "2.613,60",
    address: "AMPINAS - VILA INDUSTRIAL",
    street: "RUA DR. SALES DE OLIVEIRA, Nº 1661 - VILA INDUSTRIAL - CAMP...",
    pricesTable: [
      {installments: 1, amount: 2613.6, total: 2613.60},
      {installments: 3, amount: 900.90, total: 2702.70},
      {installments: 6, amount: 465.30, total: 2791.80},
      {installments: 9, amount: 320.10, total: 2880.90},
      {installments: 12, amount: 247.5, total: 2946.00},
      {installments: 15, amount: 200.97, total: 3014.55},
      {installments: 18, amount: 169.95, total: 3059.10},
    ]
  },
  {
    id: "2",
    cardType: "WithDescription",
    modality: "DISTANCE",
    address: "BARRA DA TIJUCA - TOM JOB...",
    street: "AV. DAS AMÉRICAS, 4.200, BLOCO 11 - BARRA DA TIJUCA...",
    description: "Inscreva-se para saber tudo sobre os valores e garantir a sua vaga!",
  },
];

export default function CardsSection() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState<string>('');

  const navigation = useRouter()
  const setPaymentOption = usePaymentSelectedStore((state) => state.setPaymentOption);

  const handleCardClick = (card: Course) => {
    setSelectedCourse(card);
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setSelectedCourse(null);
    setPaymentOption(undefined);
  };

  const handleNextStep = useCallback(() => {
    const price = selectedCourse?.pricesTable?.find((plan) => plan.installments === Number(selectedPaymentOption))

    if (selectedCourse && selectedCourse.modality === 'DISTANCE') {
      setPaymentOption({
        courseType: selectedCourse?.modality,
        numberOfInstallments: null,
        totalValue: null,
      })

      navigation.push('/matricula')
    } else if (price && selectedCourse && selectedCourse.modality === 'INPERSON') {
      setPaymentOption({
        courseType: selectedCourse.modality,
        numberOfInstallments: price.installments,
        totalValue: price.total,
      })

      navigation.push('/matricula')
    }
  }, [navigation, selectedCourse, selectedPaymentOption, setPaymentOption])

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
        {courses.map((course) => (
          <Card
            key={course.id}
            course={course}
            onClick={() => handleCardClick(course)}
          />
        ))}
      </Box>

      <CourseDetailsDrawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        courseModalitySelected={selectedCourse?.modality}
        paymentOptions={selectedCourse?.pricesTable}
        selectedPayment={selectedPaymentOption}
        setSelectedPayment={setSelectedPaymentOption}
        onNext={handleNextStep}
      />
    </>
  )
}
