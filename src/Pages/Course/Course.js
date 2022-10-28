import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Course = () => {
    const course = useLoaderData();
    // console.log(course);

    return (
        <div className='container shadow mt-5 mb-5 p-5 border rounded'>

            <Card style={{ width: 'auto' }}>
                <Card.Img variant="top" src={course.image} />
                <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text> {course.description} </Card.Text>
                    <Button variant="outline-warning" className='mb-3'>$ {course.price}</Button> <br />
                    <Button variant="outline-warning" ><Link to={`/checkout/${course.id}`} className='text-dark text-decoration-none'>Get premium access</Link></Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Course;