import axios from "axios";
import { useEffect, useState } from "react";



export default function Suggestions(){

    const [proflie,setproflie]=useState(null);
    const [suggest,setsuggest]=useState([]); 
    const [stat,setstat]=useState(false);

    useEffect(()=>{

    fetch("http://localhost:3000/profile")
    .then(response=>{ console.log(response); return response.json()})
    .then(prof=>{setproflie(prof);})
    .catch(err=>console.log(err));

     fetch("http://localhost:3000/Suggested")
    .then(response=>{ console.log(response); return response.json()})
    .then(profs=>{setsuggest(profs);})
    .catch(err=>console.log(err));


    }
,[stat]);

const follo=async (id,names,pic,fol)=>
{

        axios.post("http://localhost:3000/follow",{ "id": id,
        "username": names,
        "profile_pic": pic,
       "folow": fol})
       .then(alert("followed"))
       .then(setstat(!stat))
       .catch(err=> console.log(err))
}


    return(
    
    <div className="suggest">

        {proflie? 
           <Pro  key={proflie.id}  profile_pic={proflie.profile_pic} username={proflie.username} name="Prakash"    a="switch"   />
           :<div>loading...</div>}
        <div style={{display:"flex", flexDirection:"row",justifyContent:"space-between"}}>
           <p style={{fontWeight:"bold"}}>Suggested for you</p>
           <h5>see All</h5>
         </div>
          {suggest.length > 0? 
           suggest.map((sugg)=>   <Pro  key={sugg.id} 
                                        {...sugg} 
                                        h={()=>follo(sugg.id,sugg.username,sugg.profile_pic,sugg.folow)}  
                                        a="follow"/>)
           :<div>loading...</div>}
           <p style={{margin:"50px 0px 0px 0px", fontSize:"13px", color:"gray"}}>About.Help.Press.API.Jobs.Privacy.Terms.
            Locations.Language.Meta.Verified</p>
            <p style={{margin:"10px 0px 0px 0px", fontSize:"13px", color:"gray"}}>© 2025 Instagram from Meta</p>

  </div>
) 
};
    



function Pro(props){


    return(
    <div className="pro"> 
            <div className="prol">
                <img src={props.profile_pic} alt="" />
                <div style={{display:"flex", flexDirection:"column", gap: "0px",alignItems: "start",}}>
                    <h5>{props.username}</h5>
                    <p style={{fontSize:"13px"}}>{props.folow}</p>
                </div>
            </div>
            <div className="pror"><h3 className="proh3" onClick={props.h}>{props.a}</h3></div>
          </div>);
}