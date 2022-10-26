import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='container shadow mt-5 p-5 pb-2 border rounded'>
            <h2 className='fw-semibold text-dark text-center' > Registration Now!</h2>
            <Form className='m-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name </Form.Label>
                    <Form.Control type="text" placeholder="Full Name " required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="photoUrl" placeholder="Enter Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Email Address " required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="warning" type="submit" className='fw-semibold text-dark text-decoration-none w-100'> Register </Button>

                <p className='text-center mt-3'>Already have an account?
                    <Link className='fw-semibold text-warning text-decoration-none' to={'/login'}> Login</Link>
                </p>
            </Form>
        </div>
    );
};

export default Registration;