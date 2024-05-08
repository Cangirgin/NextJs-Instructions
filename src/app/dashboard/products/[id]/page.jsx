import PageHeader from '@/components/common/page-header'
import EditProductForm from '@/components/dashboard/product/edit-product-form';
import { config } from '@/helpers/config';
import React from 'react'

export const metadata = {
    title: {
        absolute: "Free Title"

    },
    description: "You can get luxury electronic devices",
};



const DashboardProductsDetailsPage = async ({ params }) => {
    const resp = await fetch(`${config.apiBaseURL}/products2/${params.id}`)
    const products = await resp.json();

    return (
        <div>
            <EditProductForm products={products} />
        </div>
    )
}

export default DashboardProductsDetailsPage