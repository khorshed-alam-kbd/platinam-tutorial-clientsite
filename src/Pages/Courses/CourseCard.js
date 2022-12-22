import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseCard = (course) => {
    console.log(course.course);
    const { title, image, description, price, id } = course.course
    return (
        <div>
            <Card className='w-100 g-3 mb-5'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text> {description.slice(0, 100)}...</Card.Text>
                    <Card.Text> <span class="fw-semibold"> Price: </span> <small>$ {price}</small></Card.Text>
                    <Button variant="outline-warning" ><Link className='text-dark text-decoration-none' to={`/course/${id}`}>Details</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseCard;