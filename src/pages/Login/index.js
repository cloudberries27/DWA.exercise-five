import React from "react";

import LoginForm from "../../components/LoginForm/index";

export default function Login({logInFunction}) {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm submitFunction = {logInFunction}/>
        </div>
    );
}