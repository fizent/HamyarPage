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

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";

import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
    const [toggle, setToggle] = useState(false)
    const clickMenu = ()=> setToggle((prev)=> !prev)

    return(

    <div>
        <AppBar className="container_app">
            <Toolbar className="header_toolbar">
              <IconButton edge="end" color="default" aria-label="menu" onClick={clickMenu} sx={{color: 'blue'}}>
                <MenuIcon />
              </IconButton>
              {/* <img className="logo_size" src="" alt="Logo" /> */}
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              "& .MuiDrawer-paper": {
                backgroundColor: "#1e1e1e",
                color: "#ffffff"
            }
        }}
            open={toggle}
            onClose={clickMenu}
            anchor="right"
          >
            <Box role="presentation" />
            <List>
              <ListItem className="drawer" button component={RouterLink} to="/">
                <HomeIcon sx={{ mr: 1 }} />
                <ListItemText primary="بازگشت" />
              </ListItem>
              <ListItem className="drawer" button component={RouterLink} to="/Setting">
                <SettingsIcon sx={{ mr: 1 }} />
                <ListItemText primary="تنظیمات" />
              </ListItem>
              <ListItem className="drawer" button component={RouterLink} to="/About">
                <InfoIcon sx={{ mr: 1 }} />
                <ListItemText primary="درباره" />
              </ListItem>
            </List>
          </Drawer>
    </div>
    )


}