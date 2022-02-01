import BlogTitle from "@/components/blog/features/blogTitle"
import { Box } from "@mui/material"
import BlogCardV2 from "../blogCard/blogCardV2"
import { mostVisitedData } from "../mostVisitedBlogs/mostVisitedData"

const MostVisitedBlogs2 = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <BlogTitle text="پر بازدید ترین ها" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {mostVisitedData.map((blog) => (
          <BlogCardV2 {...blog} />
        ))}
      </Box>
    </Box>
  )
}

export default MostVisitedBlogs2
