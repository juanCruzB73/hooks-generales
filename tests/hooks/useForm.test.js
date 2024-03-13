import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('test on useForm', () => {
  test("must return default information",()=>{
    
    const initialForm={
        name:"elliot",
        email:"elliotSepiol@gmail.com"
    }

    const { result }=renderHook(()=>useForm(initialForm))
    expect(result.current).toEqual({
        name: initialForm.name,
        email: initialForm.email,
        formState: initialForm,
        onInputChange:expect.any(Function),
        onResetForm: expect.any(Function)
    })
  })
  //montar hook, onInputChange, act,event...,expect.result.toBe(elliot)
  test("values deben ser los del inpput enviado",()=>{
    const newName="elliot";
    const initialValue={
        name:"Mr Robor",
        email:"Mrrobot.com"
    }
    const{result}=renderHook(()=>useForm(initialValue))
    const {onInputChange}=result.current
    act(()=>{
        onInputChange({target:{name:'name',value:newName}})
    })

    expect(result.current.name).toBe(newName)
    expect(result.current.formState.name).toBe(newName)
})
})
