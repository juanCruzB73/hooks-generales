import { memo } from "react"

export const Small = memo(({counter})=>{
    console.log("lol")
    return(
         <small>{counter}</small>
    )
})