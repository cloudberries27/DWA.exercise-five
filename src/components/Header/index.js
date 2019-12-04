import React from 'react';

export default function Header(loggedIn, logoutFunction){
    return(
        <header>
            <nav>
                {loggedIn && <a href='/'>Home</a>}
                {!loggedIn &&<a href='/login'>Login</a>}
                {!loggedIn && <a href='/sign-uo'>Sign Up</a>}
                {loggedIn && <a onClick={() =>logoutFunction()}>Log Out</a>}
            </nav>
        </header>
    )
}