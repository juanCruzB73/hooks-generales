import {useCounter} from "../hooks/useCounter"

export const CounterWithCustomHook = ()=>{

    const { counter,increment,reset,decrement,sumarDos } = useCounter()


    return(
        <>
        <h1>Counter con Hook: {counter}</h1>
        <hr />
        <button onClick={increment} className="btn btn-primary">+1</button>
        <button onClick={reset} className="btn btn-primary">reset</button>
        <button onClick={decrement} className="btn btn-primary">-1</button>
        <button onClick={()=>sumarDos(2)} className="btn btn-primary">+2</button>
        </>
    )
}