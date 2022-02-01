import BlogTitle from "@/components/blog/features/blogTitle"
import { useTheme } from "@mui/material"
import { Box, Icon, Typography } from "@mui/material"
import { Chat, Play } from "react-iconly"
import video from "./dailyVideoData.json"

const DailyVideo = () => {
  const data = video
  const {
    imgUrl,
    tag,
    author,
    time,
    comments,
    title,
    description,
  }: BlogCardType = data
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginTop: "32px",
      }}
    >
      <BlogTitle text="ویدیو های روزانه" />
      <Box
        sx={{
          display: "flex",
          background: `linear-gradient(359.76deg, #130F26 0.23%, rgba(19, 15, 38, 0) 115.53%),url(${imgUrl}) center no-repeat`,
          backgroundSize: "cover",
          height: "240px",
          width: "100%",
          // width: "100%",
          borderRadius: "15px",
          m: "2px",
          justifyContent: "end",
          alignItems: "end",
          color: "#FFF",
          p: "24px",
          flexGrow: 1,
          [theme.breakpoints.down("md")]: {
            maxWidth: "343px",
            width: "100%",
            height: "198px",
          },
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "column", alignItems: "end" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 500,
              bgcolor: "blue.main",
              borderRadius: "24px",
              p: "4px 8px",
              marginBottom: "10px",
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
              color: "#FFF",
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          component="img"
          src="/assets/images/play.png"
          sx={{ width: "54px", marginLeft: "24px" }}
        />
      </Box>
    </Box>
  )
}

export default DailyVideo
