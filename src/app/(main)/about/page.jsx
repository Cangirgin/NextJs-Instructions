import AboutUs from '@/components/about/about-us';
import Spacer from '@/components/common/spacer';
import { config } from '@/helpers/config';
import React from 'react'


export const metadata = {
    title: "About",
    description: "You can get luxury electronic devices",
};

const AboutPage = async () => {
    const resp = await fetch(`${config.apiBaseURL}/products2/3`);
    const product = await resp.json();


    return (
        <>
            <Spacer height="50" />
            <AboutUs product={product} />
            <Spacer height="50" />
        </>

    )
}

export default AboutPage