import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeCarousel from '../HomeCarousel/HomeCarousel';

const Home = () => {
    return (
        <div className='container shadow mt-5 mb-5 p-5 border rounded'>
            <div className='shadow mt-2 mb-5 p-5 border rounded text-center'>
                <h5 className='text-warning fw-semibold'>START LEARNING FROM HOME</h5>
                <h4>Connect With Our Expert And Start Learning Today</h4>
                <p>We are providing high-quality online courses to improve your skill. Our all instructors are highly experienced and experts.</p>

                <Button variant="outline-warning" ><Link to='/courses' className='text-dark text-decoration-none mt-2'>Our Courses</Link></Button>
            </div >
            <HomeCarousel></HomeCarousel>
        </div >
    );
};

export default Home;