import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from "./components/Header/index"
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import SignUp from "./pages/SignUp";
import LogOut from "./pages/LogOut";


function App() {
  return (
    <div className="App">
      <Header loggedin={true} />
      <Router>
        <Route exact path='/' component={UserProfile}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/sign-uo' component={SignUp}/>
        <Route exact path='/log-out' component={LogOut}/>
      </Router>
    </div>
  );
}

export default App;
