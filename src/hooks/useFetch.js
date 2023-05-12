import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const[state,setState] = useState({
        data:null,
        isLoading: true,
        hasError:null
    })
  
    const getFetch=async()=>{

        setState({...state,isLoading:true}) 

        const respuesta = await fetch(url)
        const data = await respuesta.json()
        
        setState({
            data,//data:data
            isLoading: false,
            hasError:null
        })
        console.log(data)
    }
    useEffect(()=>{
        getFetch()
    },[url])
  
  
  
    return{
        data: {
        image:state.data.image,
        id:state.data.id,
        name:state.data.name
    },
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}
