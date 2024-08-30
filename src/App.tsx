import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./Pages/Login"

function App() {

  return (
    
    <div>
      <Router>
      <Routes>
        <Route path="/login" Component={Login} />
        {/* <Route path="/"  */}
        </Routes>  
      </Router>
    </div>
  )
}

export default App
