import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import Signup from "./Pages/Signup"

function App() {

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
