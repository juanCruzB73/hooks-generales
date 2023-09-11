import { useReducer,useEffect } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const initalState=[]

const init = ()=>{
    return JSON.parse(localStorage.getItem("todos")) || []
}

export const useTodo = ()=>{

    const [todos,dispatch]=useReducer(todoReducer,initalState,init)

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])

    const handleNewTodo = (todo)=>{
        const action ={
            type:"add todo",
            payload:todo
        }
        dispatch(action)
    }

    const handDeleteTodo = (id)=>{
        dispatch({
            type:"remove todo",
            payload: id
        })
    }

    const handleToggleTodo = (id)=>{
        dispatch({
            type: "toggle todo",
            payload: id
        })
    }
    
    return{
        todos,handleNewTodo,handDeleteTodo,handleToggleTodo,
        countTodo: todos.length,
        pendingTodo: todos.filter(todos => !todos.done).length
    }
}