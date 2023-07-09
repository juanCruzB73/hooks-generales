import { useFetch,useCounter } from "../hooks"
import { Character } from "../03-examples/Character"
import { Loading } from "../03-examples/Loading"
export const Layout = () =>{
    
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

        <button className="btn ntn-primary" onClick={()=>increment()}>Next character</button>
        <button className="btn ntn-primary" onClick={()=>decrement()}>Previus character</button>    
        <footer className="blockquote-footer">App de juan</footer>
        <p className="mb-1">footer</p>
        </>
    )
}