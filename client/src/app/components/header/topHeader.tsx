import { Typography, Icon } from "@mui/material"
import { Box } from "@mui/system"
import moment from "jalali-moment"
import { useState } from "react"
import { Calendar, Search } from "react-iconly"

const TopHeader = () => {
  let dateObj = new Date()
  let month = dateObj.getUTCMonth() + 1
  let day = dateObj.getUTCDate()
  let year = dateObj.getUTCFullYear()

  const newdate = year + "/" + month + "/" + day
  const m = moment(newdate, "YYYY/MM/DD").locale("fa")

  const ddd = m.format("ddd")
  const YYYY = m.format("YYYY")
  const MMMM = m.format("MMMM")
  const D = m.format("D")

  const [activeLang, setActiveLang] = useState("فارسی")
  const langs = ["فارسی", "العریبه", "English"]

  return (
    <Box
      sx={{
        display: "flex",
        height: "40px",
        width: "100%",
        bgcolor: "lime.120",
        justifyContent: "space-between",
        alignItems: "center",
        px: "80px",
      }}
    >
      <Box sx={{ display: "flex", color: "#fff", alignItems: "center" }}>
        <Typography
          sx={{ marginRight: "8px", fontSize: "14px", color: "#FFF" }}
        >
          <span> {ddd} </span>
          <span> {D} </span>
          <span> {MMMM} </span>
          <span> {YYYY} </span>
        </Typography>
        <Icon
          component={Calendar}
          set="light"
          sx={{
            fontSize: "24px",
            opacity: "70%",
          }}
        />
        <Box
          sx={{
            paddingLeft: "18px",
            marginLeft: "24px",
            borderLeft: "1px solid #FFFFFF4D",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Icon
            component={Search}
            set="light"
            primaryColor="#fff"
            sx={{
              fontSize: "24px",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        {langs.map((lang) => (
          <Typography
            key={lang}
            sx={{
              px: "16px",
              color: activeLang === lang ? "#FFF" : "#FFFFFF80",
              fontSize: "14px",
              cursor: "pointer",
              borderLeft: "1px solid #FFFFFF4D",
              "&:last-child": { borderLeft: "0" },
            }}
            onClick={() => setActiveLang(lang)}
          >
            {lang}
          </Typography>
        ))}
      </Box>
    </Box>
  )
}

export default TopHeader
