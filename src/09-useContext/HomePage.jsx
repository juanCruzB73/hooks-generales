import { useContext } from "react"
import { UserContext } from "./context/UserContex";

export  const HomePage = () => {

  const {user} = useContext(UserContext);

    return (
      <>
        <h1><small>{user?.name}</small>'s Home Page</h1><hr />
        <pre>
          {JSON.stringify(user,null,3)}
        </pre>
      </>
    )
  }