import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import image from '../../images/banner2.jpg';


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { auth, signInUsingGoogle, createUserWithEmailAndPassword } = useAuth();
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleSignIn = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password must be at least 6 Characters long.');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.messsage);
            })
    }
    return (
        <div className="d-lg-flex">
            <div className="m-4  border bg-light">
                <h1 className="m-4 text-danger text-center">Register</h1>
                <div className="m-4">
                    <Form onSubmit={handleSignIn}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />

                            </Form.Group>
                        </Row>

                        <p>Already have an account?<Link to="/login">Login</Link></p>
                        <div className="text-danger">{error}</div>
                        <Button className="bg-danger border rounded text-white p-2" variant="primary" type="submit">
                            Register
                        </Button>
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

export default Register;