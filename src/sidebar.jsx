import { NavLink } from "react-router-dom";



export default function Sidebar(){

    const log=[
        {   
            id:"1",
            name:"Home",
            img:"/home-svgrepo-com.svg",
            navs:"/"
        },
        {   id:"2",
            name:"Search",
            img:"/search-svgrepo-com (1).svg",
            nav:"/"
        },
        {   id:"3",
            name:"Explore",
            img:"/explore-svgrepo-com.svg",
            nav:"/"
        },
         {   
            id:"4",
            name:"Reels",
            img:"/reels.png",
            nav:"/"
        },
        {   id:"5",
            name:"Messages",
            img:"/instagram-dm-direct-message-icon.webp",
            nav:"/"
        },
        {   id:"6",
            name:"Create",
            img:"/plus-square-svgrepo-com.svg",
            nav:"/"
        },
        {   id:"7",
            name:"Profile",
            img:"/profile-circle-svgrepo-com.svg",
            nav:"/men"
        },
    ]
//src\assets\

    return(
        <div  className='lb'>
        <div className="sbm">
         
         <img src="src\assets\Instagram_logo.svg.png" alt="" style={{margin:"30px 30px 30px 30px"}} />
         <div className="sbm1">
          { log.map((logs)=>   <Menu key={logs.id} img={logs.img} name={logs.name} nav={logs.nav}/>) }
        </div>
        <div className="sbm2">
        <Menu img="/menu-hamburger-svgrepo-com.svg" name="more" nav="/"/>    
        <Menu  img="/Threads_(app)_logo.svg.webp" name="Threads" nav="/"/>    
        </div >
        </div>
        </div>
    );
}


function Menu(props){

    return(
   <NavLink to={props.nav}  className="lbdiv"> <img src={props.img} alt="" className="lbic"/><span>{props.name}</span></NavLink> 
    );

}