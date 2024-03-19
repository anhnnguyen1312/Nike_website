import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";

export default function LoginForm () {
    console.log("login ne")
    return (
        <>
         <Router>
        <div className="App">
          <div className="appAside" />
          <div className="appForm">
            <div className="pageSwitcher">
            <NavLink
                exact
                to="/login/sign-in"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/login/sign-up"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="formTitle">
              <NavLink
              
                to="/login/sign-in"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/login/sign-up"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign Up
            </NavLink>
            </div>
            {console.log("a")}
            <Route path="/login/sign-in" component={Signin}  />
            <Route path="/login/sign-up" component={Signup} />

          </div>
        </div>
      </Router>
        </>
    )
}