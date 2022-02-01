import { Box, Typography } from "@mui/material"
import BlogCardV2 from "src/app/container/blog/features/blogCard/blogCardV2"
import data from "./footerBlogsData.json"

const FooterBlogsV2 = ({ title }: any) => {
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
        {data.map((blog, i) => {
          const b =
            i === 0 ? <></> : <BlogCardV2 {...blog} variant="footer" key={i} />
          return b
        })}
      </Box>
    </Box>
  )
}

export default FooterBlogsV2
