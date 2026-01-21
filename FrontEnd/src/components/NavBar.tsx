import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { CreatePokemon } from '../pages/MyPokemons/Create/CreatePokemon';
import { useState } from 'react';
import { useThemeStore } from '../store/useThemeStore';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const Navbar = () => {
  const navigate = useNavigate();
  const [createOpen, setCreateOpen] = useState<boolean>(false);
  const { mode, toggleTheme } = useThemeStore();

  const navActions = [
    { label: 'Favorite', path: '/favorite' },
    { label: 'Mis Pokémons', path: '/mine' },
  ];

  return (
    <AppBar position='sticky' sx={{ elevation: 0 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo */}
          <CatchingPokemonIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, cursor: 'pointer', fontWeight: 800, letterSpacing: '-0.02em' }}
            onClick={() => navigate('/pokemons')}
          >
            PokeList
          </Typography>

          {/* Desktop Menu - Hidden on Mobile */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            {navActions.map((action) => (
              <Button
                key={action.label}
                color="inherit"
                onClick={() => navigate(action.path)}
                sx={{ px: 2, opacity: 0.8, '&:hover': { opacity: 1 } }}
              >
                {action.label}
              </Button>
            ))}
            <Button
              color="primary"
              variant="contained"
              onClick={() => setCreateOpen(true)}
              sx={{ ml: 1, borderRadius: '12px', boxShadow: 'none' }}
            >
              Nuevo Pokémon
            </Button>
          </Box>

          {/* Theme Toggle Always Visible */}
          <Box sx={{ ml: 2 }}>
            <IconButton onClick={toggleTheme} color="inherit">
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
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