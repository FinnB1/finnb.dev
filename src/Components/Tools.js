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
                    <Card className="custom-card">
                        <Card.Header>
                        <Accordion.Toggle as={Button} className="custom-button" eventKey="0">
                            Coming soon...
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header>
                        <Accordion.Toggle as={Button} className="custom-button" eventKey="1">
                        Coming soon...
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                    </div>
                </div>
    );
}
export default Tools;
