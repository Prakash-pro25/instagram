import { useEffect,useState,useRef } from "react";
import { useNavigate } from "react-router-dom";



export default function Feed(){

    const [datas,setdatas]=useState([]);    

     useEffect(()=>{
         fetch("http://localhost:3000/posts")
         .then(response=>{ console.log(response);
            return response.json(); 
            })
         .then(datae =>{ console.log(datae); setdatas(datae)})
         .catch(error => console.log(error))
       
            },[]);
            const storyRef = useRef(null);

  const scrollNext = () => {
    storyRef.current.scrollLeft += 125;
  };

  const scrollPrev = () => {
    storyRef.current.scrollLeft -= 125;
  };

  
 console.log(datas.length);
    return(        
        
        <div className="feed">
            <div className="stcon"  >
               <img onClick={scrollPrev} className="left" src="/previous-back-svgrepo-com.svg" alt="" />
              <div className="stores"  ref={storyRef}>
                   
                 { datas.map((data) => <Store key={data.id} id={data.id}  tot={datas.length}
                                              profile_pic={data.user.profile_pic} 
                                              username={data.user.username}  />)}
            
              </div>
                    <img src="/next-svgrepo-com.svg" alt=""  onClick={scrollNext} className="right" /></div>       
           <div className="posts">
            {datas.map((datao)=> 
            <Posts   key={datao.id} 
                    {...datao}
                    {...datao.user}
            />)}
           </div>          
        </div>
    );
}


function Store(props){

   const navigat=useNavigate();
    return(
        <div className="store" onClick={()=>{navigat(`/view/${props.id}/${props.tot}`)}}>
            <div className="div2">
                <div className="div1">
                    <img src={props.profile_pic} alt="" />
                </div>
            </div>
            <h6 >{props.username}</h6>
         </div>  
    );
}


function Posts(props){


    return(
        
        <div className="post">
          <div className="pro"> 
            <div className="prol">
                <img src={props.profile_pic} alt="" />
                <div><h5>{props.username}<span style={{fontWeight:"lighter"}}> 8h</span></h5><p>Orignal audio</p>
                </div>
            </div>
            <div className="pror"><img src="src\assets\more-horizontal-svgrepo-com (1).svg" alt="" /></div>
          </div> 
          <img className="pos" src={props.image} alt="" />
          <div className="lsc">
               <div> 
                  <img src="public\heart-svgrepo-com.svg" alt="" style={{height:"25px"}}/><h4>{props.likes}</h4>
                  <img src="src\assets\message-circle-svgrepo-com.svg" alt="" /><h4>3</h4>
                  <img src="src\assets\share-1-svgrepo-com.svg" alt="" />
                </div>
                <img src="src\assets\save-svgrepo-com.svg" alt="" />
          </div>
          <p>{props.caption}</p>
        </div>

    );
}