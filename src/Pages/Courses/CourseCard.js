import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CourseCard = (course) => {
    console.log(course.title);
    const { title, image, description, price } = course.course
    return (
        <div>
            <Card className='w-100 g-3 mb-5'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text> {description.slice(0, 100)}...</Card.Text>
                    <Button variant="outline-warning">$ {price}</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseCard;