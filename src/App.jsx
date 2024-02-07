import React from "react";
import './App.css';
import './Animations.css';
// import Slides from "./Components/Slides";
import Home from "./Components/Home";
// import Login from "./Components/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
        </BrowserRouter>
        );
}
