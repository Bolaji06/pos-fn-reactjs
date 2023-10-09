import React, { useState } from "react";
import InputField from "../../common/form/inputField"
import AuthenticatedNavBar from "../../common/navBar/authenticatedNavBar";

function EditUser(props) {
    const { editUser, user } = props
    const [userInput, setUserInput] = useState(user || {})

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setUserInput(prev => ({ ...prev, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        editUser(userInput)
    }
    return (
        <div >
            <AuthenticatedNavBar />
            <h1>Edit User</h1>
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

export default EditUser;
