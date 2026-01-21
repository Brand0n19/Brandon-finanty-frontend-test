import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import type { IModalProps } from '../types/modal.interface';

export const Modal = ({ open , title, onDismiss, children, onClickSuccess, successButtonText }: IModalProps) => {
  return (
    <Dialog 
      open={open} 
      onClose={onDismiss}
      fullWidth
      maxWidth="sm" 
    >

      <DialogTitle component="div" sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6"  component="span" sx={{ fontWeight: 'inherit' }}>{title}</Typography>
        <IconButton onClick={onDismiss}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>


      <DialogContent dividers>
        <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {children}
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onDismiss} color="inherit">
          Cancel
        </Button>
        <Button onClick={onClickSuccess} variant="contained" color="primary">
          {successButtonText || "Accept"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}