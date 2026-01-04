import { useEffect, useState } from "react";
import { useParams ,Link, useNavigate} from "react-router-dom";





export default function View(){


   const {id ,tot}=useParams();

    const [data,setdata]=useState(null);

    const navgat=useNavigate();
    
   useEffect(()=>{
      if (!id) return;

      fetch(`http://localhost:3000/posts/${id}`)
      .then(res => res.json())
      .then(datas => { setdata(datas); console.log(datas); })
      .catch(err => console.log(err));
   }, [id]);


   


if(id>=tot|| id<=0)
{
    navgat("/");
}
/* else{
setTimeout(() => {
     navgat(`/view/${Number(id)+1}/${tot}`);
}, 10000); 
} */



    return(
       <div>
        {data? 
      <div className="sto" >
       <Link  to={`http://localhost:5173/view/${Number(id)-1}/${tot}`}  ><img src="/previous-back-svgrepo-com.svg"className="img" /></Link>
         <img style={{height:"600px", width:"400px"}} src={data.image} alt="" />
      <Link  to={`http://localhost:5173/view/${Number(id)+1}/${tot}`}><img src="/next-svgrepo-com.svg" className="img" /></Link>
    </div>
        :<h1>loading..</h1>}
       </div>);
}



