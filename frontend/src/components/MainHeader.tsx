import Image from 'next/image'

import { Box } from "@mui/material";

export default function MainHeader() {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '16px 88px',

      backgroundColor: 'background.default',
    }}>
      <Image
        src="/estacio-logo.svg"
        width={158}
        height={40}
        alt="logo-estacio"
      />
    </Box>
  )
}