import { BrowserRouter } from 'react-router'
import { ContentRouter } from './routes/content-router'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { useThemeStore } from './store/useThemeStore'
import { useMemo } from 'react'

function App() {
  const mode = useThemeStore((state) => state.mode);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'light' ? '#EF5350' : '#4ade80', // Pokedex Red or Cyber Green
            dark: '#D32F2F',
            contrastText: '#fff',
          },
          secondary: {
            main: '#3B4CCA', // Pokemon Blue
          },
          background: {
            default: mode === 'light' ? '#FDFDFD' : '#0a0f1a',
            paper: mode === 'light' ? '#FFFFFF' : '#161d2b',
          },
          text: {
            primary: mode === 'light' ? '#2D3436' : '#E0E0E0',
            secondary: mode === 'light' ? '#636E72' : '#94A3B8',
          },
        },
        shape: {
          borderRadius: 16,
        },
        typography: {
          fontFamily: '"Outfit", sans-serif',
          h2: {
            fontSize: '2.5rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            '@media (min-width:600px)': {
              fontSize: '3.5rem',
            },
          },
          h4: {
            fontWeight: 700,
            letterSpacing: '-0.01em',
          },
          h5: {
            fontWeight: 700,
          },
          button: {
            textTransform: 'none',
            fontWeight: 600,
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: '12px',
                padding: '8px 20px',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                },
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundImage: 'none',
                backdropFilter: 'blur(8px)',
                backgroundColor: mode === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(10, 15, 26, 0.8)',
                color: mode === 'light' ? '#2D3436' : '#fff',
                borderBottom: `1px solid ${mode === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'}`,
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename='finanty'>
        <ContentRouter />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
