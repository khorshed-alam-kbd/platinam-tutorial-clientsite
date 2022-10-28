import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// import Pdf from "react-to-pdf";

const Course = () => {
    const course = useLoaderData();
    // console.log(course);

    // const ref = React.createRef();

    return (
        <div className='container shadow mt-5 mb-5 p-5 border rounded'>

            {/* <h4>Download:</h4>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div ref={ref}>
                <h1>Hello CodeSandbox</h1>
                <h2>Start editing to see some magic happen!</h2>
            </div> */}

            <Card style={{ width: 'auto' }}>
                <Card.Img variant="top" src={course.image} />
                <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text> {course.description} </Card.Text>
                    <Button variant="outline-warning" className='mb-3'>$ {course.price}</Button> <br />
                    <div className='text-center'>
                        <Button variant="outline-warning" ><Link to={`/checkout/${course.id}`} className='text-dark text-decoration-none'>Get premium access</Link></Button>
                    </div>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Course;