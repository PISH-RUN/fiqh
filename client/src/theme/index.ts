import { createTheme } from "@mui/material"

declare module "@mui/material/styles" {
  interface Palette {
    gray: Palette["primary"]
    lime: Palette["primary"]
    white: Palette["primary"]
    blue: Palette["primary"]
  }
  interface PaletteOptions {
    gray: PaletteOptions["primary"]
    lime: PaletteOptions["primary"]
    white: PaletteOptions["primary"]
    blue: PaletteOptions["primary"]
  }

  interface PaletteColor {
    120?: string
    150?: string
    250?: string
    35?: string
    70?: string
    center?: string
  }
  interface SimplePaletteColorOptions {
    120?: string
    150?: string
    250?: string
    35?: string
    70?: string
    center?: string
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    gray: true
    lime: true
    white: true
    blue: true
  }
}
declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    gray: true
    lime: true
    white: true
  }
}

const theme = createTheme({
  palette: {
    gray: {
      dark: "#130F26",
      main: "#5B6167",
      center: "#909096",
      120: "#78787D",
      70: "#46464B",
      35: "#232326",
      150: "#B9BBBE",
      250: "#8A8E93",
    },
    lime: {
      main: "#00664A",
      120: "#004F39",
    },
    blue: {
      main: "#007BFF",
    },
    white: {
      main: "#FFF",
      light: "#FFF",
      dark: "#F5F5F5",
    },
  },
  typography: {
    fontFamily: ["IRANYekan", "serif"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "24px",
          boxShadow: "none",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          textAlign: "right",
          color: "#5B6167",
          direction: "rtl",
        },
      },
    },
  },
})

export default theme
