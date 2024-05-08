import Spacer from '@/components/common/spacer';
import { config } from '@/helpers/config';
import React from 'react'
import ProductDetail from "../../../../components/products/product-details";
import PageHeader from '@/components/common/page-header';
import ProductInSameCategory from '@/components/products/product-in-same-category';

//export const dynamic = "force-dynamic"

// Importlarınızın olduğu yer

// generateMetadata fonksiyonu, sayfa için metadata bilgilerini üretir
export async function generateMetadata({ params, searchParams }, parent) {
    // Route parametrelerini oku
    const id = params.id;

    // Veriyi API'den al
    const product = await fetch(`${config.apiBaseURL}/products2/${id}`).then((res) => res.json());

    // Eğer önceki metadata bilgileri varsa, onları genişlet (veya değiştir)
    const previousImages = (await parent).openGraph?.images || [];

    // Metadata bilgilerini döndür
    return {
        title: product.title, // Ürün başlığı
        description: product.description, // Ürün açıklaması
    };
}


const ProductDetailsPage = async ({ params, searchParams }) => {
    const productId = params.id

    if (!productId || isNaN(productId)) throw new Error("Not found")

    const resProduct = (await fetch(`${config.apiBaseURL}/products2/${productId}`)).json()

    const resProducts = (await fetch(`${config.apiBaseURL}/products2`)).json()

    const [product, products] = await Promise.all([resProduct, resProducts])
    return (
        <div>
            <PageHeader title="Product Details" />
            <Spacer height="50" />
            <ProductDetail product={product} />
            <Spacer />
            <ProductInSameCategory products={products} />


        </div>

    )
}

export default ProductDetailsPage
