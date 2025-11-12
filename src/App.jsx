import { Routes, Route } from 'react-router-dom';  
import './App.css'
// import { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import AiWork from './components/AiWork';
import Train from './components/Train';
import Service from './components/service';
import OnlineShop from './components/OnlineShop';
function App() {  

  // const [load, setLoad] = useState(true)

  // useEffect(()=> {
  //   const timeOut = setTimeout(() => {
  //     setLoad(false)
  //   }, 5000);
  //   return ()=> clearTimeout(timeOut)
  // },[])

  // if(load) {
  //   return(
  //     <div className='Loading'>
  //       <img src="/Loading.svg" alt="" />
  //       <h2>FizentYar</h2>
  //       <p>اینترنتت روشن باشه !</p>
  //     </div>
  //   )
  // }
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