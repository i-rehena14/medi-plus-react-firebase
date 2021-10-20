import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import image from '../../images/banner2.jpg';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="d-flex">
            <div className="ms-4 mt-4 border w-50 bg-light">
                <h1 className="text-center text-danger">Login</h1>
                <div className="m-4">
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Email
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="email" placeholder="Email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Password
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                        <p>Create New account <Link to="/register">Register</Link></p>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button className="bg-danger border rounded text-white p-2" type="submit">Sign in</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </div>

                <div className="text-center">
                    <h3>OR</h3>
                    <p>Sign in with:</p>
                    <button onClick={signInUsingGoogle}>Google</button>
                </div>
            </div>
            <div className="me-4 mt-4">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Login;