import React from "react";
import '../App.css';
import '../Animations.css';
import {Form, Button} from "react-bootstrap";
import {FaLock} from "react-icons/fa";


const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:5000/login', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({
                "password": e.target[0].value,
            })
        })
            .then(response => {
                console.log(response);
            });
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
