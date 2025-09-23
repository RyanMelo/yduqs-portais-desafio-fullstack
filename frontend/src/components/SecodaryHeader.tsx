'use client'

import { Box, Typography } from "@mui/material";

type SecodaryHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function SecodaryHeader({title, subtitle}: SecodaryHeaderProps) {
  return (
    <Box sx={(theme) => ({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'start',
      padding: '40px 88px',
      gap: '8px',

      color: 'primary.contrastText',
      backgroundColor: 'primary.main',

      [theme.breakpoints.down('md')]: {
        padding: '24px 16px',
      }
    })}>
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        sx={(theme) => ({
          fontFamily: 'var(--font-monteserrat)',
          fontWeight: '500',
          fontSize: '32px',
          leder: 'none',

          [theme.breakpoints.down('md')]: {
            fontSize: '24px',
          }
        })}
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant="body1"
          component="p"
          gutterBottom
          sx={{
            fontWeight: '400',
            fontSize: '16px',
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  )
}