import React from "react"
import "./bttn.css"
const Bttn = ({ texto , href, onClick } )=>{
    
    return(
    <div className= "cbttn">
        <button className="bttn" onClick={onClick}><a href={href} target="_blank">{texto}</a></button>
    </div>
    )
}
export default Bttn;


  
