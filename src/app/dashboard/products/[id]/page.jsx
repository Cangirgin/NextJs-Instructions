import React from 'react'

const DashboardProductsDetailsPage = ({ params }) => {
    return (
        <div>
            <h1>Dashboard Products Details Page</h1>
            <h2>{params.id}</h2>
        </div>
    )
}

export default DashboardProductsDetailsPage