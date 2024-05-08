import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { Badge, Col, Row } from 'react-bootstrap'

const ProductDetail = ({ product }) => {
    const { title, description, image, category, price } = product;
    return (
        <Row className='g-5'>
            <Col md={6}>

                <Image alt={title} src={image} width={500} height={500} style={{ width: "100%" }} className='img-fluid' />
            </Col>
            <Col md={6}>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className='d-flex justify-content-between '>
                    <h4>
                        <Badge bg='danger' className='me-2'>{category}</Badge>
                        <Badge bg='secondary' >{price} ₺</Badge>
                    </h4>
                    <Link href='/products'>
                        <button className='btn btn-primary'>Go Back Products</button>
                    </Link>
                </div>

            </Col>

        </Row>
    )
}

export default ProductDetail