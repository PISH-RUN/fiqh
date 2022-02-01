import { Box, TextField, Typography, Button } from "@mui/material"

const Comments = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TextField
          select
          sx={{ width: "193px", color: "#FFF" }}
          placeholder="مرتب سازی بر اساس"
          defaultValue="مرتب سازی بر اساس"
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>4 دیدگاه</Typography>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 800,
              paddingLeft: "16px",
              marginLeft: "16px",
              borderLeft: "1px solid #5B616780",
            }}
          >
            نظرات
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Comments
