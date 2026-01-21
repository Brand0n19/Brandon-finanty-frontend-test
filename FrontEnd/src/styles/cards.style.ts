import { Box, Card, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

export const StyledCard = styled(Card)(({ theme }) => {
  const isDark = theme.palette.mode === 'dark';

  return {
    backgroundColor: isDark ? theme.palette.background.paper : '#FFFFFF',
    borderRadius: '35px',
    padding: theme.spacing(3),
    position: 'relative',
    transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
    cursor: 'pointer',
    overflow: 'hidden',
    border: `1px solid ${isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'}`,
    boxShadow: isDark
      ? '0 4px 20px rgba(0,0,0,0.4)'
      : '0 4px 20px rgba(0,0,0,0.05)',

    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: isDark
        ? '0 12px 30px rgba(0,0,0,0.6)'
        : '0 12px 30px rgba(0,0,0,0.08)',
      '& .MuiCardMedia-root': {
        transform: 'scale(1.08)',
      },
    },

    '& .MuiCardMedia-root': {
      transition: 'transform 0.4s ease',
      objectFit: 'contain',
    },
  };
});

export const PokemonNumber = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: 24,
  right: 28,
  color: theme.palette.text.secondary,
  opacity: 0.2,
  fontWeight: 800,
  fontSize: '1.4rem',
  fontFamily: '"Outfit", sans-serif',
}));

export const StatsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: theme.spacing(3),
  paddingTop: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

export const StatItem = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});