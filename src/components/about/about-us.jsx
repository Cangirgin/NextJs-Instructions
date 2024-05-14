import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./about-us.scss"
import Spacer from '../common/spacer'

const AboutUs = ({ product }) => {
    const { image } = product
    return (
        <Container className='about-container'>
            <Row>
                <Col md={8} lg={6}>
                    <Image alt='avatar' src={image} width={400} height={400} />
                </Col>
                <Col md={4} lg={6}>
                    <Spacer />
                    <div>
                        <h3> About Us</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit nam voluptatibus ipsam eaque fugit? Impedit a laboriosam commodi blanditiis asperiores, repellendus perspiciatis, possimus vel unde architecto delectus earum modi!</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutUs