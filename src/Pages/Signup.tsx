import { useContext, useEffect, useState } from "react"
import Logo from "/olx-logo.png"
import { UserSignup } from "../interfaces/signup"
import "./Signup.css"
import { FirebaseContext } from "../Store/FirebaseContext"
import { Link, useNavigate } from "react-router-dom"

export default function Signup() {

    const navigate = useNavigate()
    const signup: UserSignup = {
        username: "",
        password: "",
        email: "",
        phoneNumber: "",
    }
    const [form, setForm] = useState(signup)

    const { signupAuth } = useContext(FirebaseContext)

    const handleSubmit = async (e: Event) => {
        e.preventDefault()
        const accountVerfied= await signupAuth(form.username, form.email, form.password)
        if(accountVerfied === 'success'){
            navigate('/login')
        }
    }
    // const handleChange = (e) => {
    //     setForm({
    //         ...form,
    //         [e.target.name]: e.target.value,
    //     })
    // }
    return (
        <div>
            <div className="signupParentDiv">
                <img src={Logo} width="200px" height="200px" alt="" />
                <form>
                    <label htmlFor="fname">Username</label>
                    <br />
                    <input type="text"
                        className="input"
                        value={form.username}
                        // onChange={(e)=>{handleSubmit(e)}}
                        onChange={(e) => setForm({
                            ...form,
                            [e.target.name]: e.target.value
                        })}
                        name="username"
                        id="fname"
                    />
                    <br />
                    <br />
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="email"
                        className="input"
                        name="email"
                        id="email"
                        value={form.email}
                        onChange={(e) => setForm({
                            ...form,
                            [e.target.name]: e.target.value
                        })}
                        required
                    />
                    <br />
                    <br />
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password"
                        className="input"
                        name="password"
                        id="password"
                        value={form.password}
                        onChange={(e) => setForm({
                            ...form,
                            [e.target.name]: e.target.value
                        })}
                    />
                    <br />
                    <br />
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <br />
                    <input type="tel"
                        className="input"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={form.phoneNumber}
                        onChange={(e) => setForm({
                            ...form,
                            [e.target.name]: e.target.value
                        })}
                    />
                    <br />
                    <br />
                    <button onClick={handleSubmit}>Sign Up</button>
                </form>
                     <h1>Already Have Account   <Link to={"/login"}>Login</Link></h1>
            </div>
        </div>
    )
}