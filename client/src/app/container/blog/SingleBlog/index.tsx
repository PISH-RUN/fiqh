import { Box, Button, Icon, Typography } from "@mui/material"
import BlogCard from "../features/blogCard"
import MainBlog from "../features/mainBlogs/mainBlog"
import headData from "../blogCategory/catBlogData.json"
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined"
import Comments from "./features/comments"
const SingleBlog = () => {
  const items = [
    "پردازنده 6 هسته ای",
    "پردازنده 6 هسته ای",
    "پردازنده 6 هسته ای",
    "پردازنده 6 هسته ای",
    "پردازنده 6 هسته ای",
    "پردازنده 6 هسته ای",
    "پردازنده 6 هسته ای",
    "پردازنده 6 هسته ای",
  ]
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        eee
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          flexGrow: 2,
          maxWidth: "843px",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            color: "gray.dark",
            fontWeight: 800,
            fontSize: "30px",
            marginBottom: "24px",
          }}
        >
          سیاست
        </Typography>
        <MainBlog
          variant="head"
          {...headData[0]}
          style={{ width: "100%", height: "440px" }}
        />
        <Typography
          sx={{
            color: "gray.dark",
            fontWeight: 800,
            fontSize: "32px",
            marginTop: "28px",
            paddingBottom: "32px",
            borderBottom: "1px solid #D0D2D4",
          }}
        >
          سامسونگ برای تولید نمایشگر OLED مدل‌های جدید مک‌بوک پرو و آیپد آماده
          می‌شود
        </Typography>
        <Typography sx={{ p: "40px 0  25px 0" }}>
          نسل فعلی آیپدهای معمولی و ایر از پنل LCD استفاده می‌کنند ولی
          تامین‌کننده چاپگر تیزابی OLED سامسونگ دیسپلی توسعه نوع جدیدی از چاپگر
          خشک را برای پنل‌های Gen 8.5 OLED آغاز کرده است. پنل‌های اولد در مصارف
          IT با اندازه‌های ۱۰ اینچ و بالاتر نیاز دارند که پیکسل‌های قرمز، سبز و
          آبی محکم روی پنل قرار بگیرند. سامسونگ دیسپلی انتظار دارد که مشتریانش
          از جمله سامسونگ الکترونیکس و اپل سفارشات پنل‌های اولد خود را افزایش
          دهند
        </Typography>
        <Typography sx={{ color: "gray.dark", fontWeight: 800 }}>
          دیجی‌تایمز گفته بود که اپل می‌خواهد مدل‌های آیپد و مک‌بوک OLED و
          Mini-LED را در کنار هم در ویترین فروشگاه‌هایش داشته باشد، چون فناوری
          مورد استفاده هر کدام از این محصولات با دیگری متفاوت است و تداخلی با
          یکدیگر ندارند
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>
            اپل همچنین در حال برنامه‌ریزی برای تولید یک آیپد ۱۰.۹ اینچی و یک
            آیپد پرو ۱۲.۹ اینچی است. این دو محصول هم از نمایشگرهای اولد استفاده
            می‌کنند و قرار است در سال ۲۰۲۲ وارد بازار شوند. کوپرتینویی‌ها چند
            وقت پیش از یک مدل آیپد پرو با نمایشگر Mini-LED رونمایی کردند و
            احتمالا ظرف چند هفته تا چند ماه آینده نیز از مک‌بوک پرو ۱۴ و ۱۶
            اینچی با همین فناوری نمایش پرده برمی‌دارند
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              marginLeft: "24px",
              border: "1px solid #D0D2D4",
              p: "12px",
              borderRadius: "20px",
            }}
          >
            <Box
              component="img"
              src="/assets/images/selected-1.png"
              sx={{
                width: "376px",
                borderRadius: "20px",
                marginBottom: "6px",
              }}
            />
            <Typography
              sx={{
                fontWeigh: 500,
                width: "271px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              اپل همچنین در حال برنامه‌ریزی برای تولید یک آیپد ۱۰.۹ اینچی
            </Typography>
          </Box>
        </Box>
        <Typography sx={{ color: "gray.dark", fontWeight: 800, py: "21px" }}>
          دیجی‌تایمز گفته بود که اپل می‌خواهد مدل‌های آیپد و مک‌بوک OLED و
          Mini-LED را در کنار هم در ویترین فروشگاه‌هایش داشته باشد، چون فناوری
          مورد استفاده هر کدام از این محصولات با دیگری متفاوت است و تداخلی با
          یکدیگر ندارند
        </Typography>
        <Typography>
          اپل همچنین در حال برنامه‌ریزی برای تولید یک آیپد ۱۰.۹ اینچی و یک آیپد
          پرو ۱۲.۹ اینچی است. این دو محصول هم از نمایشگرهای اولد استفاده می‌کنند
          و قرار است در سال ۲۰۲۲ وارد بازار شوند. کوپرتینویی‌ها چند وقت پیش از
          یک مدل آیپد پرو با نمایشگر Mini-LED رونمایی کردند و احتمالا ظرف چند
          هفته تا چند ماه آینده نیز از مک‌بوک پرو ۱۴ و ۱۶ اینچی با همین فناوری
          نمایش پرده برمی‌دارند
        </Typography>
        <Box component="ul" sx={{ display: "flex", flexDirection: "column" }}>
          {items.map((item, i) => (
            <Typography
              component="li"
              sx={{
                color: "gray.dark",
                lineHeight: "32px",
                marginRight: "16px",
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
        <Box
          component="img"
          src="/assets/images/new-blog-3.png"
          sx={{
            width: "100%",
            height: "265px",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />
        <Typography sx={{ m: "32px 0 40px 0" }}>
          اپل همچنین در حال برنامه‌ریزی برای تولید یک آیپد ۱۰.۹ اینچی و یک آیپد
          پرو ۱۲.۹ اینچی است. این دو محصول هم از نمایشگرهای اولد استفاده می‌کنند
          و قرار است در سال ۲۰۲۲ وارد بازار شوند. کوپرتینویی‌ها چند وقت پیش از
          یک مدل آیپد پرو با نمایشگر Mini-LED رونمایی کردند و احتمالا ظرف چند
          هفته تا چند ماه آینده نیز از مک‌بوک پرو ۱۴ و ۱۶ اینچی با همین فناوری
          نمایش پرده برمی‌دارند
        </Typography>
        <Typography sx={{ color: "gray.dark", fontWeight: 800, py: "21px" }}>
          دیجی‌تایمز گفته بود که اپل می‌خواهد مدل‌های آیپد و مک‌بوک OLED و
          Mini-LED را در کنار هم در ویترین فروشگاه‌هایش داشته باشد، چون فناوری
          مورد استفاده هر کدام از این محصولات با دیگری متفاوت است و تداخلی با
          یکدیگر ندارند
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              textAlign: "justify",
            }}
          >
            سامسونگ به عنوان یکی از تامین‌کنندگان صفحات نمایش اپل در مراحل
            ابتدایی آماده‌سازی خط تولید نمایشگر OLED قرار دارد که در مدل‌های آتی
            مک‌بوک پرو به کار گرفته خواهد شد
          </Typography>
          <Typography
            sx={{
              textAlign: "justify",
              marginLeft: "55px",
            }}
          >
            سامسونگ به عنوان یکی از تامین‌کنندگان صفحات نمایش اپل در مراحل
            ابتدایی آماده‌سازی خط تولید نمایشگر OLED قرار دارد که در مدل‌های آتی
            مک‌بوک پرو به کار گرفته خواهد شد
          </Typography>
        </Box>
        <Box
          component="img"
          src="/assets/images/new2-2.png"
          sx={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />
        <Typography sx={{ color: "gray.dark", fontWeight: 800, py: "22px" }}>
          دیجی‌تایمز گفته بود که اپل می‌خواهد مدل‌های آیپد و مک‌بوک OLED و
          Mini-LED را در کنار هم در ویترین فروشگاه‌هایش داشته باشد، چون فناوری
          مورد استفاده هر کدام از این محصولات با دیگری متفاوت است و تداخلی با
          یکدیگر ندارند
        </Typography>
        <Typography sx={{ m: "32px 0 40px 0" }}>
          اپل همچنین در حال برنامه‌ریزی برای تولید یک آیپد ۱۰.۹ اینچی و یک آیپد
          پرو ۱۲.۹ اینچی است. این دو محصول هم از نمایشگرهای اولد استفاده می‌کنند
          و قرار است در سال ۲۰۲۲ وارد بازار شوند. کوپرتینویی‌ها چند وقت پیش از
          یک مدل آیپد پرو با نمایشگر Mini-LED رونمایی کردند و احتمالا ظرف چند
          هفته تا چند ماه آینده نیز از مک‌بوک پرو ۱۴ و ۱۶ اینچی با همین فناوری
          نمایش پرده برمی‌دارند
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: "40px",
            borderTop: "1px solid #D0D2D4",
            borderBottom: "1px solid #D0D2D4",
            my: "40px",
            width: "100%",
          }}
        >
          <Button variant="outlined" sx={{ borderColor: "#B9BBBE" }}>
            <Icon
              component={ShareOutlinedIcon}
              sx={{ fontSize: "18px", color: "gray.dark" }}
            />
            <Typography sx={{ color: "gray.dark", marginLeft: "16px" }}>
              اشتراک گذاری
            </Typography>
          </Button>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {["مالی و اقتصادی", "سیاست"].map((tag, i) => (
              <Typography
                key={i}
                sx={{
                  fontSize: "12px",
                  fontWeight: 500,
                  bgcolor: "#D0D2D4",
                  borderRadius: "24px",
                  p: "4px 8px",
                  marginLeft: "8px",
                  color: "gray.dark",
                }}
              >
                {tag}
              </Typography>
            ))}
            <Typography
              sx={{ marginLeft: "8px", color: "gray.dark", fontWeight: 500 }}
            >
              برچسب ها :{" "}
            </Typography>
          </Box>
        </Box>
        <Comments />
      </Box>
    </Box>
  )
}

export default SingleBlog
