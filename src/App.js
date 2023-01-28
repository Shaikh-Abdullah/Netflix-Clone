import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import HomeScreen from "./Components/HomeScreen";
import LoginScreen from "./Components/LoginScreen";
import { auth } from "./firebase";


function App() {
  const user = null;

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {

    })
  }, [])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
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

