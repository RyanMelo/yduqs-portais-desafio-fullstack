'use client'

import Image from 'next/image'
import { Box } from "@mui/material";

export default function MainHeader() {
  return (
    <Box sx={(theme) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '24px 88px',

      backgroundColor: 'background.default',

      [theme.breakpoints.down('md')]: {
        padding: '16px 16px',
      }

    })}>
      <Image
        src="/estacio-logo.svg"
        width={158}
        height={40}
        alt="logo-estacio"
      />
    </Box>
  )
}