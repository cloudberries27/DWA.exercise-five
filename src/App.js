import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Feed from "./pages/Feed";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={UserProfile}/>
        <Route exact path='/Login' component={Login}/>
        <Route exact path='/sign-uo' component={SignUp}/>

      </Router>
    </div>
  );
}

export default App;
