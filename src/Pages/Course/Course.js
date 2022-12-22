import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Pdf from "react-to-pdf";

const Course = () => {
    const course = useLoaderData();
    // console.log(course);

    const ref = React.createRef();

    return (
        <div className='container shadow mt-5 mb-5 p-5 border rounded'>

            <div className='d-flex justify-content-between'>
                <h4>To download {course.title} details:</h4>
                <Pdf targetRef={ref} filename={`${course.title}.pdf`} >
                    {({ toPdf }) => <Button onClick={toPdf} variant="outline-warning" className='mb-3'>Download</Button>}
                </Pdf>
            </div>

            <div ref={ref}>
                <h4>COURSE DETAILS:</h4>
                <Card>
                    <Card.Img variant="top" src={course.image} />
                    <Card.Body>
                        <Card.Title>{course.title}</Card.Title>
                        <Card.Text> {course.description} </Card.Text>
                        <Card.Text > <span class="fw-semibold"> Price: </span> <small>$ {course.price}</small></Card.Text>
                        <br />
                        <div className='text-center'>
                            <Button variant="outline-warning" ><Link to={`/checkout/${course.id}`} className='text-dark text-decoration-none'>Get premium access</Link></Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Course;