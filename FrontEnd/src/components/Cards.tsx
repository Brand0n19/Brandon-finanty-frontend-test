
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { PokemonNumber, StyledCard } from '../styles/cards.style';
import type { ICard } from '../types/card.interface';
import { Box } from '@mui/material';



export const Cards = ({ name, image, code }: ICard) => {
  return (
    <StyledCard elevation={0}>
      <PokemonNumber>{code ? `#${code}` : "#0000"}</PokemonNumber>
      <CardMedia
        component="img"
        image={image}
        alt={name}
        sx={{
          width: '100%',
          height: 380,
          objectFit: 'contain',
          filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.3))'
        }}
      />

      <Box textAlign="center" mt={2}>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, textTransform: 'capitalize' }}>
          {name}
        </Typography>
      </Box>
    </StyledCard>
  );
}