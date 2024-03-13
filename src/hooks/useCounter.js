import { useState } from "react"

export const useCounter = (initialValue=10)=>{
    
    const [counter,setCounter]=useState(initialValue)

    const increment = ()=>{
        setCounter(counter+1)
    }
    const reset = ()=>{setCounter(initialValue)}

    const decrement = ()=>{
        counter > 1 ? setCounter(counter-1) : none
        
    }

    const sumarDos = (value)=>{
        setCounter(counter+value)
    }

    return{//desestructuracion tiene que ser con el mismo simbolo del return
        counter,increment,reset,decrement,sumarDos
    }//se esta manera puedo exportar funciones y objetos. counter(objeto),todo lo otro(funciones)
}