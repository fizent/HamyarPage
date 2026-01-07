import { Routes, Route } from 'react-router-dom';  
import './App.css'
// import { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import AiWork from './components/AiWork';
import Train from './components/Train';
import Service from './components/service';
import OnlineShop from './components/OnlineShop';
import AnimationHamyarFani from './components/animation';
import { useEffect, useState } from 'react';
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
function App() {  

  const [load, setLoad] = useState(true)

  useEffect(()=> {
    const timeOut = setTimeout(() => {
      setLoad(false)
    }, 5000);
    return ()=> clearTimeout(timeOut)
  },[])

  if(load) {
    return(
      <div className='Loading'>
        <div className="loading_animation">
          <AnimationHamyarFani></AnimationHamyarFani>
        </div>
        <Typography variant='h1'>همیار فنی</Typography>
        <Typography variant='h4' id="color_text_ham_logo">همیار فنی متخصص هوشمندِ جیبی شما</Typography>
      </div>
    )
  }
  return (  
    <div>  
      <Routes>  
        <Route path="/" element={<HomePage />} />
        <Route path='/Ai' element={<AiWork/>}></Route>  
        <Route path='/Service' element={<Service/>}></Route>
        <Route path='/Train' element={<Train/>}></Route>
        <Route path='/OnlineShope' element={<OnlineShop/>}></Route>
      </Routes>  
    </div>  
  );  
}  

export default App;  