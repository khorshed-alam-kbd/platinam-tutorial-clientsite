import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const RightSideNav = () => {
    return (
        <div className='container mt-5'>

            <ButtonGroup className='mt-3' aria-label="Basic example">
                <Button variant="secondary">Log In</Button>
                <Button variant="secondary"> Register</Button>
            </ButtonGroup>

        </div>
    );
};

export default RightSideNav;