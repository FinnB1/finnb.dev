import React, {useState} from "react";
import './App.css';
import './Animations.css';
import background from './background.mp4';
import Button from "react-bootstrap/Button";
import {FaLinkedinIn, FaGithub, FaRegEnvelope} from "react-icons/fa";
import {FiPlus, FiMinus} from "react-icons/fi";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const Home = () => {

    const [icon, setIcon] = useState(<FiPlus className="mb-1"/>);
    const [expanded, setExpanded] = useState(false);

    function changeIcon() {
        if (expanded) {
            setIcon(<FiPlus className="mb-1"/>);
            setExpanded(false);
        } else {
            setIcon(<FiMinus className="mb-1"/>);
            setExpanded(true);
        }
    }

    return (
        <div className="video-container">
            <video autoPlay playsInline muted loop className='video'>
                <source src={background} type="video/mp4"/>
            </video>
            <header>

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
                        <Button onClick={() => window.open("mailto:finn.butler@warwick.ac.uk", "_blank")}
                                className="mx-2 custom-button move-left">
                            <FaRegEnvelope/>
                        </Button>
                        <Accordion className="move-up">
                            <Card className="accordion-card mx-auto mt-5">
                                <Card.Header className="accordion-header">
                                    <Accordion.Toggle as={Button} onClick={() => changeIcon()}
                                                      className="custom-button" eventKey="0">
                                        About Me {icon}
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <div className="info-list my-2">2nd Year BSc Computer Science - University of
                                            Warwick
                                        </div>
                                        <div className="info-list my-2">A*AAB - Economics, Mathematics, Biology,
                                            French
                                        </div>
                                        <div className="info-list my-2">Java, Python, React, SQL, C</div>
                                        <div className="info-list my-2">Certified Microsoft Excel Specialist</div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>

                </div>

            </header>
        </div>
    );
}
export default Home;
