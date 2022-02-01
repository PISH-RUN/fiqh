import { Box, Button } from "@mui/material"
import { useEffect, useState } from "react"
import BlogCard from "../blogCard"
import BlogTitle from "../../../../components/blog/features/blogTitle"
import lastBlogData from "./lastBlogsData.json"

const LastBlogs = () => {
  const leftTitle = (
    <Button
      variant="contained"
      color="blue"
      sx={{ p: "8px 32px", color: "#FFF" }}
    >
      مشاهده همه
    </Button>
  )
  const data = lastBlogData
  const [headBlog, setHeadBlog] = useState<any>()

  useEffect(() => {
    setHeadBlog(data.shift())
  }, [])

  return (
    <Box sx={{ display: "flex", flexDirection: "column", my: "38px" }}>
      <BlogTitle text="آخرین مطالب" leftElement={leftTitle} />
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // flexGrow: 1,
            width: "410px",
            marginRight: "24px",
          }}
        >
          {data.map((blog, i) => (
            <BlogCard {...blog} key={i} variant="last" />
          ))}
        </Box>
        <BlogCard {...headBlog} variant="head" style={{ flexGrow: 1 }} />
      </Box>
    </Box>
  )
}

export default LastBlogs
