import { fireEvent, render,screen } from "@testing-library/react"
import { TodoItem } from "../../src/08-useReducer/TodoItem"

describe('pruebas en <TodoItem/>', () => {

    const todo={
        id:1,
        description: "practice book",
        done:false
    }

    const onDeleteTodoMock = jest.fn() 
    const onToggleTodoMock = jest.fn()

    beforeEach( () => jest.clearAllMocks() )
    
    test("debe mostart el todo pendiente",()=>{
        
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>)
    
        const liElement = screen.getByRole('listitem');

        const spanElement=screen.getByLabelText('span');
        expect(spanElement.className).toBe("align-self-center ")
    
    })

    test("debe mostart el todo completado",()=>{

        todo.done=true;
        
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>)
    
        const liElement = screen.getByRole('listitem');

        const spanElement=screen.getByLabelText('span');
        expect(spanElement.className).toBe("align-self-center text-decoration-line-through")
    
    })

    test("debe llamar el toggle todo al click",()=>{
        
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>)

        const spanElement=screen.getByLabelText('span');

        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)

    })

    test("debe llamar el delete todo al click",()=>{
        
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>)

        const deleteButton=screen.getByLabelText("delete");

        fireEvent.click(deleteButton);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)

    })


})
