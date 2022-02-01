import { Box, Button, Typography } from "@mui/material"
import { useRouter } from "next/router"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

const Login = () => {
  const router = useRouter()

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
          }}
        >
          لطفا کد کشور را انتخاب کنید و شماره همراه خود را وارد کنید
        </Typography>
        <Box sx={{ marginBottom: "16px", width: "100%" }}>
          <PhoneInput
            country={"ir"}
            onChange={(p) => {
              console.log(p)
            }}
            inputStyle={{
              border: "1px solid #E6E6EB",
              borderRadius: "12px",
              height: "48px",
              backgroundColor: "#F5F5F5",
              width: "100%",
            }}
            buttonStyle={{
              border: "1px solid #E6E6EB",
              borderRadius: "12px 0 0 12px",
            }}
            dropdownStyle={{
              backgroundColor: "#F5F5F5",
              width: "360px",
            }}
          />
        </Box>
        <Button
          fullWidth
          variant="contained"
          color="lime"
          sx={{
            color: "#fff",
            height: "48px",
            borderRadius: "12px",
            marginBottom: "24px",
          }}
          onClick={() => router.push("login-register/confirm")}
        >
          ورود به فقه معاصر
        </Button>
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            borderBottom: "1px solid #e6e6e9",
            lineHeight: "0.1em",
            m: "10px 0 20px",
          }}
        >
          <Box
            component="span"
            sx={{
              bgcolor: "#fff",
              p: "0 10px",
              color: "gray.center",
              fontSize: "12px",
            }}
          >
            یا
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Button
            color="white"
            sx={{
              color: "gray.35",
              border: "1px solid #E6E6EB",
              borderRadius: "8px",
              marginRight: "16px",
              width: "172px",
              justifyContent: "end",
              fontSize: "12px",
            }}
          >
            ورود با ایمیل
            <Box
              component="img"
              sx={{ width: "24px", height: "24px", marginLeft: "11px" }}
              src="/assets/images/email.png"
            />
          </Button>
          <Button
            color="white"
            sx={{
              color: "gray.35",
              border: "1px solid #E6E6EB",
              borderRadius: "8px",
              width: "172px",
              justifyContent: "end",
              fontSize: "12px",
            }}
          >
            ورود با گوگل
            <Box
              component="img"
              sx={{ width: "24px", height: "24px", marginLeft: "11px" }}
              src="/assets/images/google.png"
            />
          </Button>
        </Box>
        <Typography sx={{ fontSize: "12px", marginTop: "31px" }}>
          <Box
            component="span"
            sx={{
              color: "lime.main",
              borderBottom: "1px solid #00664a",
              cursor: "pointer",
            }}
          >
            قوانین
          </Box>{" "}
          استفاده از فقه معاصر را پذیرفته ام
        </Typography>
      </Box>
    </Box>
  )
}

Login.layout = "auth"

export default Login
