import React from "react";
import './App.css';
import './Animations.css';
import Home from "./Home";
import P5 from "./P5";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function App() {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/p5">
                    <P5/>
                </Route>
            </Switch>
        </Router>
        );

}
