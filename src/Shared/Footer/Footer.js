import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../Images/pt-logo.jpg'

const Footer = () => {
    return (
        <div class="p-4 pb-2 bg-dark text-white text-center" >
            <Link to='/' className='fw-semibold text-warning text-decoration-none'>
                <img src={logo} alt="Logo" width="50" height="50" class="d-inline-block align-text-top rounded me-2"></img>
            </Link>
            <h3 class="fw-bold text-warning">Platinam Tutorial</h3>
            <p>Office #13, Zigatola, Dhanmondi, <br /> Dhaka, Bangladesh</p>

            <div class="d-flex justify-content-center gap-4 ">
                <FaFacebook></FaFacebook>
                <FaGithub></FaGithub>
                <FaGoogle></FaGoogle>
                <FaInstagram></FaInstagram>
                <FaTwitter></FaTwitter>
                <FaLinkedin></FaLinkedin>
            </div>
        </div>
    );
};

export default Footer;