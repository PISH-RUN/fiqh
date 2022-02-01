import { Box, Typography } from "@mui/material"
import BlogCard from "src/app/container/blog/features/blogCard"
import data from "./footerBlogsData.json"

const FooterBlogs = ({ title }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "410px",
        width: "100%",
        alignItems: "end",
      }}
    >
      <Typography
        sx={{
          color: "white.dark",
          fontWeight: 800,
          fontSize: "18px",
          marginBottom: "25px",
        }}
      >
        {title}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {data.map((blog, i) => (
          <BlogCard {...blog} variant="footer" key={i} />
        ))}
      </Box>
    </Box>
  )
}

export default FooterBlogs
