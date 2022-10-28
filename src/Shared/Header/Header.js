import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaMoon, FaRegUserCircle, FaSun } from 'react-icons/fa';
import { useState } from 'react';

import logo from '../../Images/pt-logo.jpg'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const [dark, setDark] = useState(false)

    const darkTheme = () => {
        setDark(true);
    }
    const LightTheme = () => {
        setDark(false);
    }

    const handleSignOut = () => {
        logOut().then(() => {

        }).catch((error) => {

        });
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand >
                    <Link to='/' className='fw-semibold text-warning text-decoration-none'>
                        <img src={logo} alt="Logo" width="30" height="30" class="d-inline-block align-text-top rounded me-2"></img>
                        Platinam Tutorial</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link> <Link to='/' className='text-white text-decoration-none'>Home</Link></Nav.Link>
                        <Nav.Link> <Link to='/courses' className='text-white text-decoration-none'>Courses</Link></Nav.Link>
                        <Nav.Link> <Link to='/blog' className='text-white text-decoration-none'>Blog</Link></Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link > {user?.displayName} </Nav.Link>
                        <Nav.Link >
                            {user?.photoURL ?
                                <Image style={{ height: '30px' }} roundedCircle src={user.photoURL} ></Image>
                                : <FaRegUserCircle></FaRegUserCircle>
                            }
                        </Nav.Link>

                    </Nav>

                    <Nav>
                        <Nav className='text-light p-2 me-2 '>
                            {dark ?
                                <FaSun onClick={LightTheme}></FaSun>
                                : <FaMoon onClick={darkTheme}></FaMoon>
                            }
                        </Nav>

                        {user?.uid ?
                            <Button onClick={handleSignOut} variant="warning" ><Link to='/login' className='fw-semibold text-dark text-decoration-none'>Logout</Link></Button>
                            :
                            <Button variant="warning" ><Link to='/login' className='fw-semibold text-dark text-decoration-none'>Login</Link></Button>
                        }

                    </Nav>

                </Navbar.Collapse>

            </Container>

        </Navbar >

    );
};

export default Header;