// import type {} from '@mui/lab/themeAugmentation';
import { ThemeOptions, createTheme, responsiveFontSizes  } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#CC9304",
      contrastText: "#FFF",
    },
  },
  mixins: {
    toolbar: {
      minHeight: 80,
    },
  },
  typography: {
    fontFamily: ['Poppins', 'serif'].join(','),
  },
});

theme = responsiveFontSizes(theme);

export default createTheme(theme, {
  components: {
    MuiCardMedia: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(1.25),
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textUnderlineOffset: theme.spacing(1),
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
      defaultProps: {
        variant: 'contained',
        size: 'large',
        disableElevation: true,
      }
    }
  },
} as ThemeOptions);