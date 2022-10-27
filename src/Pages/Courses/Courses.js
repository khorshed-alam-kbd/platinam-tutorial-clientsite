import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='container shadow mt-5 mb-5 p-5 border rounded '>
            {
                courses.map(course => <CourseCard
                    key={course.id}
                    course={course}
                ></CourseCard>)
            }
        </div>
    );
};

export default Courses;