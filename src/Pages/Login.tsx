import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "/olx-logo.png"
import "./Login.css"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
                      <button>Login</button>
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