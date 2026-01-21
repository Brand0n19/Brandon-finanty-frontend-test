import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { PokemonNumber, StyledCard } from '../styles/cards.style';
import type { ICard } from '../types/card.interface';
import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const Cards = ({ name, image, code, onClick, onDelete, onEdit }: ICard) => {
  return (
    <StyledCard
      elevation={0}
      onClick={onClick}
    >
      <PokemonNumber className="pokemon-number">{code ? `#${code.padStart(4, '0')}` : "#0000"}</PokemonNumber>

      <CardMedia
        component="img"
        image={image}
        alt={name}
        sx={{
          width: '100%',
          height: { xs: 380, md: 280 },
          p: { xs: 1, md: 2 },
          objectFit: 'contain'
        }}
      />

      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary' }}>{name}</Typography>
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          {onEdit && (
            <IconButton
              size="small"
              onClick={(e) => { e.stopPropagation(); onEdit(); }}
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
            >
              <EditIcon fontSize="small" />
            </IconButton>
          )}
          {onDelete && (
            <IconButton
              size="small"
              onClick={(e) => { e.stopPropagation(); onDelete(); }}
              sx={{ color: 'text.secondary', '&:hover': { color: 'error.main' } }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          )}
        </Box>
      </Box>
    </StyledCard>
  );
}