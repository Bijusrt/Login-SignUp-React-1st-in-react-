import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Login from './components/login';
import Signup from './components/signup';
import ForgetPassword from './components/forgot_password';
import history from './history';
import Home from "./components/home";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/forgetpassword" component={ForgetPassword} />
                </Switch>
            </Router>
        )
    }
}