import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbacHook = ()=>{
    const [ counter, setCounter ] = useState(10)
    
    const increment = useCallback(
        ()=>{
            setCounter( (counter) => counter + 1)
        },[],
    )
    //const increment = ()=>{setCounter(counter+1)}
    return(
        <>
        <h1>use CallbackHook: { counter } </h1>
        <hr />
        <ShowIncrement increment={increment}/>
        </>
    )
}