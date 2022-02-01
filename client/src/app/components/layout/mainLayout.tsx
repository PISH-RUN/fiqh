import { useTheme } from "@mui/material"
import { Box } from "@mui/system"
import Footer from "../footer"
import Header from "../header"

const MainLayout = ({ children }: LayoutType) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box
        sx={{
          width: "100%",
          flexGrow: 1,
          bgcolor: "#FFF",
          display: "flex",
          p: "32px 80px 80px 80px",
          [theme.breakpoints.down("md")]: {
            p: "19px 16px 0 16px",
          },
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default MainLayout
