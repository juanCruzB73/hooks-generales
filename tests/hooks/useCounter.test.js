import {useCounter} from "../../src/hooks/useCounter"
const {renderHook,act} = require("@testing-library/react")

describe('useCounter test', () => {
  
    test("return default values",()=>{
        const {result}=renderHook(()=>useCounter());
        const {counter,decrement,reset,increment}=result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test("debe de retornar 100",()=>{
        const {result}=renderHook(()=>useCounter(100));
        const {counter}=result.current;
        expect(counter).toBe(100)
    });

    test("debe incrementar el contador",()=>{
        const{result}=renderHook(()=>useCounter());
        const {increment}=result.current;

        act(()=>{
            increment();
        })

        expect(result.current.counter).toBe(11)

    })
})
