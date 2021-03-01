import React from "react";
import './App.css';
import './Animations.css';
import Home from "./Components/Home";
import Slides from "./Components/Slides";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Details from "./Components/Details";

export default function App() {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Slides />
                </Route>
            </Switch>
        </Router>
        );

}
