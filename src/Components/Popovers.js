import {ListGroup, Popover} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";
import Card from "react-bootstrap/Card";

export const Homebrew = (
    <Popover className="custom-popover mx-3">
        <Card.Header>Homebrew</Card.Header>
    </Popover>
);
export const Gym = (
    <Popover className="custom-popover mx-3">
        <Card.Header>Gym</Card.Header>
    </Popover>
);
export const Darts = (
    <Popover className="custom-popover my-3">
        <Card.Header>Darts</Card.Header>
    </Popover>
);
export const AmericanFootball = (
    <Popover className="custom-popover my-3">
        <Card.Header>American Football</Card.Header>
    </Popover>
);
export const Languages = (
    <Popover className="custom-popover mx-3">
        <Card.Header>
            <ListGroup variant="flush" className="px-0 mx-0">
                <ListGroup.Item className="mx-auto my-0 p-0">
                    Java
                </ListGroup.Item>
                <ListGroup.Item className="my-0 p-0">
                    Python
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
                    Git
                </ListGroup.Item>
                <ListGroup.Item className="my-0 p-0">
                    Docker
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
                    Placeholder
                </ListGroup.Item>
                <ListGroup.Item className="my-0 p-0">
                    Placeholder
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
                React
            </ListGroup.Item>
            <ListGroup.Item className="my-0 p-0">
                Bootstrap
            </ListGroup.Item>
        </ListGroup></Card.Header>
    </Popover>
);
