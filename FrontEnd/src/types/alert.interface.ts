export interface CustomAlertProps {
  open: boolean;
  message: string;
  status: 200 | 400 | 500; 
  onClose: () => void;
  autoHideDuration?: number; 
}
