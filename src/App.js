import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import HomeScreen from "./Components/HomeScreen";
import LoginScreen from "./Components/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from "./feature/userSlice";
import ProfileScreen from "./Components/ProfileScreen";



function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // Logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        );
      } else {
        // Logged out
        dispatch(logout)
      }
    })
    return unsubscribe;
  }, [])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
            <Switch>
              <Route path="/profile">
                <ProfileScreen />
              </Route>
            <Route path="/" exact>
              <HomeScreen />
            </Route>
          </Switch>
        )}

      </Router>
    </div>
  );
}

export default App;

