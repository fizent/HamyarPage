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

export default function BoxShop({titleText, subtitle, img}) {
    return(
        <div className="container_shop_box">
            <div>
                <img className="img_size" src={img} alt="" />
            </div>
            <div className="container_text">
                <Typography variant="h5">{titleText}</Typography>
                <Typography id="depot">{subtitle}</Typography>
            </div>
            <div className="price_box_shop">
                <Typography className="nothing" variant="h6">ناموجود</Typography>
            </div>
        </div>
    )
}