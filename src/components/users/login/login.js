import React from "react";
import InputField from "../../common/form/inputField"
import NavBar from "../../common/navBar/unAuthenticatedNavBar";
import { useNavigate } from "react-router-dom/dist";
import { useState } from "react";

function Login(props) {
    const navigate = useNavigate()
    const { login } = props
    const [userInput, setUserInput] = useState({})

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setUserInput(prev => ({ ...prev, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        login(userInput, navigate)
    }
    return (
        <div >
            <NavBar />
            <h1>Login</h1>
            <div>
                <InputField name="email" value={userInput.email} onChange={handleChange} type="email" placeholder="Email" />
            </div>

            <div>
                <InputField name="password" value={userInput.password} onChange={handleChange} type="text" placeholder="Password" />
            </div>

            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default Login;
