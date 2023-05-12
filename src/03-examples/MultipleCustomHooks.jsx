import { useFetch } from "../hooks/useFetch"
import {useCounter}from "../hooks/useCounter"
export const MultipleCustomHooks = () =>{
    
    const {counter,increment,decrement} = useCounter(1)
    const {data,isLoading,hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`)
    console.log(data)
    //const{name,image} = !!data[0]//data ? data[0] : false
    //const name = data.name
    //const image = data.image
    
    return(
        <>
        <h1>Rick and Morty characaters</h1>
        <hr />

        {
        isLoading ? <div className="alert alert-info text-center">Loading...</div> : 
        <blockquote className="blockquote text-end">
        <p className="mb-1">{data.name}</p>
        <img src={data.image} alt="" />
        <p className="mb-1">footer</p>
        
        <footer className="blockquote-footer">App de juan</footer>
        </blockquote> 
        }

        <button className="btn ntn-primary" onClick={()=>increment()}>Next character</button>
        <button className="btn ntn-primary" onClick={()=>decrement()}>Previus character</button>

        
        
        </>
    )
}