import PageHeader from '@/components/common/page-header'
import React from 'react'


export const metadata = {
    title: "Products",
    description: "You can get luxury electronic devices",
};
const ProductsPage = () => {
    return (
        <div>
            <PageHeader title="Products" />
            All Products
        </div>
    )
}

export default ProductsPage
