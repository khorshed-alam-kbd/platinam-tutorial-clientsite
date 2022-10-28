import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../Images/img1.png';
import img2 from '../../Images/img2.webp';
import img3 from '../../Images/img3.jpg';

const HomeCarousel = () => {
    return (
        <div className='container shadow mt-5 mb-2 p-5 border rounded'>
            <h4 className='text-info text-center mb-3'>Our Popular Courses</h4>
            <Carousel variant="dark">
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-white fw-semibold'>
                        <h2>Learn JavaScript</h2>
                        <p>Learn how to use JavaScript — a powerful and flexible programming language for adding website interactivity.</p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='text-white fw-semibold'>
                        <h2>Learn Python</h2>
                        <p>Do you want to learn Python the right way? Enroll in our Interactive Python Course</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 "
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='text-white fw-semibold' >
                        <h2>Learn Linux</h2>
                        <p>Linux programming creates applications, interfaces, programs and software</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    );
};

export default HomeCarousel;