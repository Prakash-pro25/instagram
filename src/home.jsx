import Feed from "./feed";
import Suggestions from "./suggestions";



export default function Home(){


    return(
        <>
        <div  className='cb'><Feed /></div>
        <div  className='rb'><Suggestions /></div> 
        </>
    );
}