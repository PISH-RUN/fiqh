import { Box, Typography, TextField, Button } from "@mui/material"
import BlogTitle from "../blog/features/blogTitle"
import FooterBlogs from "./features/footerBlogs"
import FooterBlogsV2 from "./features/footerBlogs/footerBlogsV2"
import FooterLinks from "./features/footerLinks"
import { mainLinks, nLinks, mLinks, lLinks } from "./footerLinkData"

const symbols = (
  <Box
    component="img"
    src="/assets/images/symbols.png"
    sx={{ width: "182px" }}
  />
)

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "#130F26",
        p: "64px 80px 30px 80px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #2C343C",
          paddingBottom: "44px",
        }}
      >
        <FooterBlogsV2 title="پر بحث ترین ها" />
        <FooterBlogs title="آخرین اخبار" />
        <FooterBlogs title="داغ ترین های سیاست" />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #2C343C",
          paddingBottom: "44px",
        }}
      >
        <FooterLinks title="مسابقه" links={mLinks} />
        <FooterLinks title="نظریه و کورسی" links={nLinks} />
        <FooterLinks title="کتابخانه" links={lLinks} />
        <FooterLinks title="لینک های مفید" links={mainLinks} variant="main" />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #2C343C",
          paddingBottom: "44px",
          marginTop: "48px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            maxWidth: "515px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "white.dark",
              marginBottom: "8px",
              fontWeight: 800,
              fontSize: "18px",
            }}
          >
            عضویت در خبرنامه
          </Typography>
          <Typography sx={{ color: "gray.150", fontSize: "14px" }}>
            برای عضویت در خبرنامه ایمیل خود را وارد کنید
          </Typography>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "64px",
              m: "25px 0 38px 0",
            }}
          >
            <Box
              component="input"
              sx={{
                width: "100%",
                height: "100%",
                bgcolor: "#444A514D",
                borderRadius: "50px",
                outline: "0",
                border: "0",
                color: "gray.250",
                paddingRight: "30px",
                paddingLeft: "150px",
                fontSize: "14px",
              }}
              placeholder="ایمیل خود را وارد کنید"
              dir="rtl"
            />
            <Button
              sx={{
                position: "absolute",
                left: "8px",
                top: "8px",
                width: "118px",
                height: "48px",
                color: "#FFF",
              }}
              variant="contained"
              color="lime"
            >
              عضویت
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  marginBottom: "16px",
                }}
              >
                <Box
                  component="img"
                  src="/assets/images/instagram.png"
                  sx={{ maxWidth: "16px", marginRight: "20px" }}
                />
                <Box
                  component="img"
                  src="/assets/images/linkedin.png"
                  sx={{ maxWidth: "16px", marginRight: "20px" }}
                />
                <Box
                  component="img"
                  src="/assets/images/twitter.png"
                  sx={{ maxWidth: "16px" }}
                />
              </Box>
              <Typography
                sx={{
                  color: "white.dark",
                  marginBottom: "8px",
                  fontWeight: 800,
                  fontSize: "20px",
                }}
              >
                ۰۲۱-۹۱۰۲۰۰۱۰
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <Typography
                sx={{
                  color: "white.dark",
                  marginBottom: "8px",
                  fontWeight: 700,
                  fontSize: "20px",
                }}
              >
                پشتیبانی
              </Typography>
              <Typography
                sx={{
                  color: "gray.250",
                  marginBottom: "8px",
                }}
              >
                هفت روز هفته (ساعت ۹ الی ۱۸)
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", marginBottom: "27px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "464px",
                width: "100%",
                alignItems: "end",
              }}
            >
              <Typography sx={{ color: "white.dark" }}>درباره ما</Typography>
              <Typography sx={{ color: "#8A8E93", textAlign: "right" }}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </Typography>
            </Box>
            <Box
              component="img"
              src="/assets/images/fegh.png"
              sx={{ width: "118px", height: "118px", marginLeft: "70px" }}
            />
          </Box>
          <BlogTitle
            text="مجوزها و نمادها"
            leftElement={symbols}
            variant="footer"
          />
        </Box>
      </Box>
      <Typography
        sx={{
          color: "#73777D",
          fontSize: "14px",
          textAlign: "center",
          marginTop: "24px",
        }}
      >
        تمام حوق مادی و معنوی برای سایت محفوظ است
      </Typography>
    </Box>
  )
}

export default Footer
