import BlogTitle from "@/components/blog/features/blogTitle"
import { Box, Button } from "@mui/material"
import BlogCard from "../blogCard"
import MainBlog from "../mainBlogs/mainBlog"
import data from "./best2Data.json"

const BestBlogs2 = () => {
  const leftTitle = (
    <Button
      variant="contained"
      color="blue"
      sx={{ p: "8px 32px", color: "#FFF" }}
    >
      مشاهده همه
    </Button>
  )

  const headBlog = data[0]
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <BlogTitle text="برترین ها" leftElement={leftTitle} />
      <MainBlog {...headBlog} variant="xl" style={{ marginBottom: "24px" }} />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {data.map((blog, i) => {
          const b =
            i == 0 ? <></> : <BlogCard {...blog} variant="newest" key={i} />
          return b
        })}
      </Box>
    </Box>
  )
}

export default BestBlogs2
