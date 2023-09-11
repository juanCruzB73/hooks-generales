import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodo } from "../hooks"

export const TodoApp = ()=>{
    
    const {todos,handleNewTodo,handDeleteTodo,handleToggleTodo,countTodo,pendingTodo}=useTodo()

    return (
        <>
        <h1>todo app de juan: {countTodo}<span> pendientes: {pendingTodo}</span></h1>
        <div className="row">
            <div className="col-7">
                <TodoList todos={todos}
                onDeleteTodo={handDeleteTodo}
                onToggleTodo={handleToggleTodo}
                />
            </div>
            <div className="col-5">
                <h4>Add todo</h4>
                <hr />
                <TodoAdd OnNewTodo={handleNewTodo}/>
            </div>
        </div>
        </>
    )
}