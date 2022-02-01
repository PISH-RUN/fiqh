import { Box, Button, Icon, Typography } from "@mui/material"
import Menu from "./menu"
import { User } from "react-iconly"
import { useRouter } from "next/router"

const Toolbar = () => {
  const router = useRouter()
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "80px",
        bgcolor: "lime.main",
        width: "100%",
        px: "80px",
      }}
    >
      <Button
        color="white"
        variant="contained"
        sx={{
          color: "lime.main",
          borderRadius: "24px",
          width: "168px",
          py: "12px",
        }}
      >
        <Icon component={User} set="light" primaryColor="#00664A" />
        <Typography
          sx={{ paddingLeft: "12px" }}
          onClick={() => router.push("/auth/login-register")}
        >
          ورود/عضویت
        </Typography>
      </Button>
      <Menu />
    </Box>
  )
}

export default Toolbar
