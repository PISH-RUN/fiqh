import BlogTitle from "@/components/blog/features/blogTitle"
import { Box, Typography, useTheme } from "@mui/material"
import data from "./tagData.json"

const Tag = ({ imgUrl, name }: TagType) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${imgUrl}) center no-repeat`,
        backgroundSize: "cover",
        width: "194px",
        height: "56px",
        borderRadius: "10px",
        bgcolor: "#130F2666",
        backgroundBlendMode: "multiply",
        color: "#FFF",
        marginBottom: "16px",
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>{name}#</Typography>
    </Box>
  )
}

const BlogTags = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", marginTop: "35px" }}>
      <BlogTitle text="موضوعات" />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {data.map((tag) => (
          <Tag {...tag} />
        ))}
      </Box>
    </Box>
  )
}

export default BlogTags
