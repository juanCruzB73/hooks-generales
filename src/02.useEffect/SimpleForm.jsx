import { useEffect, useState } from "react"
import {Message} from './Message'

export const SimpleForm = () =>{

    const[formState,setFormState]=useState({
        username:"messi",
        email: "messi@gmail.com"
    })

    const{username,email}=formState

    const onInputChange = ({target})=>{
        const {name,value}=target
        setFormState({
            ...formState,
            [name]:value//"[]"son propiedades computadas
        })
    }


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
        <h1>Formulario Simple</h1>
        <hr />
        <input type="text" className="form-control" placeholder="username" name="username" value={username}
        onChange={onInputChange}/>
        {(username === "messi")&&<Message/>}
        <input type="email" className="form-control mt-2" placeholder="juancruzberrios73@gmail.com" name="email" value={email}
        onChange={onInputChange}
        />

        </>
    )
}