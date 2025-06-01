import './App.css'
import './Animations.css';
import Home from "./Components/Home.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Tube from './Components/Tube.tsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tube" element={<Tube />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
