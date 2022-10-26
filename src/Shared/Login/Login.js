import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container shadow mt-5 p-5 pb-2 border rounded'>
            <h2 className='fw-semibold text-dark text-center' >Hi, Welcome back!</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Email Address " required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <p><small>Forgot Password?</small></p>

                <Button variant="warning" type="submit" className='fw-semibold text-dark text-decoration-none w-100 mb-3 '> Login </Button>

                <p className='text-center mt-3'>
                    Don't have an account? <Link className='fw-semibold text-warning text-decoration-none' to={'/register'}> Registration Now</Link>
                </p>
            </Form>
            <p className='text-center'>or</p>

            <Button variant="success" type="submit" className='fw-semibold text-white text-decoration-none  w-50 mb-3 g-3'> Google </Button>
            <Button variant="secondary" type="submit" className='fw-semibold text-white text-decoration-none w-50 mb-3'> GitHub </Button>
        </div>
    );
};

export default Login;