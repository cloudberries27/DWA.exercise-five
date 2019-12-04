import React from 'react'

export default function SignUp({submitFunction}){
    return (
        <div>
            <form onSubmit={e=>submitFunction(e)}>
                <label HTMLFor='name'> Name </label>
                <input type='name' name='name' placeholder='Name'/>
                <label HTMLFor='email'> Email </label>
                <input type='email' name='email' placeholder='Email'/>
                <label HTMLFor='password'> Create Password </label>
                <input type='password' name='password' placeholder="Password"/>
                <button>Sign Up</button>
            </form>
        </div>
    )
}