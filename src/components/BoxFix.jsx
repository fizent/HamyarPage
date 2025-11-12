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
export default function BoxFix() {
    return(
        <Box className="fix_box">
            <div className="profile_box">
                <img id="profile" src="/PROf.png" alt="" />
            </div>
            <div>
                <Typography variant="h5">محمد فاضل زارع</Typography>
                <Typography variant="subtitle">مهندس  توسعه سیسیتم برق و برنامه نویسی خودرو</Typography>
                <div className="ul_fix">
                    <ul>
                        <Typography>برنامه نویسی و توینینگ</Typography>
                        <Typography>تعمیر ECU</Typography>
                        <Typography>تعمیر سیستم برق</Typography>
                    </ul>
                    {/* <Typography variant="h6">ادرس : </Typography> */}
                    <div className="top_button">
                        <Button sx={{backgroundColor: "blue", color: 'white'}}>تماس: ناموجود</Button>
                    </div>
                </div>
            </div>
        </Box>
    )
}