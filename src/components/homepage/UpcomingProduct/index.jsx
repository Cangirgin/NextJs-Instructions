import ProductItem from '@/components/products/product-item'
import { config } from '@/helpers/config'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const UpcomingProduct = async () => {
    const resp = await fetch(`${config.apiBaseURL}/products2`)
    const product = await resp.json()

    const filteredPrducts = product.filter((item) => item.id < 15)

    return (
        <Container fluid>
            <h1 className='text-center'>Upcoming Product</h1>
            <Row xs={1} sm={2} md={3} lg={4}>
                {
                    filteredPrducts.map((item) => (
                        <Col className='d-flex g-4' key={item.id} >
                            <ProductItem {...item} />
                        </Col>
                    ))}
            </Row>

        </Container>
    )
}

export default UpcomingProduct