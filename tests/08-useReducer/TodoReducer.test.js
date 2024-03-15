import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('pruebas en toDoReducer', () => {

    const initialState=[{
        id: 1,
        description: "react course",
        done:false
    }]

    test("debe regresar valores iniciales",()=>{

        const newState=todoReducer(initialState,{})
        expect(newState).toBe(initialState)

    })

    test("debe de agregar un todo",()=>{
        const action ={ 
        type:"add todo",
        payload:{
            id:2,
            description:"actualizar repositorios",
            done: false
        }
    }
    const newState=todoReducer(initialState,action)
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload)
    })

    //debe eliminar todo

    test("debe borrar un todo",()=>{
    
        const action ={ 
            type:"remove todo",
            payload:1
        }

        const newState=todoReducer(initialState,action)

        expect(newState.length).toBe(0)

    })

    //debe realizar el todo

    test("debe reaizar el todo",()=>{
    
        const action ={ 
            type:"toggle todo",
            payload:1
        }

        const newState=todoReducer(initialState,action)
        expect(newState[0].done).toBe(true)

    })
})
