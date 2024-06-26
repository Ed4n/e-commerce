import { getProductById } from "@/api/productsFetch";
import { useGetProductById } from "@/hooks/products/useGetProductById";
import { useEffect, useState } from "react";

type ShoppingProductProps = {
    id: string;
    quantity: number
}

const ShoppingProduct: React.FC<ShoppingProductProps> = ({ id, quantity }) => {
    const { product, loading, error } = useGetProductById(id)


    if (error) return <div>{error}</div>
    if (loading) return <div>Loading..</div>
    if (!product) return <div> Product not found</div>

    return (
        <>
            <div>{product.name}</div>
            <div>${product.price}</div>
            <div>{quantity}</div>
        </>
    )
}

export { ShoppingProduct }