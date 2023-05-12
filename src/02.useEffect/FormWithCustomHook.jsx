import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"
import {Message} from './Message'

export const FormWithCustomHook = () =>{

    const {onInputChange,onResetForm,username,email,password} = useForm({
        username:"",
        email: "",
        password: ""
    })
    

    useEffect(()=>{
        //console.log("useEfect llamado")
    },[])//areglo vacio = se dispara el useEfect cuando el componente es montado(se llama)

    useEffect(()=>{
        //console.log("cambio usuario")
    },[username])

    useEffect(()=>{
        //console.log("cambio email")
    },[email])
    return(
        <>
        <h1>form with custom hook</h1>
        <hr />

        <input type="text" className="form-control" placeholder="username" name="username" value={username}
        onChange={onInputChange}/>
        {(username === "messi")&&<Message/>}

        <input type="email" className="form-control mt-2" placeholder="juancruzberrios73@gmail.com" name="email" value={email}
        onChange={onInputChange}
        />

        <input type="password" className="form-control mt-2" placeholder="ingrese contraseña" name="password" value={password}
        onChange={onInputChange}
        />

        <button onClick={onResetForm} className="btn btn-primary mt-2">borrar</button>
        </>
    )
}