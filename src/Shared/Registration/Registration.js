import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Registration = () => {
    const { user, createUser } = useContext(AuthContext);

    const [error, setError] = useState(null);


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const photoUrl = form.photoUrl.value
        const email = form.email.value
        const password = form.password.value

        if (password.length < 6) {
            setError('password should be 6 characters or more')
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset();
            })
            .catch(error => console.error(error))
    }



    return (
        <div className='container shadow mt-5 p-5 pb-2 border rounded'>
            <h2 className='fw-semibold text-dark text-center' > Registration Now!</h2>
            <Form onSubmit={handleSubmit} className='m-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name </Form.Label>
                    <Form.Control type="text" name='name' placeholder="Full Name " required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="photoUrl" name='photoUrl' placeholder="Enter Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" name='email' placeholder="Email Address " required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <p className='text-danger'>{error}</p>

                <Button variant="warning" type="submit" className='fw-semibold text-dark text-decoration-none w-100'> Register </Button>

                <p className='text-center mt-3'>Already have an account?
                    <Link className='fw-semibold text-warning text-decoration-none' to={'/login'}> Login</Link>
                </p>
            </Form>
        </div>
    );
};

export default Registration;