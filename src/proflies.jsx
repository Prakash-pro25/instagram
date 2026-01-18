import { useContext, useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { Show } from "./App";



export default function Profile(){


   const change=useContext(Show);
    const [profiles,setprofiles]=useState(null)
 useEffect(()=>{
         axios.get("http://localhost:3000/profile")
         .then(datae =>{ console.log(datae.data); setprofiles(datae.data)})
         .catch(error => console.log(error))


       
            },[]); 
             

    return(
    

        <div className="promain">
      {profiles? 
        
        <div className="profiles" key={profiles.id} >
            <div style={{display:"flex",flexDirection:"row"}}>
                <img src={profiles.profile_pic} alt="profile" style={{height:"150px",width:"150px",borderRadius:"50%",margin:"30px"}}/>
                <div style={{marginTop:"60px",  display: "flex",gap: "10px",flexDirection: "column"}}>
                    <h1>{profiles.username}<img src="/settings-svgrepo-com.svg" alt="settings" style={{height:"30px",width:"30px"}}/></h1>
                    <p>{profiles.name}</p>
                    <p><big>104</big> posts <big>{change[1]}</big><span onClick={change[0]} style={{cursor: "pointer"}}>followers </span> <big>104</big> following</p>
                </div>
            </div>
            <div>
                <button >Edit profiles</button>
                <button>view archive</button>
            </div>
            
        </div>
        
      
     : <h1>loading</h1>}
     <div className="stores" >
            <Store/>
    </div>
     <hr />
        </div>

      );

}
 



function Store({
  id = 1,
  tot = 8,
  profile_pic = "/plus-square-svgrepo-com.svg",
  username = "Guest User",
}){

   const navigat=useNavigate();
    return(
        <div className="store" onClick={()=>{navigat(`/view/${id}/${tot}`)}}>
            <div className="div2" style={{background:"gray"}}>
                <div className="div1">
                    <img src={profile_pic} alt=""  />
                </div>
            </div>
            <h6 >{username}</h6>
         </div>  
    );
}