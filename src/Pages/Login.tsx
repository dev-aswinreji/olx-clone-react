import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Logo from "/olx-logo.png"
import "./Login.css"
import { FirebaseContext } from "../Store/FirebaseContext"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate("/")
    const {loginAuth} = useContext(FirebaseContext)
    const handleLogin = async (e)=>{
        e.preventDefault()
        const loginVerification = await loginAuth(email,password)
        if(loginVerification === "success"){
           navigate("/") 
        }
    }
    return (
        <div>
            <div className="loginParentDiv">
                <img width="200px" height="200px" src={Logo} alt="" />
                <form >
                    <label htmlFor="fname">Email</label>
                    <br />
                    <input className="input"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="fname"
                    />
                    <br />
                    <label htmlFor="lname">Password</label>
                    <br />
                    <input type="password"
                     name="password" 
                     id="lname"
                     className="input"
                    onChange={(e)=>setPassword(e.target.value)} 
                      />
                      <br />
                      <br />
                      <button onClick={handleLogin}>Login</button>
                      <br />
                </form>
                <span>
                Create An Account?
                <Link to={"/signup"} >
                Sign Up
                </Link>
                </span>
            </div>
        </div>
    )
}