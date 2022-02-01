import { Box } from "@mui/material"
import Archive from "./features/archive"
import BestBlogs from "./features/bestBlogs"
import BestBlogs2 from "./features/bestBlogs2"
import BlogTags from "./features/blogTags"
import DailyVideo from "./features/dailyVideo"
import DiscussBlogs from "./features/discussBlogs"
import LastBlogs from "./features/lastBlogs"
import MainBlogs from "./features/mainBlogs"
import MostVisitedBlogs from "./features/mostVisitedBlogs"
import MostVisitedBlogs2 from "./features/mostVisitedBlogs2"
import NewestBlogs from "./features/newestBlogs"
import NewestBlogs2 from "./features/newestBlogs2"
import PopularBlogs from "./features/popularBlogs"
import SelectedBlogs from "./features/selectedBlogs"

const Blog = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <MainBlogs />
      <Box sx={{ display: "flex", my: "40px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "400px",
            width: "100%",
            marginRight: "35px",
          }}
        >
          <MostVisitedBlogs />
          <DailyVideo />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <NewestBlogs />
          <LastBlogs />
        </Box>
      </Box>
      <PopularBlogs />
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            minWidth: "410px",
            maxWidth: "410px",
            marginRight: "35px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <MostVisitedBlogs2 />
          <Box
            component="img"
            src="assets/images/ads.png"
            sx={{ width: "404px", height: "338px", marginTop: "26px" }}
          />
          <BlogTags />
          <DiscussBlogs />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <BestBlogs />
          <BestBlogs2 />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <NewestBlogs2 />
            <SelectedBlogs />
          </Box>
          <Archive />
        </Box>
      </Box>
    </Box>
  )
}

export default Blog
