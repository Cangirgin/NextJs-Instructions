import Spacer from '@/components/common/spacer';
import ProductHeader from '@/components/dashboard/product/product-header';
import ProductList from '@/components/dashboard/product/product-list';
import { config } from '@/helpers/config';
import React from 'react'


export const metadata = {
    title: "Dashboards Products",
    description: "You can get luxury electronic devices",
};

const DashboardProductsPage = async () => {

    const resp = await fetch(`${config.apiBaseURL}/products2`);
    const products = await resp.json();

    return (
        <div>
            <ProductHeader title="DashboardProductsPage" />
            <Spacer height={50} />
            <ProductList products={products} />
        </div>
    )
}

export default DashboardProductsPage