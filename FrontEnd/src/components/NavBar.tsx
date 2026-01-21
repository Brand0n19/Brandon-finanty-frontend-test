import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, useTheme, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import MenuIcon from '@mui/icons-material/Menu';
import { CreatePokemon } from '../pages/MyPokemons/Create/CreatePokemon';
import { useState } from 'react';
import { useThemeStore } from '../store/useThemeStore';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const Navbar = () => {
  const navigate = useNavigate();
  const [createOpen, setCreateOpen] = useState<boolean>(false);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const { mode, toggleTheme } = useThemeStore();
  const theme = useTheme();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navActions = [
    { label: 'Favorite', path: '/favorite' },
    { label: 'Mis Pokémons', path: '/mine' },
  ];

  return (
    <AppBar position='sticky' sx={{ elevation: 0 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <CatchingPokemonIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'primary.main' }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, cursor: 'pointer', fontWeight: 800, letterSpacing: '-0.02em', display: { xs: 'none', md: 'flex' } }}
            onClick={() => navigate('/pokemons')}
          >
            PokeList
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {navActions.map((action) => (
                <MenuItem key={action.label} onClick={() => { handleCloseNavMenu(); navigate(action.path); }}>
                  <Typography textAlign="center">{action.label}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={() => { handleCloseNavMenu(); setCreateOpen(true); }}>
                <Typography textAlign="center" color="primary">Nuevo Pokémon</Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <CatchingPokemonIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'primary.main' }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, cursor: 'pointer', fontWeight: 800, letterSpacing: '-0.02em', display: { xs: 'flex', md: 'none' } }}
            onClick={() => navigate('/pokemons')}
          >
            PokeList
          </Typography>

          {/* Desktop Menu */}
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