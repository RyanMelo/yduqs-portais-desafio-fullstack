'use client';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  ThemeProvider,
  Alert,
  Typography
} from '@mui/material';
import theme from '@/theme';

interface ErrorModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string | string[];
}

export default function ErrorModal({open, onClose, title, message}: ErrorModalProps) {
  return (
    <ThemeProvider theme={theme}>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Alert severity="warning">
            {Array.isArray(message) ? (
              message.map((msg, index) => (
                <Typography key={index}>{msg}</Typography>
              ))
            ) : (
              <Typography>{message}</Typography>
            )}
          </Alert>
        </DialogContent>

        <DialogActions
          sx={(theme) => ({
            justifyContent: 'right',
            paddingRight: '24px',
            paddingLeft: '24px',

            [theme.breakpoints.down('md')]: {
              justifyContent: 'center',
            }
          })}
        >
          <Button
            onClick={onClose}
            color="primary"
            variant="contained"
            sx={{maxWidth: '200px', borderRadius: '8px'}}
          >
            Ok, Entendi!
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
