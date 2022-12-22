import React from 'react';
import { Button } from 'react-bootstrap';
import { FaAward, FaBusinessTime, FaPhoneAlt, FaUserGraduate } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import homeBG1 from '../../Images/homeBg.jpg'
import homeBG2 from '../../Images/homeBg2.jpg'

const Home = () => {
    const homeBg1 = {
        backgroundImage: `url(${homeBG1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const homeBg2 = {
        backgroundImage: `url(${homeBG2})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className='container mt-5 mb-5 p-3 pt-0'>
            <div className='shadow mb-5 p-5 border rounded text-center' style={homeBg1}>
                <h5 className='text-warning fw-semibold'>START LEARNING FROM HOME</h5>
                <h4>Connect With Our Expert And Start Learning Today</h4>
                <p>We are providing high-quality online courses to improve your skill. Our all instructors are highly experienced and experts.</p>
                <Button variant="outline-warning" ><Link to='/courses' className='text-dark fw-bold text-decoration-none mt-2'>Our Courses</Link></Button>
            </div >
            <HomeCarousel></HomeCarousel>
            <div className='shadow mt-5 mb-3 p-5 border rounded text-center ' style={homeBg2}>
                <h5 className='text-warning text-center fw-semibold'>Why Choose Us?</h5>
                <div className=' d-flex warp gap-3 mt-3 mb-3 fw-semibold '>
                    <FaAward></FaAward>High Quality Courses
                </div>
                <div className=' d-flex warp gap-3 mt-3 mb-3 fw-semibold '>
                    <FaUserGraduate></FaUserGraduate>Expert Instructors
                </div>
                <div className=' d-flex warp gap-3 mt-3 mb-3 fw-semibold '>
                    <FaBusinessTime></FaBusinessTime>Life Time Access
                </div>
                <div className=' d-flex warp gap-3 mt-3 mb-3 fw-semibold '>
                    <FaPhoneAlt></FaPhoneAlt> Dedicated Support
                </div>
                <div className='text-center'>
                    <Button variant="warning" ><Link to='/courses' className=' text-white fw-bold text-decoration-none mt-2'>Enroll Now</Link></Button>
                </div>

            </div >
        </div >
    );
};

export default Home;