import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "src/theme"
import "../styles/global.css"
import "../styles/font-style.css"
import MainLayout from "@/components/layout/mainLayout"
import AuthLayout from "@/components/layout/authLayout"
import BlankLayout from "@/components/layout/blankLayout"

const layouts: any = {
  main: MainLayout,
  auth: AuthLayout,
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component?.layout ? layouts[Component.layout] : BlankLayout
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
