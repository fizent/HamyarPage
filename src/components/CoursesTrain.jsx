import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  Button
  
} from "@mui/material";

export default function Courses() {
    return(
        <Box className="course_card">
           <div className="course_image">
               <img src="/Automation.png" id="courses_images"  alt="اتوماسیون صنعتی" />
           </div>
           <div className="course_text">
               <Typography variant="h5" id="titleColor">دوره اتوماسیون صنعتی</Typography>
               <Typography variant="subtitle1">
                   در این دوره شما با مفاهیم پایه و پیشرفته اتوماسیون صنعتی آشنا می‌شوید و یاد می‌گیرید چگونه سیستم‌های صنعتی را با استفاده از PLC برنامه‌نویسی و کنترل کنید. این دوره شامل آموزش سخت‌افزارهای PLC، سنسورها، عملگرها و شبکه‌های صنعتی است و تمرین‌های عملی فراوانی برای پیاده‌سازی پروژه‌های واقعی ارائه می‌شود. شما مهارت‌های لازم برای طراحی، پیاده‌سازی و عیب‌یابی سیستم‌های اتوماسیون صنعتی را کسب خواهید کرد و آماده ورود به بازار کار خواهید شد.
               </Typography>
               <div className="sub_price">

                <ul>
                    <li>قیمت : 500.000</li>
                    <li>زمان : نامعلوم</li>
                    <li>دانشجو : 0</li>
                </ul>

               </div>
               <div className="top_button">
                    <Button sx={{backgroundColor: "blue", color: 'white'}}>موجود نیست</Button>
               </div>

           </div>
        </Box>

    )
}