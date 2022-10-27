import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const RightSideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, []);

    return (
        <div className='container shadow mt-5 p-5 pb-2 border rounded'>
            <h4>COURSE TITLE</h4>
            {
                courses.map(course => <p key={course.id}>
                    <Link to={`/course/${course.id}`}>{course.title} </Link>
                </p>)
            }
        </div>
    );
};

export default RightSideNav;