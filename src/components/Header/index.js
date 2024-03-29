import React from 'react';

export default function Header({loggedIn, logOutFunction}){
    return(
        <header>
            <nav>
                {loggedIn && <a href='/'>Home</a>}
                {!loggedIn && <a href='/login'>Login</a>}
                {!loggedIn && <a href='/sign-up'>Sign Up</a>}
                {loggedIn && <a onClick={() => logOutFunction()}> Log Out </a>}
            </nav>
        </header>
    )
}