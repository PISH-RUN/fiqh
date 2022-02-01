import { useTheme } from "@mui/material"
import { Box } from "@mui/material"
import MainBlog from "./mainBlog"
import { mainBlogData } from "./mainBlogData"

const MainBlogs = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        width: "100%",
        flexWrap: "wrap",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      <MainBlog {...mainBlogData[0]} variant="lg" />
      <MainBlog {...mainBlogData[1]} variant="md" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <MainBlog {...mainBlogData[2]} variant="sm" />
        <MainBlog {...mainBlogData[3]} variant="sm" />
      </Box>
    </Box>
  )
}

export default MainBlogs
