import { delay } from '@/utils/misc'
import Image from 'next/image'
import React from 'react'
import logo from "../../../../public/image/logo.png"
import PageHeader from '@/components/common/page-header'

const ContactPages = async () => {
    await delay(5000)
    return (
        <div>
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
        </div>
    )
}

export default ContactPages
