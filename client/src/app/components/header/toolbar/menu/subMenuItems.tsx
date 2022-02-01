import { Box, Button, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { menuData } from "./menuData"
import Link from "next/link"

const SubMenuItems = () => {
  const router = useRouter()

  console.log(router.pathname.split("/"))

  const currentActiveItem = menuData.filter((item) => {
    console.log(item)
    return router.pathname.split("/")[1] === item.key
  })

  return (
    <>
      {currentActiveItem?.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "end",
            alignItems: "center",
            px: "80px",
            bgcolor: "lime.120",
            color: "#FFFFFFB2",
            height: "56px",
          }}
        >
          {currentActiveItem[0].subMenu?.map((sumMenuItem) => (
            <Link href="/blog/[category]" as={`/blog/${sumMenuItem.text}`}>
              <Button
                key={sumMenuItem.key}
                sx={{
                  marginLeft: "32px",
                  fontSize: "14px",
                  cursor: "pointer",
                  color:
                    router?.query?.category === sumMenuItem.text
                      ? "#FFF"
                      : "#FFFFFFB2",
                }}
              >
                {sumMenuItem.text}
              </Button>
            </Link>
          ))}
        </Box>
      ) : null}
    </>
  )
}

export default SubMenuItems
