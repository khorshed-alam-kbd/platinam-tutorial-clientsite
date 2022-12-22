import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import { FaRegUserCircle } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const course = useLoaderData();
    const { user } = useContext(AuthContext);
    // console.log(course)

    const handleConfirm = () => {
        swal({
            title: "Congratulations",
            text: `You are successfully enrolled in ${course.title}`,
            icon: "success",
            button: "Done",
        });

    }
    return (
        <div className='container shadow mt-5 mb-5 p-5 border rounded'>
            <div className='d-flex align-items-center mb-2 shadow mt-3 p-2 gap-3 border rounded'>
                {user?.photoURL ?
                    <Image style={{ height: '50px' }} roundedCircle src={user.photoURL} ></Image>
                    : <FaRegUserCircle></FaRegUserCircle>
                }
                <h4> {user?.displayName}</h4>
            </div>
            <div className='shadow mt-3 p-4 border rounded'>
                <h5>Course Name: {course.title}</h5>
                <h6>Course Price: $ {course.price}</h6>
                <Button variant="outline-warning" className='mt-2' onClick={handleConfirm}>Enroll Now</Button>

            </div>


        </div>
    );
};

export default CheckOut;