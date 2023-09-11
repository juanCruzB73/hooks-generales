export const todoReducer = (initialSate=[],action)=>{
    switch(action.type){
        case "add todo":
            return [...initialSate,action.payload]
        case "remove todo":
            return initialSate.filter(todo=>todo.id !== action.payload)
        case "toggle todo":
            return initialSate.map(todo =>{
                if(todo.id === action.payload){//payload = id del todo
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })
        default:
            return initialSate
    }
}