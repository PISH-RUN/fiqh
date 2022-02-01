import { useState } from "react"
import { Box, Button } from "@mui/material"
import BlogTitle from "../../../../components/blog/features/blogTitle"
import popularData from "./popularBlogsData.json"
import BlogCard from "../blogCard"

const PopularBlogs = () => {
  const categories = ["همه", "امنیت", "تکنولوژی", "علوم", "سیاست"]
  const [activeCategory, setActiveCategory] = useState("همه")

  const leftTitle = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
      }}
    >
      {categories.map((cat) => (
        <Button
          color="white"
          sx={{
            color: activeCategory === cat ? "blue.main" : "gray.main",
            borderRight: activeCategory === cat ? "2px solid #007BFF" : "0",
            fontWeight: activeCategory === cat ? 800 : 400,
            fontSize: "14px",
            borderRadius: "0",
            height: "24px",
            px: "15px",
          }}
          onClick={() => setActiveCategory(cat)}
        >
          {cat}
        </Button>
      ))}
    </Box>
  )

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", marginBottom: "46px" }}
    >
      <BlogTitle text="محبوب ترین ها" leftElement={leftTitle} />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {popularData.map((blog, i) => (
          <BlogCard {...blog} key={i} variant="popular" />
        ))}
      </Box>
    </Box>
  )
}

export default PopularBlogs
