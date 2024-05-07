import PageHeader from '@/components/common/page-header'
import Image from 'next/image'
import React from 'react'


export const metadata = {
    title: "About",
    description: "You can get luxury electronic devices",
};

const AboutPage = () => {


    return (
        <div>
            <PageHeader title="About" />
            <Image src="https://loremflickr.com/800/400" alt='lorem' width={800} height={400} />
        </div>
    )
}

export default AboutPage