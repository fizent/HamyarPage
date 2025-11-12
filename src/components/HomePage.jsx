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
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
// import Button from "@mui/material";

export default function HomePage() {
  const imageList = [
    '/pride.png',
    '/neisanabi.png',
    '/x22-pro-MT-1024x683.png',
    '/machfarch.png',
    '/MachWater.png',
    '/سمند-800x714.png'
  ];



  const [index, setIndex] = useState(0)   


  useEffect(()=> {
    const interval = setInterval(() => {
      setIndex((prev)=> (prev+1) % imageList.length)
    }, 2000);

    return ()=> clearInterval(interval)
  }, [])

  return (
    <div>
      <Header></Header>
      <div>
        <Box sx={{backgroundImage: `url(${imageList[index]})`, }} className="slider">
        </Box>
      </div>
        {/* <div sx={{marginTop: '50px'}}>
          <Button sx={{backgroundColor: "blue", color: 'white'}}>my name is fazel</Button>
        </div> */}

        <div className="container_box_service">
        <RouterLink to="/Ai"> 
          <Box className="box_service">
            <Typography variant="h5">هوش مصنوعی</Typography>
            <Typography variant="subtitle">استاد کار حرفه ای شما</Typography>
          </Box>
        </RouterLink>
        <RouterLink to="/Service">
          <Box className="box_service">
            <Typography variant="h5">سرویس خدمات</Typography>
            <Typography variant="subtitle">تعمیر کاران ماهر در محل</Typography>
          </Box>
        </RouterLink>

        <RouterLink to="/Train">
          <Box className="box_service">
            <Typography variant="h5">اموزش های فنی</Typography>
            <Typography variant="subtitle">دوره های فنی - کاربردی</Typography>
          </Box>
        </RouterLink>

        <RouterLink to="/OnlineShope">
          <Box className="box_service">
            <Typography variant="h5">فروشگاه انلاین</Typography>
            <Typography variant="subtitle">خرید قطعات و ابزارالات </Typography>
          </Box>
        </RouterLink>

        </div>

        <Footer></Footer>
    </div>
  );
}
