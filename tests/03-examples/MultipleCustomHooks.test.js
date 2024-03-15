import {MultipleCustomHooks} from "../../src/03-examples/MultipleCustomHooks"
import { fireEvent, render, screen } from "@testing-library/react"
import { useFetch } from "../../src/hooks/useFetch"
import {useCounter} from "../../src/hooks/useCounter"

jest.mock("../../src/hooks/useCounter")
jest.mock('../../src/hooks/useFetch');

describe('pruebas en el <MultipleCustomHook/>', () => {
    
    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })


    test("debe mostrar componenete por defecto",()=>{

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError:null
        })

        render(<MultipleCustomHooks/>)
        
        expect(screen.getByText("Rick and Morty characaters"))
        
        let nextButton = screen.getByRole('button',{name:"Next character"})
        expect(nextButton.disabled).toBeTruthy();
    })

    test("return expected data",()=>{

        useFetch.mockReturnValue({
            data: {name:"elliot",image:"ayycoñooo"},
            isLoading: false,
            hasError:null
        })

        render(<MultipleCustomHooks/>)

        expect(screen.getByText("elliot")).toBeTruthy();
        
        let nextButton = screen.getByRole('button',{name:"Next character"})
        expect(nextButton.disabled).toBeFalsy();
    })

    test("debe de llamar fuuncion incrementar",()=>{

        useFetch.mockReturnValue({
            data: {name:"elliot",image:"ayycoñooo"},
            isLoading: false,
            hasError:null
        })

        render(<MultipleCustomHooks/>)

        let nextButton = screen.getByRole('button',{name:"Next character"})

        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled()

    })
})
