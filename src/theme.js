import { createMuiTheme } from "@material-ui/core/styles";

const colors = {
  primaryColor: "#087CDD",
  secondaryColor: "#DF1E2E"
};

let baseTheme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: colors.primaryColor
    },
    secondary: {
      main: colors.secondaryColor
    }
  },
  colors: {
    ...colors
  }
});

export const muiTheme = {
  ...baseTheme,
  overrides: {
    MuiTypography: {
      root: {
        overflowWrap: "break-word"
      }
    }
  }
};
