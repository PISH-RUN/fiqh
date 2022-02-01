import { Box } from "@mui/system"
import Header from "../header"

const AuthLayout = ({ children }: LayoutType) => {
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
          bgcolor: "#f5f5f5",
          display: "flex",
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default AuthLayout
