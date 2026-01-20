import { Box, Card, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

export const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#5e6d8f', 
  color: '#ffffff',
  borderRadius: '24px',
  padding: theme.spacing(3),
  position: 'relative',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)', 
  },
}));

export const PokemonNumber = styled(Typography)({
  position: 'absolute',
  top: 20,
  right: 24,
  color: 'rgba(255, 255, 255, 0.2)',
  fontWeight: 'bold',
  fontSize: '1.2rem',
});

export const StatsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: theme.spacing(3),
  paddingTop: theme.spacing(2),
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
}));

export const StatItem = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});