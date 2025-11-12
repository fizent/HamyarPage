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

import BoxFix from "./BoxFix";
import Footer from "./Footer";
import Header from "./Header";

export default function Service() {
    return(
        <div className="mg_co_ser">
            <Header></Header>
            <div className="google_map">
                
                <iframe
                  title="google-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.013526958926!2d51.3890!3d35.6892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0134d8a2e2e9%3A0x4c2b68d3b0d02e9f!2sTehran!5e0!3m2!1sen!2sir!4v1699812500000!5m2!1sen!2sir"
                  width="100%"
                  height="400"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
            </div>


            
            <div className="container_service_fix">
                {Array.from({length: 5}).map((_, index)=> (
                    <BoxFix key={index} />
                ))}
            </div>
            <Footer></Footer>
        </div>
    )
}