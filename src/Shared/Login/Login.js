import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const { providerLogin, logIn } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const loginAlrt = () => {
        swal({
            title: "Congratulations",
            text: `You are successfully Login in platinam tutorial`,
            icon: "success",
            button: "Done",
        });

    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value

        logIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset();
                navigate(from, { replace: true });
                loginAlrt();
            })
            .catch(error => {
                console.error(error)
                setError('Email or Password is wrong, Please Enter Correct email or password !')
                form.reset();

            })

    }

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                loginAlrt();
            })
            .catch(error => console.error(error))
    }

    const gitHubProvider = new GithubAuthProvider();
    const handleGitHubSignIn = () => {
        providerLogin(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                loginAlrt();
            })
            .catch(error => console.error(error))

    }

    return (
        <div className='container shadow my-5 p-5 pb-2 border rounded'>
            <h2 className='fw-semibold text-dark text-center' >Login Now</h2>
            <div className='w-50 position-relative top-0 start-50 translate-middle-x '>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" name='email' placeholder="Email Address " required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <p><small>Forgot Password?</small></p>
                    <p className='text-danger'>{error}</p>

                    <Button variant="warning" type="submit" className='fw-semibold text-dark text-decoration-none w-100 '> Login </Button>

                    <p className='text-center mt-3'>
                        Don't have an account? <Link className='fw-semibold text-warning text-decoration-none' to={'/register'}> Registration Now</Link>
                    </p>
                </Form>
                <hr></hr>

                <div className='d-flex justify-content-between mb-3'>
                    <Button onClick={handleGoogleSignIn} variant="outline-success" type="submit" className='fw-semibold text-decoration-none mb-3'> <FcGoogle /> Google </Button>
                    <p className='text-center'>OR</p>
                    <Button onClick={handleGitHubSignIn} variant="outline-dark" type="submit" className='fw-semibold text-decoration-none mb-3'><FaGithub></FaGithub> GitHub </Button>
                </div>
            </div>

        </div>
    );
};

export default Login;