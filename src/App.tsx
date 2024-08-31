import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import Signup from "./Pages/Signup"
import { useContext, useEffect } from "react"
import { AuthContext } from "./Store/FirebaseContext"
import { auth } from "./Firebase/config"
import { onAuthStateChanged } from "firebase/auth"

function App() {


  const {setUser} = useContext(AuthContext) 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user, 'user is showing hellow');
    });
  
    return () => unsubscribe();
  }, [setUser]); 
  


  return (

    <div>
      <Router>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/" Component={Home} />
          <Route path="/signup" Component={Signup} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
