import { Box } from "@mui/material"
import { menuData } from "./menuData"
import MenuItem from "./menuItem"

const Menu = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row-reverse",
        }}
      >
        {menuData.map((item) => (
          <MenuItem {...item} key={item.key} />
        ))}
      </Box>
      <Box
        component="img"
        src="/assets/images/fegh.png"
        sx={{ width: "77px" }}
      />
    </Box>
  )
}

export default Menu
