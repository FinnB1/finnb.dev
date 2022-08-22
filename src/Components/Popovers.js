import {ListGroup, Popover} from "react-bootstrap";
import React from "react";
import Card from "react-bootstrap/Card";
import {AiOutlineNodeIndex} from "react-icons/ai";
import {FaBootstrap, FaDocker, FaGitAlt, FaJava, FaPython, FaReact} from "react-icons/fa";
import { GiAmericanFootballHelmet, GiBeerStein, GiDart, GiWeightLiftingUp } from "react-icons/gi";
import {IoLogoJavascript} from "react-icons/io";


export const Languages = (
    <Popover className="custom-popover mx-3">
        <Card.Header>
            <ListGroup variant="flush" className="px-0 mx-0">
                <ListGroup.Item className="mx-auto my-1 p-0">
                    Java <FaJava style={{fontSize: "large", fontWeight: "bold"}} className="mb-1 ml-1"/>
                </ListGroup.Item>
                <ListGroup.Item className="mx-auto mb-1 p-0">
                    Python <FaPython style={{fontSize: "large", fontWeight: "bold"}} className="mb-1 ml-1"/>
                </ListGroup.Item>
                <ListGroup.Item className="mx-auto p-0">
                    JS <IoLogoJavascript style={{fontSize: "large", fontWeight: "bold"}} className="mb-1 ml-1"/>
                </ListGroup.Item>
            </ListGroup>
        </Card.Header>
    </Popover>
);
export const Tools = (
    <Popover className="custom-popover mx-3">
        <Card.Header>
            <ListGroup variant="flush" className="px-0 mx-0">
                <ListGroup.Item className="mx-auto my-0 p-0">
                    Git <FaGitAlt style={{fontSize: "large", fontWeight: "bold"}} className="mb-1 ml-1"/>
                </ListGroup.Item>
                <ListGroup.Item className="my-0 p-0">
                    Docker <FaDocker style={{fontSize: "large", fontWeight: "bold"}} className="mb-1 ml-1"/>
                </ListGroup.Item>
            </ListGroup>
        </Card.Header>
    </Popover>
);
export const Examples = (
    <Popover className="custom-popover my-3">
        <Card.Header>
            <ListGroup variant="flush" className="px-0 mx-0">
                <ListGroup.Item className="mx-auto my-0 p-0">
                    Discrete Maths <AiOutlineNodeIndex style={{fontSize: "large", fontWeight: "bold"}} className="mb-1 ml-1"/>
                </ListGroup.Item>
            </ListGroup>
        </Card.Header>
    </Popover>
);
export const LAndF = (
    <Popover className="custom-popover my-3">
        <Card.Header>
            <ListGroup variant="flush" className="px-0 mx-0">
            <ListGroup.Item className="mx-auto my-0 p-0">
                React <FaReact style={{fontSize: "large", fontWeight: "bold"}} className="mb-1 ml-1"/>
            </ListGroup.Item>
            <ListGroup.Item className="mx-auto my-0 p-0">
                Bootstrap <FaBootstrap style={{fontSize: "large", fontWeight: "bold"}} className="mb-1 ml-1"/>
            </ListGroup.Item>
        </ListGroup></Card.Header>
    </Popover>
);
