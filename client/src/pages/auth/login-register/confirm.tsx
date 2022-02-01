import { Box, Button, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import ReactCodeInput from "react-code-input"

const ConfirmLogin = () => {
  const router = useRouter()

  const [confirmCode, setConfirmCode] = useState("")

  const initialMinute = 2
  const initialSeconds = 15

  const [minutes, setMinutes] = useState(initialMinute)
  const [seconds, setSeconds] = useState(initialSeconds)

  const [disableButton, setDsableButton] = useState(true)

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      }
      if (seconds === 0) {
        if (minutes === 0) {
          setDsableButton(true)
          clearInterval(myInterval)
        } else {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
      }
    }, 1000)
    return () => {
      clearInterval(myInterval)
    }
  })

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        alignSelf: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "624px",
          // px: "132px",
          p: " 56px 132px 47px 132px",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#fff",
          borderRadius: "12px",
          boxShadow: "0px 14px 24px -5px #AAAAAF26",
        }}
      >
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: "20px",
            marginBottom: "16px",
          }}
        >
          ورود یا ثبت نام
        </Typography>
        <Typography
          sx={{
            color: "gray.120",
            marginBottom: "24px",
            textAlign: "center",
            px: "43px",
            fontWeight: "bold",
          }}
        >
          یک کد 5 رقمی به شماره همراه{" "}
          <Box
            component="span"
            sx={{
              color: "#130f26",
              borderBottom: "1px solid #130f26",
              marginLeft: "5px",
            }}
          >
            09123452211
          </Box>
          ارسال شده است
        </Typography>
        <ReactCodeInput
          pattern="[0-9]*"
          inputMode="numeric"
          name="pin-code"
          fields={5}
          autoFocus={false}
          value={confirmCode}
          onChange={(e) => setConfirmCode(e)}
          inputStyle={{
            width: "56px",
            height: "56px",
            border: "1px solid #E6E6EB",
            backgroundColor: "#F5F5F5",
            borderRadius: "12px",
            marginRight: "4px",
            marginLeft: "4px",
            fontSize: "16px",
            textAlign: "center",
            outline: "none",
          }}
        />
        <Button
          fullWidth
          variant="contained"
          color="lime"
          sx={{
            color: "#fff",
            height: "48px",
            borderRadius: "12px",
            marginBottom: "24px",
            marginTop: "16px",
          }}
          onClick={() => router.push("/")}
        >
          تایید شماره همراه
        </Button>
        <Typography
          sx={{
            fontSize: "12px",
            marginTop: "31px",
            display: "flex",
            fontWeight: 500,
          }}
        >
          <Box> تا ارسال مجدد کد </Box>
          <Box sx={{ display: "flex", width: "40px" }}>
            <Box
              sx={{
                color: "lime.main",
                borderBottom: "1px solid #00664a",
                marginLeft: "5px",
              }}
            >
              {minutes}:{seconds}
            </Box>
          </Box>
        </Typography>
      </Box>
    </Box>
  )
}

ConfirmLogin.layout = "auth"

export default ConfirmLogin
