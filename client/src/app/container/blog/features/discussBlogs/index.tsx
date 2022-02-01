import BlogTitle from "@/components/blog/features/blogTitle"
import { Box } from "@mui/material"
import BlogCard from "../blogCard"
import data from "./discussData.json"

const DiscussBlogs = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", marginTop: "40px" }}>
      <BlogTitle text="پر بحث ترین ها" />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {data.map((blog, i) => (
          <BlogCard {...blog} key={i} variant="discuss" />
        ))}
      </Box>
    </Box>
  )
}

export default DiscussBlogs
