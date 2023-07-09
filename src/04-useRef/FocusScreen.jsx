import { useRef } from "react"

export const FocuScreen = () =>{
    const inputRef = useRef()
    const onClick = ()=>{
        inputRef.current.select()
    }
    return(
        <>
        <h1>Focus Screen</h1>
        <hr />
        <input ref={inputRef} type="text" placeholder="Ingrese nombre" className="form-control"/>
        <button className="btn btn-primary mt-2" onClick={onClick}>set focus</button>
        </> 
    )
}