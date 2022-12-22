import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RightSideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://platinam-tutorial-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, []);

    return (
        <div className='container shadow mt-5 mb-5 p-5 border rounded'>
            <h4>COURSE TITLE</h4>
            {
                courses.map(course => <p key={course.id}>
                    <FaChevronRight></FaChevronRight>
                    <Link className='text-dark text-decoration-none' to={`/course/${course.id}`}>{course.title} </Link>
                </p>)
            }
            <Button variant="outline-warning" ><Link to='/courses' className='text-dark fw-bold text-decoration-none'>All Courses</Link></Button>
        </div>
    );
};

export default RightSideNav;