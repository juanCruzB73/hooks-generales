import { useState } from "react"

export const useCounter = (initialValue)=>{
    
    const [counter,setCounter]=useState(initialValue)

    const increment = ()=>{
        setCounter(counter+1)
    }
    const reset = ()=>{setCounter(initialValue)}

    const decrement = ()=>{
        if(counter===0)return
        setCounter(counter-1)
    }

    const sumarDos = (value)=>{
        setCounter(counter+value)
    }

    return{//desestructuracion tiene que ser con el mismo simbolo del return
        counter,increment,reset,decrement,sumarDos
    }//se esta manera puedo exportar funciones y objetos. counter(objeto),todo lo otro(funciones)
}