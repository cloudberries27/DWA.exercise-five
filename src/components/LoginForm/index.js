import React from 'react'

export default function Login(){
    return (
        <div>
            <form>
                <label for='loginEmail'> Email </label>
                <input type='email' name='loginEmail' placeholder='email'/>
                <label for='password'> Password </label>
                <inout type='password' name='password' placeholder="password"/>
                <input type='submit'/>
            </form>
        </div>
    )
}