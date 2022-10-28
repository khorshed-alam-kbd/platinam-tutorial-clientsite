import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Registration = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const [error, setError] = useState(null);

    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const photoURL = form.photoUrl.value
        const email = form.email.value
        const password = form.password.value

        if (password.length < 6) {
            setError('Error: password should be 6 characters or more')
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                navigate('/')
                setError('');
                swal({
                    title: "Congratulations",
                    text: `You are successfully registered in platinam tutorial`,
                    icon: "success",
                    button: "Done",
                });

            })
            .catch(error => {
                console.error(error);
                setError(error.message);
                swal({
                    title: "Opps !!",
                    text: `${error.message}`,
                    icon: "error",
                    button: "Try Again",
                });
            });

    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='container shadow mt-5 p-5 pb-2 mb-5 border rounded'>
            <h2 className='fw-semibold text-dark text-center' > Registration Now!</h2>
            <Form onSubmit={handleSubmit} className='m-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name </Form.Label>
                    <Form.Control type="text" name='name' placeholder="Full Name " required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photoUrl' placeholder="Enter Photo URL" />
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