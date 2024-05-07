import PageHeader from '@/components/common/page-header'
import React from 'react'

export const metadata = {
    title: {
        absolute: "Free Title"

    },
    description: "You can get luxury electronic devices",
};



const DashboardProductsDetailsPage = ({ params }) => {
    return (
        <div>
            <PageHeader title="Dashboard Products Details Page" />

            <h2>{params.id}</h2>
        </div>
    )
}

export default DashboardProductsDetailsPage