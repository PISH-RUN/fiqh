import { Box, Icon, Typography } from "@mui/material"
import { Chat } from "react-iconly"

const BlogCardV2 = ({
  tag,
  title,
  author,
  comments,
  time,
  variant,
}: BlogCardV2Type) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        py: "24px",
        borderBottom:
          variant === "footer" ? "1px solid #5B61674D" : "1px solid #D0D2D4",
        alignItems: "end",
        "&:last-child": {
          borderBottom: "0",
        },
        "&:first-child": {
          paddingTop: "0",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 500,
          bgcolor: variant === "footer" ? "#292D32" : "#D0D2D4",
          borderRadius: "24px",
          p: "4px 8px",
          marginBottom: "8px",
          color: variant === "footer" ? "#FFF" : "gray.dark",
        }}
      >
        {tag}
      </Typography>
      <Typography
        sx={{
          textAlign: "right",
          fontWeight: 800,
          marginBottom: "8px",
          maxHeight: "46px",
          overflow: "hidden",
          color: variant === "footer" ? "#FFF" : "gray.dark",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          marginBottom: "12px",
        }}
      >
        <Typography
          sx={{
            paddingLeft: "8px",
            color: "gray.main",
            fontSize: "14px",
            borderLeft: "1px solid #5B61674D",
            fontWeight: 700,
          }}
        >
          {author}
        </Typography>
        <Typography
          sx={{
            px: "8px",
            color: "gray.main",
            fontSize: "14px",
            borderLeft: "1px solid #5B61674D",
          }}
        >
          {time}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", px: "8px" }}>
          <Typography
            sx={{
              marginRight: "5px",
              color: "gray.main",
              fontSize: "14px",
            }}
          >
            ({comments?.length})
          </Typography>
          <Icon
            component={Chat}
            set="light"
            primaryColor="#B9BBBE"
            sx={{ fontSize: "14.33px" }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default BlogCardV2
