import { Snackbar, Alert, type AlertColor } from '@mui/material';
import type { CustomAlertProps } from '../types/alert.interface';

export const CustomAlert = ({ 
  open, 
  message, 
  status, 
  onClose, 
  autoHideDuration = 4000 
}: CustomAlertProps) => {

  const getSeverity = (code: number): AlertColor => {
    if (code >= 200 && code < 300) return 'success';
    if (code >= 400 && code < 500) return 'warning';
    if (code >= 500) return 'error';
    return 'info';
  };

  return (
    <Snackbar 
      open={open} 
      autoHideDuration={autoHideDuration} 
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert 
        onClose={onClose} 
        severity={getSeverity(status)} 
        variant="filled" 
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};