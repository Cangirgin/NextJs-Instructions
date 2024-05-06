import PageHeader from '@/components/common/page-header'
import React from 'react'

const DashboardProductsDetailsPage = ({ params }) => {
    return (
        <div>
            <PageHeader title="Dashboard Products Details Page" />

            <h2>{params.id}</h2>
        </div>
    )
}

export default DashboardProductsDetailsPage