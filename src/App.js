import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, loggout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";
import Nav from "./Nav";
import AboutScreen from "./screens/AboutScreen";
import PaymentSuccessScreen from "./screens/PaymentSuccessScreen";
import PaymentFailScreen from "./screens/PaymentFailScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // logged out
        dispatch(loggout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route exact path="/pyament">
              <PaymentSuccessScreen />
            </Route>{" "}
            <Route exact path="/fail">
              <PaymentFailScreen />
            </Route>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
            <Route exact path="/about">
              <Nav />
              <AboutScreen />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
