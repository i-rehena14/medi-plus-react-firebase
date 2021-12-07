import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import image from '../../images/banner2.jpg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { auth, signInUsingGoogle, signInWithEmailAndPassword } = useAuth();

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleSignIn = e => {
        e.preventDefault();
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div className="d-lg-flex">
            <div className="m-4 w-75 border bg-light">
                <h1 className="m-4 text-danger text-center">Login</h1>
                <div className="m-4">
                    <Form onSubmit={handleSignIn}>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Email
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Password
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                        <p>Create New account <Link to="/register">Register</Link></p>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm={{ span: 10, offset: 2 }}>
                                <div className="text-danger">{error}</div>
                                <Button className="bg-danger border rounded text-white p-2" type="submit">Sign in</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </div>

                <div className="text-center">
                    <h3>OR</h3>
                    <p>Sign in with:</p>
                    <button className="bg-primary border rounded text-white p-2" onClick={signInUsingGoogle}>Google</button>
                </div>
            </div>
            <div className="me-4 mt-4">
                <img className=" w-100" src={image} alt="" />
            </div>
        </div>
    );
};

export default Login;