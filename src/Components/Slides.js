import {Carousel} from "react-bootstrap";
import Home from "./Home";
import background from "../background.mp4";
import React from "react";
import Details from "./Details";

const Slides = () => {
    return (
        <div className="video-container">
            <video autoPlay playsInline muted loop className='video'>
                <source src={background} type="video/mp4"/>
            </video>
            <header>
        <Carousel nextLabel="" prevLabel="" className="slides">
            <Carousel.Item>
                <Home />
            </Carousel.Item>
            <Carousel.Item>
                <Details />
            </Carousel.Item>
        </Carousel>
            </header>
        </div>
    );
}
export default Slides;
