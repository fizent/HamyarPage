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
import Footer from "./Footer";
import Header from "./Header";
export default function AiWork() {
    return(
        <div>
            <Header></Header>
            <div className="hamyar">
                <Typography variant="h2">سلام من همیار  فنی شما هستم!</Typography>
                <Typography variant="h6">همیار دستیار فنی شما در صنعت و بازار کار</Typography>
            </div>
            <div className="box_file">
                <label htmlFor="file-input" className="btn_inp">
                    انتخاب تصویر
                </label>
                <input type="file" id="file-input" />

                <Typography variant="h3" className="text_pos">عکس هایتان را بارگذاری کنید</Typography>
                <Typography className="text_pos_sub">تشخیص قطعه</Typography>
            </div>
            <Footer></Footer>
        </div>
    )
}