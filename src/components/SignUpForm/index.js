import React from 'react'

export default function SignUp({submitFunction}){
    return (
        <div className='signUp-comp'>
            <form onSubmit = { e => submitFunction(e) }>
                <label htmlFor='name'> Name </label>
                <input type='name' name='name' placeholder='Name'/>
                <label htmlFor='createEmail'> Email </label>
                <input type='email' name='createEmail' placeholder='Email'/>
                <label htmlFor='createPassword'> Create Password </label>
                <input type='password' name='createPassword' placeholder="Password"/>
                <button>Sign Up</button>
            </form>
        </div>
    )
}