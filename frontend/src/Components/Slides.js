import Home from "./Home";
import background from "../background.mp4";
import {React} from "react";
import Div100vh from "react-div-100vh";
import Login from "./Login";
import {Carousel} from "react-bootstrap";

const Slides = () => {

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
