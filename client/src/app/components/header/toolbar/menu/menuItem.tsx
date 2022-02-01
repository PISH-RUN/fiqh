import { Box } from "@mui/material"
import { useRouter } from "next/router"

const MenuItem = ({ text, route }: MenuItemType) => {
  const router = useRouter()
  // console.log(router.pathname.split("/")[1])
  // console.log(key)

  const isActive = router.pathname.split("/")[1] === route.split("/")[1]

  // console.log(router.pathname, route)
  const lib = "کتابخانه"

  return (
    <Box
      sx={{
        borderTop: isActive ? "3px solid #FFF" : "0",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "&:last-child": {
          borderLeft: "none",
        },
      }}
    >
      <Box
        sx={{
          px: "25px",
          color: isActive ? "#FFF" : "#FFFFFFB2",
          borderLeft: text === lib ? "0" : "1px solid #FFFFFF4D",

          cursor: "pointer",
          userSelect: "none",
          fontWeight: isActive ? 800 : 500,
        }}
        onClick={() => router.push(route)}
      >
        {text}
      </Box>
    </Box>
  )
}

export default MenuItem
