import {useForm} from "../hooks/useForm"

export const TodoAdd = ({OnNewTodo})=>{
    const {description,onInputChange,onResetForm}=useForm({
        description:" "
    })

    const onFormSubmit = (event)=>{
        event.preventDefault()

        if(description.length <= 1)return

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done:false
        }
        OnNewTodo(newTodo)
        onResetForm()
    }

    return(
            <form onSubmit={onFormSubmit}>
                <input type="text" placeholder="ingrese tarea" name="description" className="form-control" value={description} onChange={onInputChange}/>
                <button type="submit" className="btn btn-outline-primary" >agregar</button>
            </form>
    )
}