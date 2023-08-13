import React from "react";
import '../App.css';
import '../Animations.css';
import {Form, Button} from "react-bootstrap";
import {FaLock} from "react-icons/fa";
import { sha256 } from 'js-sha256';
import Tools from "./Tools.js";


const Login = ({setActive}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        if (sha256(e.target[0].value) === '39cb7acc3d41c9431aa818ca6938f388a1283dc4a006e6a3bf1eca6ab931415a')
            setActive(<Tools />)
    }

    return (
                <div className="overlay mx-auto">
                    <div>
                        <Form onSubmit={handleSubmit}>
                        <Form.Group className="mt-3" controlId="password">
                            <Form.Control type="password" placeholder="password" className="custom-input"/>
                        </Form.Group>
                        <Button className="mt-3 custom-button" type="submit">
                            <FaLock />
                        </Button>
                        </Form>
                    </div>

                </div>
    );
}
export default Login;
