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
  Button,
  TextField
  
} from "@mui/material";

import Courses from "./CoursesTrain";
import Footer from "./Footer";
import Header from "./Header";
export default function Train() {
    return(
        <div>
            <Header></Header>
            <div className="container_title_train">
                <Typography variant="h2">دوره های <b id="green">انلاین</b></Typography>
                <Typography variant="subtitle">بین بازار کار و اموزشت فاصله ای نیست فقط شروع کن</Typography>
            </div>

            <div className="container_find">
                <TextField
                    className="find_course"
                    fullWidth
                    placeholder="دوره اتوماسیون صنعتی"
                    variant="outlined"
                    sx={{ maxWidth: 400, width: "100%", textAlign: "center" }}
                ></TextField>
            </div>

            <div className="container_box_courses_all">
                <Courses></Courses>
            </div>
            <Footer></Footer>
        </div>
    )
}