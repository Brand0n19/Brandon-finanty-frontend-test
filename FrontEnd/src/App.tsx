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
            main: '#4ade80',
          },
          background: {
            default: mode === 'light' ? '#f5f7fa' : '#0f172a',
            paper: mode === 'light' ? '#ffffff' : '#1e293b',
          },
        },
        shape: {
          borderRadius: 12,
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h2: {
            fontSize: '2rem',
            fontWeight: 700,
            '@media (min-width:600px)': {
              fontSize: '3rem',
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
