import React, {useEffect, useState} from 'react';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import './App.css';

import Header from "./components/Header/index"
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import SignUp from "./pages/SignUp";

const firebaseConfig = {
  apiKey: "AIzaSyDReqcXRuwfMrsA-JlMuScUooTwt4J7F40",
  authDomain: "exercise-f-8130a.firebaseapp.com",
  databaseURL: "https://exercise-f-8130a.firebaseio.com",
  projectId: "exercise-f-8130a",
  storageBucket: "exercise-f-8130a.appspot.com",
  messagingSenderId: "627069161727",
  appId: "1:627069161727:web:15cf9e0fee68db27b37cca"
};


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(()=> {
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .catch(function (error) {
        console.log('error', error);
    });
  }, [firebaseConfig]);

  useEffect(()=>{
    firebase.auth().onAuthStateChanged(function(user){
      if (user){
        setLoggedIn(true);
        setUser(user);
      }else{
        setLoggedIn(false);
        setUser({});
      }
    });
  }, []);

  function signUpFunction(e){
    e.preventDefault();
    let email = e.currentTarget.createEmail.value;
    let password = e.currentTarget.createPassword.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(response){
        setLoggedIn(true);
      })
      .catch(function(error) {
        console.log('error',error);
    });
  }
  function logInFunction(e){
    e.preventDefault();
    let email = e.currentTarget.loginEmail.value;
    let password = e.currentTarget.loginPassword.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(response){
        setLoggedIn(true);
      })
      .catch(function(error) {
        console.log('error',error);
    });
  }
  function logOutFunction(){
    firebase
      .auth()
      .signOut()
      .then(function(){
        setLoggedIn(false);
      })
      .catch(function(error) {
        console.log('error',error);
    });
  }
  return (
    <div className="App">
      <Header loggedIn={loggedIn} logOutFunction={logOutFunction}/>
      <Router>
        <Route exact path='/'>
          {loggedIn ? <UserProfile user={user}/> : <Redirect to='/login'/>}
        </Route>
        <Route exact path='/sign-up'>
          {loggedIn ?  <Redirect to='/' /> : <SignUp signUpFunction = {signUpFunction}/> }
        </Route>
        <Route exact path='/login'>
          {loggedIn ? <Redirect to='/' /> : <Login logInFunction = {logInFunction}/> }
        </Route>
      </Router>
    </div>
  );
}

export default App;
