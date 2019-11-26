import React from 'react';

export default function Header(loggedIn){
    return(
        <header>
            <nav>
                {loggedIn && <a href='/'>Home</a>}
                {!loggedIn &&<a href='/login'>Login</a>}
                {!loggedIn && <a href='/sign-uo'>Sign Up</a>}
                {loggedIn && <a href='/log-out'>Log Out</a>}
            </nav>
        </header>
    )
}