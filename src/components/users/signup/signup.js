import React, { useState } from "react";
import InputField from "../../common/form/inputField"
import NavBar from "../../common/navBar/unAuthenticatedNavBar";
import { useNavigate } from "react-router-dom/dist";

function Signup(props) {
    const navigate = useNavigate()

    const { signup } = props
    const [userInput, setUserInput] = useState({})

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setUserInput(prev => ({ ...prev, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        signup(userInput, navigate)
    }
    return (
        <div >
            <NavBar />
            <h1>Signup</h1>
            <div>
                <InputField name="firstName" value={userInput.firstName} onChange={handleChange} type="text" placeholder="First Name" />
            </div>
            <div>
                <InputField name="lastName" value={userInput.lastName} onChange={handleChange} type="text" placeholder="Last Name" />
            </div>
            <div>
                <InputField name="email" value={userInput.email} onChange={handleChange} type="email" placeholder="Email" />
            </div>
            <div>
                <InputField name="role" value={userInput.role} onChange={handleChange} type="text" placeholder="Role" />
            </div>
            <div>
                <InputField name="password" value={userInput.password} onChange={handleChange} type="text" placeholder="Password" />
            </div>
            <div>
                <InputField name="repeat_password" value={userInput.repeat_password} onChange={handleChange} type="text" placeholder="Repeat password" />
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default Signup;
