import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='9'>
                        <Outlet></Outlet>
                    </Col>

                    <Col lg='3'>
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Main;