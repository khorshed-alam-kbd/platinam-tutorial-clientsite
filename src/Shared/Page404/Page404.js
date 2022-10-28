import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Page404 = () => {
    const routeNotFound = () => {
        swal({
            title: "404",
            text: "This Route Not Found",
            icon: "error",
            button: "Close",
        });
    }
    return (
        <div className='container shadow position-absolute top-50 start-50 translate-middle p-5 border rounded'>

            {routeNotFound()}

            <div className='position-absolute top-50 start-50 translate-middle p-5'>
                <Button variant="outline-warning" ><Link to={'/'} className='text-dark fw-bold  text-decoration-none'>
                    Back To Home</Link></Button>
            </div>


        </div >
    );
};

export default Page404;