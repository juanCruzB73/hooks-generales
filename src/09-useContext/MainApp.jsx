import { Routes,Route,Navigate} from "react-router-dom"
import { NavBar } from "./NavBar"
import {HomePage} from './HomePage'
import {AboutPage} from './AboutPage'
import {LoginPage} from './LoginPage'
import {Error404} from './Error404'
export const MainApp = () => {
  return (
    <>
      <h1>rutas de juan</h1>
      <NavBar/>
      <hr />  
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="login" element={<LoginPage/>} />
        <Route path="about" element={<AboutPage/>} />
        <Route path="/*" element={<Error404/>}/>
        {/* <Route path="/*" element={<Navigate to"/about"/>} />  */}
      </Routes>
    </>
  )
}