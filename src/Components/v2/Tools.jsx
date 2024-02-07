import React from "react";
import '../App.css';
import '../Animations.css';
import {Accordion, Card, Button} from "react-bootstrap";


const Tools = () => {

    return (
                <div className="overlay mx-auto d-flex flex-column">
                    <div className="h1 my-3">
                        Tools
                    </div>
                    <div>
                    <Accordion>
                    <Accordion.Item className="custom-card" eventKey="0">
                        <Accordion.Header>
                            Coming soon...
                        </Accordion.Header>
                        <Accordion.Collapse eventKey="0">
                        <Accordion.Body>Hello! I'm the body</Accordion.Body>
                        </Accordion.Collapse>
                    </Accordion.Item>
                    <Accordion.Item className="custom-card" eventKey="1">
                        <Accordion.Header>
                        Coming soon...
                        </Accordion.Header>
                        <Accordion.Collapse eventKey="1">
                        <Accordion.Body>Hello! I'm another body</Accordion.Body>
                        </Accordion.Collapse>
                    </Accordion.Item>
                    </Accordion>
                    </div>
                </div>
    );
}
export default Tools;
