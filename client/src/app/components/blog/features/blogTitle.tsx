import { Box } from "@mui/material"

const BlogTitle = ({ text, leftElement, variant }: BlogTitle) => {
  return (
    <Box
      sx={{
        m: variant === "footer" ? "0" : "0 0 40px 0",
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {leftElement}
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          borderBottom:
            variant === "footer" ? "1px solid #2C343C" : "1px solid #D0D2D4",
          m: "15px",
        }}
      />
      <Box
        sx={{
          color: variant === "footer" ? "white.dark" : "gray.dark",
          fontSize: "20px",
          fontWeight: 800,
        }}
      >
        {text}
      </Box>
    </Box>
  )
}

export default BlogTitle
