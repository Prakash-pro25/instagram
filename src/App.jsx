import {Outlet} from "react-router-dom";
import './App.css'
import Sidebar from './sidebar';
import { createContext, useState } from "react";
import Follow from "./follower";



export const Show=createContext();
 
export default function App(){

  const [count, setCount] = useState(3);
  
   const [showComp3, setShowComp3] = useState(false);

   const onchan = ()=>{setShowComp3(!showComp3); }
  return( 
     
  <div>
    
    <div className="main"> 
           
          <Sidebar/> 
          <Show.Provider value={[onchan,count]}>
           <Outlet  /> 
             {  showComp3 &&  <Follow onDataLength={setCount} />}
        </Show.Provider>

     
         </div>
         
     
  </div>
     );
}

