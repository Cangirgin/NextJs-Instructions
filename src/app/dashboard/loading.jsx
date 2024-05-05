import Loader from '@/components/common/loader'
import React from 'react'

const LoadingPage = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <Loader />
        </div>
    )
}

export default LoadingPage