'use client';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  ThemeProvider,
} from '@mui/material';
import theme from '@/theme';

interface ErrorModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string | string[];
}

export default function ErrorModal({ open, onClose, title, message }: ErrorModalProps) {
  return (
    <ThemeProvider theme={theme}>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          {Array.isArray(message) ? (
            message.map((msg, index) => (
              <DialogContentText key={index}>{msg}</DialogContentText>
            ))
          ) : (
            <DialogContentText>{message}</DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary" autoFocus>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
