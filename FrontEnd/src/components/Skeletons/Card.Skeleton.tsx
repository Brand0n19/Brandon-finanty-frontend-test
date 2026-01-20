import { Box, Skeleton } from '@mui/material';
import { StatItem, StatsContainer, StyledCard } from '../../styles/cards.style';


export const CardSkeleton = () => {
  return (
    <StyledCard elevation={0}>
      {/* Skeleton para el ID (#001) */}
      <Skeleton 
        variant="text" 
        width={40} 
        sx={{ position: 'absolute', top: 15, right: 20, bgcolor: 'rgba(255,255,255,0.05)' }} 
      />
      
      {/* Skeleton para la imagen del Pokémon */}
      <Skeleton 
        variant="circular" 
        width={140} 
        height={140} 
        sx={{ mx: 'auto', mt: 2, bgcolor: 'rgba(255,255,255,0.1)' }} 
      />

      <Box textAlign="center" mt={2}>
        {/* Skeleton para el nombre */}
        <Skeleton 
          variant="text" 
          width="70%" 
          height={40} 
          sx={{ mx: 'auto', bgcolor: 'rgba(255,255,255,0.05)' }} 
        />
        
        {/* Skeletons para los chips de tipos */}
        <Box display="flex" justifyContent="center" gap={1} mt={1}>
          <Skeleton variant="rounded" width={60} height={24} sx={{ bgcolor: 'rgba(255,255,255,0.05)' }} />
          <Skeleton variant="rounded" width={60} height={24} sx={{ bgcolor: 'rgba(255,255,255,0.05)' }} />
        </Box>
      </Box>

      {/* Skeleton para la sección de Market Data */}
      <StatsContainer>
        {[1, 2, 3].map((i) => (
          <StatItem key={i}>
            <Skeleton variant="text" width={40} sx={{ bgcolor: 'rgba(255,255,255,0.05)' }} />
            <Skeleton variant="text" width={50} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
          </StatItem>
        ))}
      </StatsContainer>
    </StyledCard>
  );
};