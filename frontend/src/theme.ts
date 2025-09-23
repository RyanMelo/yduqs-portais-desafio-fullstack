'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-inter)',
    allVariants: {
      lineHeight: 1,
    },
  },
  palette: {
    primary: {
      main: "#144BC8",
      dark: "#001F66",
      light: "#0073FF",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#EE325D",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#28A745",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#121212",
      secondary: "#555555",
    },
    divider: "#E0E0E0",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-inter)',
          fontSize: '16px',
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 8,
          boxShadow: 'none',
          padding: '16px 24px',

          "&:hover": {
            boxShadow: 'none',
          },
        }
      }
    },
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
      },
      styleOverrides: {
        root: ({theme}) => ({
          marginLeft: 0,
          marginRight: 0,
          width: "100%",
          maxWidth: "100%",
          paddingLeft: 88,
          paddingRight: 88,

          [theme.breakpoints.down("md")]: {
            paddingLeft: 16,
            paddingRight: 16,
          },
        }),
      },
    },
  }
});

export default theme;