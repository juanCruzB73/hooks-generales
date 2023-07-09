import { useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"

const initalState=[{
    id: new Date().getTime(),
    description:"estudiar redes",
    done: false
},
{
    id: new Date().getTime()*3,
    description:"estudiar comptia",
    done: false
}]
export const TodoApp = ()=>{
    const [todos,dispatch]=useReducer(todoReducer,initalState)

const handleNewTodo = (todo)=>{
    console.log(todo)//para todoAdd
}
    return (
        <>
        <h1>todo app de juan: 3<span>pendientes: 2</span></h1>
        <div className="row">
            <div className="col-7">
                <TodoList todos={todos}/>
            </div>
            <div className="col-5">
                <h4>Add todo</h4>
                <hr />
                <TodoAdd OnNewTodo={handleNewTodo()}/>
            </div>
        </div>
        </>
    )
}