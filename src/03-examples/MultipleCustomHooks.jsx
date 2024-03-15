import { useFetch,useCounter } from "../hooks"
import { Character } from "./Character"
import { Loading } from "./Loading"
export const MultipleCustomHooks = () =>{
    
    const {counter,increment,decrement} = useCounter(1)
    const {data,isLoading,hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`)
    console.log(data)
    
    
    return(
        <>
        <h1>Rick and Morty characaters</h1>
        <hr />
        {
        isLoading ? <Loading/> : <Character data={data}/>
        }

        <button className="btn ntn-primary" disabled={isLoading} onClick={()=>increment()}>Next character</button>
        <button className="btn ntn-primary" disabled={isLoading} onClick={()=>decrement()}>Previus character</button>    
        <footer className="blockquote-footer">App de juan</footer>
        <p className="mb-1">footer</p>
        </>
    )
}