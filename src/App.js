import React from "react";
import './App.css';
import './Animations.css';
import Slides from "./Components/Slides";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

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
