import React from "react";

import SignUpForm from "./../../components/SignUpForm/index";

export default function SignUp({signUpFunction}){
    return(
        <div>
            <h1>account creation woohoo</h1>
            <SignUpForm submitFunction = {signUpFunction}/>
        </div>
    );
}