import { useState } from "react"
import { useCounter } from "../hooks"
import { Small } from "./Small"
export const Memorize =()=>{
    const [show, setShow ]=useState(true)
    const {counter,increment}=useCounter(1)
    return (
        <>
            <h1><Small counter={counter}/></h1>
            <hr />
            <button className="btn btn-primary" onClick={()=>increment()}>+1</button>
            <button 
            className="btn btn-outline-primary" 
            onClick={()=>setShow( !show )}//error showTime no es funcion 
            >
                Show/Hide{JSON.stringify(show)}
            </button>
        </>
    )
}