import Home from "./Home";
import background from "../background.mp4";
import {React, useState} from "react";
import Div100vh from "react-div-100vh";
import Login from "./Login";
import {Carousel} from "react-bootstrap";

const Slides = () => {

    const [show, setShow] = useState(false);
    const [showSecondary, setShowSecondary] = useState(false);
    const [clicked, setClicked] = useState("");
    const [clickedSecondary, setClickedSecondary] = useState("");

    function handleClick(id) {
        if (id === 1)
            if (clicked === "")
                setClicked("planet-button-clicked");
            else setClicked("");
        else
        if (clickedSecondary === "")
            setClickedSecondary("planet-button-clicked");
        else setClickedSecondary("");
    }

    function handleSlide() {
        setShow(false);
        setShowSecondary(false);
        setClicked("")
        setClickedSecondary("");
    }

    return (
        <Div100vh>
        <div className="video-container">
            <video autoPlay playsInline muted loop className='video'>
                <source src={background} type="video/mp4"/>
            </video>
            <header>
            <Carousel
            slide={false}
            nextLabel=""
            prevLabel=""
            className="slides"
            interval={null}
            fade
            onSlide={handleSlide}
            >
        <Carousel.Item>
        <Home />
        </Carousel.Item>
        <Carousel.Item>
                <Login/>
            </Carousel.Item>
        </Carousel>
            </header>
        </div>
        </Div100vh>
    );
}
export default Slides;
