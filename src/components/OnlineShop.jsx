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
import Header from "./Header";
import BoxShop from "./BoxShop";
import Footer from "./Footer";
export default function OnlineShop() {
    return(
        <div>
            <Header></Header>
            <div className="mg_co_shop">
                <BoxShop titleText="دینام خودرو مدل fana-90A پژو 206" subtitle="200 عدد در انبار" img="/دینام پژو 206.jpg"></BoxShop>
                <BoxShop titleText="بوبین کمپرسور" subtitle="50 عدد در انبار" img="/بوبین کمپ.jpg"></BoxShop>
                <BoxShop titleText="باتری صبا 74 امپر" subtitle="500 عدد در انبار" img="/باتری.jpg"></BoxShop>
                <BoxShop titleText="کنتاکتور 32 امپر" subtitle="90 عدد در انبار" img="/کنتاکتور.jpg"></BoxShop>
            </div>
            <Footer></Footer>
        </div>
    )
}