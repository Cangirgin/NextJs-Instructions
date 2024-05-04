import DashboardHeader from '@/components/dashboard/header'
import React from 'react'
import { Container, Nav } from 'react-bootstrap'

const DashboardLayout = ({ children }) => {
    return (
        <>
            <DashboardHeader />
            <Container className='flex-grow-1'>
                {children}
            </Container>
        </>
    )
}

export default DashboardLayout