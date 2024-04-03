'use client'
import { useProductsStore } from "@/store/productsStore";
import { useEffect, useState } from "react";


export type SingleProductProps = {
    params: { productId: string }

};

export default function SingleProduct({ params }: SingleProductProps): JSX.Element {

    const { products } = useProductsStore()

    const { productId } = params

    const [singleProduct, setSingleProduct] = useState<Product>()

    useEffect(() => {
        const findProduct = (id: string) => {
            const product: Product | undefined = products.find(product => product.id === id)
            setSingleProduct(product)
        }

        findProduct(productId)
    }, [products, productId])

    return (
        <>
            <h1>Este es un single product</h1>
            <p>{singleProduct?.id}</p>
            <p>{singleProduct?.name}</p>
            <p>{singleProduct?.price}</p>
        </>
    )
}