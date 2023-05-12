import { useEffect, useState } from "react"

export const Message = () => {

    const[cords,setCords]=useState({x:0,y:0})

    useEffect(()=>{

        const onMouseEvent = ({x,y})=>{
            setCords({x,y})
        }
    window.addEventListener("mousemove",onMouseEvent)
        return()=>{
            window.removeEventListener("mousemove",onMouseEvent)
 
        }
    },[])
  
  
    return (
    <>
    <h3>Usuario ya existe</h3>
    {JSON.stringify(cords)}
    </>
  )
}
