import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from "./components/Header/index"
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path='/' component={UserProfile}/>
        <Route exact path='/Login' component={Login}/>
        <Route exact path='/sign-uo' component={SignUp}/>
      </Router>
    </div>
  );
}

export default App;
