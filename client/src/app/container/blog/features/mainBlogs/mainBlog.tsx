import { useTheme } from "@mui/material"
import { Box, Icon, Typography } from "@mui/material"
import { Chat } from "react-iconly"

const MainBlog = ({
  imgUrl,
  tag,
  author,
  time,
  comments,
  title,
  description,
  variant,
  style,
}: BlogCardType) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: `linear-gradient(359.76deg, #130F26 0.23%, rgba(19, 15, 38, 0) 115.53%),url(${imgUrl}) center no-repeat`,
        backgroundSize: "cover",
        height: variant != "sm" ? "440px" : "218px",
        width: variant == "xl" ? "100%" : variant == "lg" ? "640px" : "317px",
        // width: "100%",
        borderRadius: "15px",
        m: "2px",
        justifyContent: "end",
        alignItems: "end",
        color: "#FFF",
        p: variant === "xl" ? "32px" : "25px",
        flexGrow: 1,
        [theme.breakpoints.down("md")]: {
          maxWidth: "343px",
          width: "100%",
          height: "237px",
        },
        ...style,
      }}
    >
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 500,
          bgcolor: "blue.main",
          borderRadius: "24px",
          p: "4px 8px",
          marginBottom: "10px",
          color: "#FFF",
        }}
      >
        {tag}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          marginBottom: "4px",
        }}
      >
        <Typography
          sx={{
            paddingLeft: "8px",
            color: "gray.150",
            fontSize: "14px",
            borderLeft: "1px solid #FFFFFF4D",
            fontWeight: 700,
          }}
        >
          {author}
        </Typography>
        <Typography
          sx={{
            px: "8px",
            color: "gray.150",
            fontSize: "14px",
            borderLeft: "1px solid #FFFFFF4D",
          }}
        >
          {time}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", px: "8px" }}>
          <Typography
            sx={{
              marginRight: "5px",
              color: "gray.150",
              fontSize: "14px",
            }}
          >
            ({comments.length})
          </Typography>
          <Icon
            component={Chat}
            set="light"
            primaryColor="#B9BBBE"
            sx={{ fontSize: "14.33px" }}
          />
        </Box>
      </Box>
      <Typography
        sx={{
          textAlign: "right",
          fontWeight: 800,
          fontSize: variant == "sm" ? "16px" : "20px",
          maxWidth: variant == "lg" ? "340px" : "unset",
          color: "#FFF",
        }}
      >
        {title}
      </Typography>
      {variant == "lg" || variant === "xl" || variant === "head" ? (
        <Typography
          sx={{
            color: "gray.150",
            textAlign: "right",
            direction: "rtl",
            fontWeight: 800,
            maxWidth: variant === "lg" ? "258px" : "490px",
            marginTop: "8px",
            textOverflow: variant === "xl" ? "ellipsis" : "unset",
            whiteSpace: variant === "xl" ? "nowrap" : "unset",
            overflow: variant === "xl" ? "hidden" : "unset",
            [theme.breakpoints.down("md")]: { display: "none" },
          }}
        >
          {description}
        </Typography>
      ) : null}
    </Box>
  )
}

export default MainBlog
