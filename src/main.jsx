import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
//import { FormWithCustomHook } from './02.useEffect/FormWithCustomHook'
//import { HooksApp } from './HooksApp'
//import { CounterApp } from './01-useState/CounterApp'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
//import { SimpleForm } from './02.useEffect/SimpleForm'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { FocuScreen } from './04-useRef/FocusScreen'
//import { Layout } from './05-useLayoutEffect/Layout'
//import { Memorize } from './06-memos/memorize'
//import { CallbacHook } from './06-memos/CallbackHook'
//import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>{/*high order componenet(recibe componentes)*/}
  {/*<React.StrictMode>*/}
    <MainApp />
 {/*</React.StrictMode>*/}
 </BrowserRouter>
)
