import { Box, Typography, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

interface Props {
  message: string;
  onRetry: () => void;
}

export const ErrorState = ({ message, onRetry }: Props) => (
  <Box 
    display="flex" 
    flexDirection="column" 
    alignItems="center" 
    justifyContent="center" 
    minHeight="300px"
    textAlign="center"
    gap={2}
  >
    <ErrorOutlineIcon sx={{ fontSize: 60, color: 'error.main' }} />
    <Typography variant="h6" color="text.secondary">
      {message || "No pudimos cargar los Pokémon"}
    </Typography>
    <Button 
      variant="outlined" 
      onClick={onRetry}
      sx={{ borderRadius: '20px', textTransform: 'none' }}
    >
      Intentar de nuevo
    </Button>
  </Box>
);