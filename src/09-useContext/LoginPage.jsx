import { useContext } from "react"
import { UserContext } from "./context/UserContex";

export  const LoginPage = () => {

    const {user,setUser}=useContext(UserContext);
    console.log(user)

    return (
      <>
        <h1>Login page</h1><hr />

        <pre>
          {JSON.stringify(user,null,3)}
        </pre>

        <button className="btn btn-primary" onClick={()=>setUser({id: 123,name:"elliot",email:"elliotsepiol@gmail.com"})}>
          Establecer usuario
        </button>
      </>
    )
  }