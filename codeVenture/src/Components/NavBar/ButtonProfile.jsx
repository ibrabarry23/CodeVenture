import { useState } from "react"

export function ButtonProfile(){
    const [testo,setTesto]=useState("Profilo Utente")
    const handleClick=()=>{
        setTesto(((prev)=>prev==="Profilo Utente"?"X":"Profilo Utente"))
    }
    return(
        <button className="pl-2 pr-2 rounded-md bold pixelFont font-bold colorTextCyan mr-3 ms-auto colorBackYellow" onClick={handleClick}>{testo}</button>
    )
}