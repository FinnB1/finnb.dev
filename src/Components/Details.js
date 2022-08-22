import React from "react";
import '../App.css';
import '../Animations.css';
import Button from "react-bootstrap/Button";
import {FaTools} from "react-icons/fa";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {OverlayTrigger} from "react-bootstrap";
import {Examples, LAndF, Languages, Tools} from "./Popovers";

const Details = ({showSecondary, setShowSecondary, handleClick, clickedSecondary}) => {

    return (
                <div className="overlay mx-auto">
                    <Row xs={1} md={2} className="min-vw-100 min-vh-100 justify-content-center align-items-center">
                        <Col className="my-5 move-down">
                        </Col>
                        <Col className="my-5 move-up">
                            <OverlayTrigger show={showSecondary} placement="right" overlay={Languages}>
                                <OverlayTrigger show={showSecondary} placement="left" overlay={Tools}>
                                    <OverlayTrigger show={showSecondary} placement="top" overlay={Examples}>
                                        <OverlayTrigger show={showSecondary} placement="bottom" trigger="click" overlay={LAndF} onToggle={() => setShowSecondary(!showSecondary)}>
                                            <Button onClick={() => handleClick(2)} className={"planet-button p-3 "+clickedSecondary}><FaTools className="mb-2 mx-2"/></Button>
                                        </OverlayTrigger>
                                    </OverlayTrigger>
                                </OverlayTrigger>
                            </OverlayTrigger>
                        </Col>
                    </Row>

                </div>
    );
}
export default Details;
