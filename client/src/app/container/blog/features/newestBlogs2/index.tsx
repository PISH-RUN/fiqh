import BlogTitle from "@/components/blog/features/blogTitle"
import { Box } from "@mui/material"
import BlogCard from "../blogCard"
import data from "./newest2Data.json"

const NewestBlogs2 = () => {
  const headBlog = data[0]
  return (
    <Box sx={{ display: "flex", flexDirection: "column", marginTop: "53px" }}>
      <BlogTitle text="تازه ترین ها" />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "end" }}>
        <BlogCard
          {...headBlog}
          variant="head"
          style={{ marginBottom: "32px" }}
        />
        {data.map((blog, i) => {
          const b =
            i == 0 ? <></> : <BlogCard {...blog} variant="discuss" key={i} />
          return b
        })}
      </Box>
    </Box>
  )
}

export default NewestBlogs2
