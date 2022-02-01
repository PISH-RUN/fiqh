import { Box } from "@mui/system"
import Toolbar from "./toolbar"
import SubMenuItems from "./toolbar/menu/subMenuItems"
import TopHeader from "./topHeader"

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TopHeader />
      <Toolbar />
      <SubMenuItems />
    </Box>
  )
}

export default Header
