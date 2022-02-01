import { Box, Typography } from "@mui/material"
import { useRouter } from "next/router"
import Archive from "../features/archive"
import BlogCard from "../features/blogCard"
import DailyVideo from "../features/dailyVideo"
import MainBlog from "../features/mainBlogs/mainBlog"
import MostVisitedBlogs from "../features/mostVisitedBlogs"
import MostVisitedBlogs2 from "../features/mostVisitedBlogs2"
import data from "./catBlogData.json"

const BlogCategory = () => {
  const items = [
    "پردازنده 6 هسته ای",
    "پردازنده 6 هسته ای",
    "پردازنده 6 هسته ای",
    "پردازنده 6 هسته ای",
    "پردازنده 6 هسته ای",
    "پردازنده 6 هسته ای",
    "پردازنده 6 هسته ای",
    "پردازنده 6 هسته ای",
  ]
  const router = useRouter()
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          marginRight: "35px",
        }}
      >
        <MostVisitedBlogs />
        <DailyVideo />
        <Box sx={{ marginTop: "40px" }}>
          <MostVisitedBlogs2 />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          flexGrow: 2,
          maxWidth: "843px",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            color: "gray.dark",
            fontWeight: 800,
            fontSize: "30px",
            marginBottom: "24px",
          }}
        >
          {router.query.category}
        </Typography>
        <MainBlog
          variant="head"
          {...data[0]}
          style={{ width: "100%", height: "440px" }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            m: "24px 0 36px 0",
            paddingBottom: "40px",
            borderBottom: "1px solid #D0D2D4",
          }}
        >
          <BlogCard {...data[2]} variant="head" />
          <BlogCard {...data[3]} variant="head" />
        </Box>
        <Archive variant="cat" />
      </Box>
    </Box>
  )
}

BlogCategory.layout = "main"

export default BlogCategory
