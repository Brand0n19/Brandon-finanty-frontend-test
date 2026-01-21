import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { CreatePokemon } from '../pages/MyPokemons/Create/CreatePokemon';
import { useState } from 'react';
import { useThemeStore } from '../store/useThemeStore';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton, useTheme } from '@mui/material';

export const Navbar = () => {
  const navigate = useNavigate();
  const [createOpen, setCreateOpen] = useState<boolean>(false);
  const { mode, toggleTheme } = useThemeStore();
  const theme = useTheme();

  return (
    <AppBar position='sticky' sx={{ bgcolor: theme.palette.mode === 'dark' ? '#1e293b' : '#1a2233', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
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

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <IconButton onClick={toggleTheme} color="inherit">
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Button color="inherit" component={Link} to="#" onClick={() => navigate('/favorite')}>Favorite</Button>
            <Button color="inherit" component={Link} to="#" onClick={() => navigate('/mine')}>Mis Pokémons</Button>
            <Button
              color="primary"
              variant="contained"
              onClick={() => setCreateOpen(true)}
              sx={{ borderRadius: '8px', textTransform: 'none', fontWeight: 'bold' }}
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