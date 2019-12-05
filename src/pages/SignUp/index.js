import React from "react";

import SignUpForm from "../../components/SignUpForm/index";

export default function SignUp({signUpFunction}){
    return(
        <div className='signUp-page'>
            <h1>Sign Up</h1>
            <SignUpForm submitFunction = {signUpFunction}/>
        </div>
    );
}