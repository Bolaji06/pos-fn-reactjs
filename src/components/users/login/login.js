import React from "react";
import InputField from "../../common/form/inputField"

function Login() {
    return (
        <div >
            <h1>Login</h1>
            <div>
                <InputField type="email" placeholder="Email" />
            </div>
            <div>
                <InputField type="text" placeholder="Password" />
            </div>
        </div>
    );
}

export default Login;
