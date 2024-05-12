import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer';
import ProductList from '@/components/products/product-list';
import { config } from '@/helpers/config';
import React from 'react'
import { Container } from 'react-bootstrap';

//export const revalidate = 10


export const metadata = {
    title: "Products",
    description: "You can get luxury electronic devices",
};


const ProductsPage = async () => {

    const resp = await fetch(`${config.apiBaseURL}/products2`);
    const products = await resp.json();

    return (
        <>
            <PageHeader title="Products" />
            <Container>
                <Spacer height="50" />
                <ProductList products={products} />
                <Spacer height="50" />

            </Container>

        </>

    )
}

export default ProductsPage
