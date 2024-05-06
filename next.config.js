/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Uzak resimlerin yüklenme desenleri
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'loremflickr.com',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
        ],
    },
};

module.exports = nextConfig;
