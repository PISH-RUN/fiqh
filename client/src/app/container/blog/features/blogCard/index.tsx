import { Box, Icon, Typography } from "@mui/material"
import { Chat } from "react-iconly"
import Link from "next/link"

const BlogCard = ({
  imgUrl,
  tag,
  author,
  time,
  comments,
  title,
  description,
  variant,
  style,
  index,
}: BlogCardType) => {
  return (
    <Link href="/blog/single/[blogId]" as="/blog/single/blog">
      <Box
        sx={{
          display: "flex",
          flexDirection:
            variant == "newest" || variant === "head" || variant === "popular"
              ? "column"
              : "row-reverse",
          maxWidth:
            variant == "newest"
              ? "270px"
              : variant === "head" || variant === "best"
              ? "410px"
              : variant === "popular"
              ? "237px"
              : "100%",
          width: "100%",
          alignItems: "center",
          borderBottom:
            index == 1 ||
            index == 2 ||
            variant === "discuss" ||
            variant === "archive"
              ? "1px solid #D0D2D4"
              : variant === "footer"
              ? "1px solid #5B61674D"
              : "0",
          marginBottom:
            index == 1 ||
            index == 2 ||
            variant === "discuss" ||
            variant === "footer" ||
            variant === "archive"
              ? "16px"
              : "unset",

          "&:last-child": {
            borderBottom: variant === "archive" ? "1px solid #D0D2D4" : "0",
          },
          ...style,
        }}
      >
        <Box
          sx={{
            width:
              variant == "newest" || variant === "head" || variant === "popular"
                ? "100%"
                : variant === "best-head"
                ? "411px"
                : variant === "archive"
                ? "380px"
                : "140px",
            minWidth:
              variant == "newest" || variant === "head" || variant === "popular"
                ? "100%"
                : variant === "best-head"
                ? "411px"
                : variant === "archive"
                ? "380px"
                : "140px",
            minHeight:
              variant == "newest"
                ? "192px"
                : variant == "head"
                ? "250px"
                : variant === "popular"
                ? "160px"
                : variant === "best-head"
                ? "237px"
                : variant === "archive"
                ? "200px"
                : "88px",
            marginBottom: "16px",
            borderRadius: "15px",
            background: `url(${imgUrl}) center no-repeat`,
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            color: "#FFF",
            marginLeft: variant == "newest" || variant == "head" ? "0" : "15px",
          }}
        >
          {variant == "head" ||
          variant === "newest" ||
          variant === "popular" ||
          variant === "archive" ? (
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 500,
                bgcolor: "blue.main",
                borderRadius: "24px",
                p: "4px 8px",
                m: "0 16px 16px 0",
              }}
            >
              {tag}
            </Typography>
          ) : null}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: variant == "head" ? "40px" : "0",
            alignItems: "end",
          }}
        >
          {variant === "best-head" ? (
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 500,
                bgcolor: "blue.main",
                borderRadius: "24px",
                p: "4px 8px",
                marginBottom: "16px",
                color: "#FFF",
              }}
            >
              {tag}
            </Typography>
          ) : null}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              marginBottom:
                variant == "head" ||
                variant === "best-head" ||
                variant === "newest" ||
                variant === "archive"
                  ? "16px"
                  : "8px",
              color: variant === "footer" ? "#8A8E93" : "unset",
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
                borderLeft:
                  variant == "head" ||
                  variant === "best-head" ||
                  variant === "newest" ||
                  variant === "archive"
                    ? "1px solid #5B61674D"
                    : "0",
              }}
            >
              {time}
            </Typography>
            {variant == "head" ||
            variant === "best-head" ||
            variant === "newest" ||
            variant === "archive" ? (
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
                  primaryColor="#5B6167"
                  sx={{ fontSize: "14.33px" }}
                />
              </Box>
            ) : null}
          </Box>
          <Typography
            sx={{
              textAlign: "right",
              fontWeight: 800,
              marginBottom: "16px",
              fontSize: variant == "mostVisited" ? "14px" : "unset",
              maxHeight: "46px",
              overflow: "hidden",
              color: variant === "footer" ? "#FFF" : "gray.dark",
            }}
          >
            {title}
          </Typography>
          {variant == "head" ||
          variant === "best-head" ||
          variant === "newest" ||
          variant === "archive" ? (
            <Typography
              sx={{
                color: "gray.main",
                textAlign: "right",
                maxHeight: "46px",
                overflow: "hidden",
              }}
            >
              {description}
            </Typography>
          ) : null}
        </Box>
      </Box>
    </Link>
  )
}

export default BlogCard
