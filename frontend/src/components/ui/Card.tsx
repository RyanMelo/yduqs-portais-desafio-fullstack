'use client'

import React from 'react';
import {
  Divider, Typography, Box, Button
} from '@mui/material';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import { Course } from "@/types/Courses";

type CardProps = {
  course: Course
  onClick: () => void,
}

export default function Card({course, onClick}: CardProps) {
  return (
    <Box>
      <Box sx={{
        maxWidth: '381px',

        borderRadius: '8px 8px 0 0',
        backgroundColor: 'primary.dark',
        boxShadow: 'none',
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'start',
          alignItems: 'center',
          padding: '8px 24px',
          gap: '8px',

          color: 'primary.contrastText',
          fontSize: '16px',
        }}>
          {course.modality === 'INPERSON' && (
            <>
              <Typography sx={{fontSize: '16px', fontWeight: '500'}}>Presencial</Typography>
              <Divider orientation="vertical" flexItem/>
              <Typography sx={{fontSize: '16px', fontWeight: '500'}}>{course.round}</Typography>
            </>
          )}

          {course.modality === 'DISTANCE' && (
            <Typography sx={{fontSize: '16px', fontWeight: '500'}}>Digital (EaD)</Typography>
          )}
        </Box>

        <Box sx={{
          backgroundColor: 'primary.main',
          padding: '24px 16px',

          color: 'primary.contrastText',
        }}>

          {course.cardType === "WithPrice" && (
            <>
              <Typography sx={{fontSize: '16px', fontWeight: '500', marginBottom: '4px'}}>
                De <span style={{textDecoration: 'line-through'}}>R$ {course.discountPrice}</span> por até
              </Typography>

              <Box
                sx={{display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'end', gap: '8px',}}>
                <Typography sx={{fontSize: '16px', fontWeight: '500', lineHeight: '1.5'}}>
                  {course.installments}x
                </Typography>
                <Typography sx={(theme) => ({
                  fontSize: '40px',
                  fontWeight: '600',

                  [theme.breakpoints.down('md')]: {
                    fontSize: '36px',
                  }
                })}>
                  R$ {course.installmentsPrice}
                </Typography>
              </Box>

              <Typography sx={{fontSize: '14px', fontWeight: '500'}}>
                à vista R$ {course.spotPrice}
              </Typography>
            </>
          )}

          {course.cardType === "WithDescription" && (
            <>
              <InfoOutlineIcon sx={{color: 'primary.contrastText', size: '24px', marginBottom: '8px'}}/>

              <Typography sx={{fontSize: '14px', fontWeight: '400'}}>
                {course.description}
              </Typography>
            </>
          )}

          <Button variant="contained" color="secondary" sx={{mt: '24px'}} onClick={onClick}>
            Avançar
          </Button>
        </Box>
      </Box>
      <Box sx={{
        maxWidth: '381px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'background.main',
        padding: '16px',
        gap: '4px',
        borderRadius: '0 0 8px 8px',

        border: "1px solid",
        borderColor: "primary.main",
      }}>
        <Typography sx={{fontSize: '14px', fontWeight: '500', color: 'text.primary', textTransform: "uppercase"}}>
          {course.address}
        </Typography>

        <Typography sx={{fontSize: '14px', fontWeight: '400', color: 'text.secondary', textTransform: "uppercase"}}>
          {course.street}
        </Typography>
      </Box>
    </Box>
  )
}