"use client"
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { green, grey, lightGreen } from "@mui/material/colors";

const ThemeWrapper = (props) => {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Open Sans',
        color: grey[900],
      },
      h1: {
        fontFamily: 'Oswald'
      },
      h2: {
        fontFamily: 'Oswald'
      }
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            minWidth: '20rem',
            marginBottom: '1rem',
          }
        }
      }
    },
    palette: {
      primary: {
        main: green[700],
      },
      secondary: {
        main: lightGreen[200],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
}

export default ThemeWrapper
