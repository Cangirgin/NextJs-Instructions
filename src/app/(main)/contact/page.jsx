import { delay } from '@/helpers/misc'
import Image from 'next/image'
import React from 'react'
import logo from "../../../../public/image/logo.png"
import PageHeader from '@/components/common/page-header'
import { Container } from 'react-bootstrap'


export const metadata = {
    title: "Contact",
    description: "You can get luxury electronic devices",
};

const ContactPages = async () => {
    await delay(2000)
    return (
        <Container>
            <PageHeader title="Contact" />
            <div style={{ height: "200px", width: "50%", position: "relative" }}>
                <Image alt='pexels' src='https://images.pexels.com/photos/206784/pexels-photo-206784.jpeg?auto=compress&cs=tinysrgb&w=600'
                    fill
                    style={{ objectFit: "cover", objectPosition: "bottom center" }}
                />
            </div>
            <div>
                <Image alt='logo' src={logo} />
            </div>
        </Container>
    )
}

export default ContactPages
