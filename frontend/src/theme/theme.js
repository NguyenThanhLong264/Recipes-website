import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FF9800',
      light: '#FFB74D',
      dark: '#F57C00',
    },
    secondary: {
      main: '#F5E1C0',
      light: '#FFF3E0',
      dark: '#FFE0B2',
    },
    background: {
      default: '#FFF3E0',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#424242',
      secondary: '#757575',
    },
  },
  typography: {
    h4: {
      color: '#FF9800',
      fontWeight: 600,
    },
    h5: {
      color: '#FF9800',
      fontWeight: 500,
    },
    h6: {
      color: '#FF9800',
      fontWeight: 500,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          '&:hover': {
            borderColor: '#FF9800',
          },
        },
      },
    },
  },
});