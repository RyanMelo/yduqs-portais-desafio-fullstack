'use client';

import { alpha, Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Footer() {
  return (
    <Box sx={(theme) => ({
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px 88px',
      backgroundColor: alpha(theme.palette.primary.dark, 0.9),

      [theme.breakpoints.down('md')]: {
        alignItems: 'start',
        flexDirection: 'column',
        padding: '16px 16px 24px 16px',
        gap: '40px'
      }
    })}>
      <Image
        src="/estacio-white.svg"
        width={158}
        height={40}
        alt="logo-estacio"
      />

      <Box sx={(theme) => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '56px',

        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
          gap: '16px',
        }
      })}>
        <Box display="flex" flexDirection="row" alignItems="center" gap="12px">
          <Image
            src="/phone-icon.svg"
            width={40}
            height={40}
            alt="phone-icon"
          />

          <Typography sx={{
            fontWeight: 600,
            fontStyle: "semibold",
            fontSize: '16px',
            color: 'primary.contrastText',
          }}>
            0800 771 5055
          </Typography>
        </Box>

        <Box display="flex" flexDirection="row" alignItems="center" gap="12px">
          <Image
            src="/whats-icon.svg"
            width={40}
            height={40}
            alt="whats-icon"
          />

          <Typography sx={{
            fontWeight: 600,
            fontStyle: "semibold",
            fontSize: '16px',
            color: 'primary.contrastText',
          }}>
            Precisa de ajuda?
          </Typography>
        </Box>

      </Box>
    </Box>
  )
}
