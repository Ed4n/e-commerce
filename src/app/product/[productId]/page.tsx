'use client'
import { getProductById } from "@/api/productsFetch";
import { useGetProductById } from "@/hooks/products/useGetProductById";
import { useProductsStore } from "@/store/productsStore";
import { da } from "@faker-js/faker";
import { useEffect, useState } from "react";


export type SingleProductProps = {
    params: { productId: string }

};

export default function SingleProduct({ params }: SingleProductProps): JSX.Element {

    const { productId } = params

    const { product, loading, error } = useGetProductById(productId)

    if (error) return <div>{error}</div>
    if (loading) return <div>Loading..</div>
    if (!product) return null!

    return (
        <>
            <p>{product?.id}</p>
            <p>{product?.name}</p>
            <p>{product?.price}</p>
            <p>{product?.description}</p>

        </>
    )
}