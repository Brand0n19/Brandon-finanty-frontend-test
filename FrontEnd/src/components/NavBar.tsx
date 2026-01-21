import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'; 
import { CreatePokemon } from '../pages/MyPokemons/Create/CreatePokemon';
import { useState } from 'react';

export const Navbar = () => {
  const navigate = useNavigate();
  const [createOpen, setCreateOpen] = useState<boolean>(false);

  return (
    <AppBar position='sticky' sx={{ bgcolor: '#1a2233', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <CatchingPokemonIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#4ade80' }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, cursor: 'pointer', fontWeight: 'bold' }}
            onClick={() => navigate('/pokemons')}
          >
            PokeList
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" component={Link} to="#" onClick={() => navigate('/favorite')}>Favorite</Button>
            <Button color="inherit" component={Link} to="#" onClick={() => navigate('/mine')}>Mis Pokémons</Button>
            <Button 
              color="primary"  
              onClick={() => setCreateOpen(true)}
              sx={{ borderRadius: '8px', textTransform: 'none' }}
            >
              Nuevo Pokémon
            </Button>
          </Box>
        </Toolbar>
      </Container>

      <CreatePokemon 
        open={createOpen}
        onClose={() => setCreateOpen(false)}
      />
    </AppBar>
  );
};