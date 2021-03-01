import React, {useState} from "react";
import '../App.css';
import '../Animations.css';
import Button from "react-bootstrap/Button";
import {FaTools, FaUmbrellaBeach} from "react-icons/fa";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {OverlayTrigger, Popover} from "react-bootstrap";
import {AmericanFootball, Darts, Examples, Gym, Homebrew, LAndF, Languages, Tools} from "./Popovers";

const Details = () => {

    const [show, setShow] = useState(false);
    const [showSecondary, setShowSecondary] = useState(false);
    const [clicked, setClicked] = useState("");
    const [clickedSecondary, setClickedSecondary] = useState("");

    const popoverVertical = (
        <Popover className="custom-popover my-3">
            <Button> heee</Button>
        </Popover>
    );

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



    return (
                <div className="overlay mx-auto">
                    <Row xs={1} md={2} className="min-vw-100 min-vh-100 justify-content-center align-items-center">
                        <Col className="my-5">
                            <OverlayTrigger show={show} placement="right" overlay={Homebrew}>
                                <OverlayTrigger show={show} placement="left" overlay={Gym}>
                                    <OverlayTrigger show={show} placement="top" overlay={Darts}>
                                        <OverlayTrigger placement="bottom" trigger="click" overlay={AmericanFootball} onToggle={() => setShow(!show)}>
                                            <Button onClick={() => handleClick(1)} className={"planet-button p-3 "+clicked}><FaUmbrellaBeach className="mb-2 mx-2"/></Button>
                                        </OverlayTrigger>
                                    </OverlayTrigger>
                                </OverlayTrigger>
                            </OverlayTrigger>
                        </Col>
                        <Col className="my-5">
                            <OverlayTrigger show={showSecondary} placement="right" overlay={Languages}>
                                <OverlayTrigger show={showSecondary} placement="left" overlay={Tools}>
                                    <OverlayTrigger show={showSecondary} placement="top" overlay={Examples}>
                                        <OverlayTrigger placement="bottom" trigger="click" overlay={LAndF} onToggle={() => setShowSecondary(!showSecondary)}>
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
