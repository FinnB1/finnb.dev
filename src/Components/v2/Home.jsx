import React from "react";
import '../App.css';
import '../Animations.css';
import Button from "react-bootstrap/Button";
import {FaLinkedinIn, FaGithub, FaRegEnvelope} from "react-icons/fa";
import Col from "react-bootstrap/Col";


const Home = () => {


    return (
                <div className="overlay mx-auto">
                    <Col className="column">
                        <h1 className="move-down">
                            Finn Butler
                        </h1>
                        <Button onClick={() => window.open("https://github.com/FinnB1", "_blank")}
                                className="mx-2 custom-button move-right">
                            <FaGithub/>
                        </Button>
                        <Button onClick={() => window.open("https://www.linkedin.com/in/finnbutler1/", "_blank")}
                                className="mx-2 custom-button fade-in">
                            <FaLinkedinIn/>
                        </Button>
                        <Button onClick={() => window.open("mailto:finnbutler1@gmail.com", "_blank")}
                                className="mx-2 custom-button move-left">
                            <FaRegEnvelope/>
                        </Button>
                        <div className="move-up info-list my-2">MEng Computer Science - University of
                            Warwick <br />
                            Software Engineer - Microsoft UK
                            
                        </div>
                    </Col>
                </div>
    );
}
export default Home;
