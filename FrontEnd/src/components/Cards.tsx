import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { PokemonNumber, StyledCard } from '../styles/cards.style';
import type { ICard } from '../types/card.interface';
import { Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const Cards = ({ name, image, code, onClick, onDelete, onEdit }: ICard) => {
  return (
    <StyledCard 
      elevation={0} 
      onClick={onClick} 
      sx={{
        position: 'relative', 
        '&:hover .overlay-children': { opacity: 1 } 
      }}
    >
      <PokemonNumber className="pokemon-number">{code ? `#${code}` : "#0000"}</PokemonNumber>
      
      <CardMedia
        component="img"
        image={image}
        alt={name}
        sx={{ width: '100%', height: 380, objectFit: 'contain' }}
      />

      <Box textAlign="center" mt={2}>
        <Typography variant="h5" sx={{ fontWeight: 800 }}>{name}</Typography>
      </Box>
      {
        onDelete && (          
        <Box
          className="overlay-children"
          sx={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: 0, transition: 'opacity 0.3s ease',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }}
        >

          <Box sx={{ display: 'flex'}}>
            <DeleteIcon 
              sx={{ fontSize: 40, color: 'white', cursor: 'pointer' }} 
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
            />
          </Box>   
        </Box>
        )
      }
      {
        onEdit && (          
        <Box
          className="overlay-children"
          sx={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: 0, transition: 'opacity 0.3s ease',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }}
        >

          <Box sx={{ display: 'flex'}}>
            <EditIcon 
              sx={{ fontSize: 40, color: 'white', cursor: 'pointer' }} 
              onClick={(e) => {
                e.stopPropagation(); 
                onEdit();
              }}
            />
          </Box>   
        </Box>
        )
      }
    </StyledCard>
  );
}