import React from 'react'

export default function LoginForm({submitFunction}){
    return (
        <div>
            <form onSubmit={e=>submitFunction(e)}>
                <label htmlFor='email'> Email </label>
                <input type='email' name='email' placeholder='email'/>
                <label htmlFor='password'> Password </label>
                <input type='password' name='password' placeholder="password"/>
                <button>Login</button>
            </form>
        </div>
    )
}