'use client'

import React from 'react';
import {
  Divider, Typography, Box, Button
} from '@mui/material';

export default function Card() {
  return (
    <Box>
      <Box sx={{
        maxWidth: '381px',

        borderRadius: '16px 16px 0 0',
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
          <Typography>Presencial</Typography>
          <Divider orientation="vertical" flexItem/>
          <Typography>Manhã</Typography>
        </Box>

        <Box sx={{
          backgroundColor: 'primary.main',
          padding: '24px 16px',

          color: 'primary.contrastText',
        }}>
          <Typography sx={{fontSize: '16px', fontWeight: '500', marginBottom: '4px'}}>
            De <span style={{textDecoration: 'line-through'}}>R$ 4.752,00</span> por até
          </Typography>

          <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'end', gap: '8px',}}>
            <Typography sx={{fontSize: '16px', fontWeight: '500', lineHeight: '1.5'}}>
              18x
            </Typography>
            <Typography sx={(theme) => ({
              fontSize: '40px',
              fontWeight: '600',

              [theme.breakpoints.down('md')]: {
                fontSize: '36px',
              }
            })}>
              R$ 169,95
            </Typography>
          </Box>

          <Typography sx={{fontSize: '14px', fontWeight: '500'}}>
            à vista R$ 2.613,60
          </Typography>

          <Button variant="contained" color="secondary" sx={{mt: '24px'}}>
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
        borderRadius: '0 0 16px 16px',

        border: "1px solid",
        borderColor: "primary.main",
      }}>
        <Typography sx={{fontSize: '14px', fontWeight: '500', color: 'text.primary', textTransform: "uppercase"}}>
          campinas - vila industrial
        </Typography>

        <Typography sx={{fontSize: '14px', fontWeight: '400', color: 'text.secondary', textTransform: "uppercase"}}>
          rua dr. sales de oliveira, nº 1661 - vila industrial - camp...
        </Typography>
      </Box>
    </Box>
  )
}