import { useContext, useEffect, useState } from "react";
import { Show } from "./App";
import axios from "./axios";





export default function Follow({ onDataLength }){

    const chang=useContext(Show);
    const [fol,setfol]=useState([]);
    const [dem,setdem]=useState(true);

    useEffect(()=>{
        axios.get("/follow")
        .then(data=>{setfol(data.data); onDataLength(data.data.length);console.log(fol)})
        .catch(err=>console.log(err));


        
        },[onDataLength,dem]);

        const remove= async(id)=>{

            axios.delete(`/follow/${id}`)
            .then(alert("removed"))
            .then(setdem(!dem))
            .catch(err=>console.log(err));
            
        }

  return(
    <>
      
      <div className="sodow" >

      </div>
     <div className="fol"  >    
              <h3 style={{margin:"10px",cursor: "pointer"}} onClick={chang[0]}>X</h3> 
              <div style={{padding:"10px"}}>
       { fol.map((sugg)=>   <Pro  key={sugg.id} {...sugg} h={()=>remove(sugg.id)}   a="Remove"   />)}  
     </div>
    </div>

    </>
  );
}





const Pro= props=>
          <div className="pro" style={{margin:"5px"}}> 
            <div className="prol">
                <img src={props.profile_pic} alt="" />
                <div style={{display:"flex", flexDirection:"column", gap: "0px",alignItems: "start",}}>
                    <h5>{props.username}</h5>
                    <p style={{fontSize:"13px"}}>{props.folow}</p>
                </div>
            </div>
            <div className="pror"><h3 className="proh3" onClick={props.h}>{props.a}</h3></div>
          </div>;