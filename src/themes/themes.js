import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#4167B2'
    }
  }
});

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#000'
    },
    background: {
      default: '#F1F1F1'
    },
    tonalOffset: 0.3,
    contrastThreshold: 3
  }
});

const greenTheme = createTheme({
  palette: {
    type: 'green',
    primary: {
      main: '#009688'
    }
  }
});

export const themes = {
  light: lightTheme,
  dark: darkTheme,
  green: greenTheme
};
