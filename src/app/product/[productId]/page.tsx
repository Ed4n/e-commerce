'use client'
import { useProductsStore } from "@/store/productsStore";
import { da } from "@faker-js/faker";
import { useEffect, useState } from "react";


export type SingleProductProps = {
    params: { productId: string }

};

export default function SingleProduct({ params }: SingleProductProps): JSX.Element {

    const { products } = useProductsStore()

    const { productId } = params

    const [singleProduct, setSingleProduct] = useState<Product>()

    useEffect(() => {
        const fetchById = (id) => {
            fetch("http://localhost:3300/api/v1/products/" + id)
                .then(res => {
                    if (!res.ok) {
                        throw new Error("Network response was not ok")
                    }
                    return res.json()
                }
                )
                .then(
                    data => {
                        console.log(data)
                        setSingleProduct(data)
                    }
                )
                .catch(error => {
                    console.error('There was a problem with your fetch operation:', error);
                });
        }

        fetchById(productId)
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