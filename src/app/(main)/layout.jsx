import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import React from 'react'


const MainLayout = ({ children }) => {

    return (
        <>
            <Header className="align-self-start" />
            <main className='flex-grow-1'>
                {children}
            </main>
            <Footer className="align-self-end" />
        </>
    )
}

export default MainLayout