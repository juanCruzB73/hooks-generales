export const todoReducer = (initialSate,action)=>{
    switch(action.type){
        case "ABC":
            throw new Error ("accion no implementada")
        default:
            return initialSate
    }
}