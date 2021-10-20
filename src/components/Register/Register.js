import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../../images/banner2.jpg';


const Register = () => {
    return (
        <div className="d-flex">
            <div className="m-4 w-50 border bg-light">
                <h1 className="m-4 text-danger text-center">Register</h1>
                <div className="m-4">
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>
                        <p>Already have an account?<Link to="/login">Login</Link></p>
                        <Button className="bg-danger border rounded text-white p-2" variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                </div>
            </div>
            <div className="me-4 mt-4">
                <img src={image} alt="" />
            </div>

        </div>



    );
};

export default Register;