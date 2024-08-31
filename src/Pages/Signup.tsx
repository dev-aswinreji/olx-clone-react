import { useState } from "react"
import Logo from "/olx-logo.png"
import { UserSignup } from "../interfaces/signup"
import "./Signup.css"


export default function Signup() {

    const signup: UserSignup = {
        username: "",
        password: "",
        email: "",
        phoneNumber: "",
    }
    const [form, setForm] = useState(signup)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.name);
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
        console.log(form, 'form is showing');

    }
    return (
        <div>
            <div className="signupParentDiv">
                <img src={Logo} width="200px" height="200px" alt="" />
                <form onClick={handleSubmit}>
                    <label htmlFor="fname">Username</label>
                    <br />
                    <input type="text"
                        className="input"
                        value={form.username}
                        // onChange={(e)=>{handleSubmit(e)}}
                        onChange={handleSubmit}
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
                        id=""
                        value={form.email}
                        onChange={handleSubmit}
                        required
                    />
                    <br />
                    <br />
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password"
                        className="input"
                        name="password"
                        id=""
                        value={form.password}
                        onChange={handleSubmit}
                    />
                    <br />
                    <br />
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <br />
                    <input type="tel"
                        name="phoneNumber"
                        id=""
                        value={form.phoneNumber}
                        onChange={handleSubmit}
                    />
                    <br />
                    <br />
                    <button>Sign Up</button>
                </form>

            </div>
        </div>
    )
}