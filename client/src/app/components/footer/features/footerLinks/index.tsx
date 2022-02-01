import { Box, Typography, Button } from "@mui/material"
import { useRouter } from "next/router"
import BlogCard from "src/app/container/blog/features/blogCard"

const FooterLinks = ({ title, links, variant }: any) => {
  const router = useRouter()
  const FLink = ({ to, value }: FooterLink) => (
    <Box
      sx={{
        width: variant === "main" ? "45%" : "unset",
        display: "flex",
        justifyContent: "end",
      }}
    >
      <Button
        color="white"
        sx={{
          color: router.pathname === to ? "#FFF" : "#8A8E93",
        }}
      >
        {value}
      </Button>
    </Box>
  )
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "410px",
        width: "100%",
        alignItems: "end",
        marginTop: "64px",
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
      <Box
        sx={{
          display: "flex",
          flexDirection: variant === "main" ? "row-reverse" : "column",
          alignItems: "end",
          justifyContent: "end",
          flexWrap: "wrap",
        }}
      >
        {links.map(({ to, value }: FooterLink) => (
          <FLink value={value} key={value} to={to} />
        ))}
      </Box>
    </Box>
  )
}

export default FooterLinks
