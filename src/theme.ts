import { createTheme } from '@mui/material/styles';

// Light Mode Palette
const lightPalette = {
  primary: {
    main: '#1976d2', // A standard blue
  },
  secondary: {
    main: '#dc004e', // A standard pink
  },
  background: {
    default: '#f4f6f8',
    paper: '#ffffff',
  },
  text: {
    primary: '#333333',
    secondary: '#555555',
  },
};

// Dark Mode Palette
const darkPalette = {
  primary: {
    main: '#90caf9', // A lighter blue for dark background
  },
  secondary: {
    main: '#f48fb1', // A lighter pink for dark background
  },
  background: {
    default: '#121212',
    paper: '#1e1e1e',
  },
  text: {
    primary: '#ffffff',
    secondary: '#bbbbbb',
  },
};

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'light' ? lightPalette : darkPalette),
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      h4: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 600,
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            boxShadow: '0 2px 4px -1px rgba(0,0,0,0.06), 0 4px 5px 0 rgba(0,0,0,0.04), 0 1px 10px 0 rgba(0,0,0,0.04)',
          }),
        }
      }
    }
  });
