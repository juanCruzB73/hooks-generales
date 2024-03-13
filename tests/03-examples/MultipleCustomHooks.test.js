import {MultipleCustomHooks} from "../../src/03-examples/MultipleCustomHooks"
import { render } from "@testing-library/react"

describe('pruebas en el <MultipleCustomHook/>', () => {
    test("debe mostrar componenete por defecto",()=>{
        render(<MultipleCustomHooks/>)
    })
})
