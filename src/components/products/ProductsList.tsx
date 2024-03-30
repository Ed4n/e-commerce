import { ProductService } from '@/utils/db';
import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useGetProducts } from '@/hooks/useGetProducts';



export default function ProductsList(): JSX.Element {
    // const [products, setProducts] = useState<Product[]>([])
    const [products] = useGetProducts()


    // useEffect(() => {
    //     fetch('http://localhost:3300/api/v1/products')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error("Network error.")
    //             }
    //             return response.json()
    //         })
    //         .then(
    //             data => setProducts(data)
    //         )
    // }, [])

    return (
        <div className='flex gap-3 flex-wrap justify-center items-center'>
            {products.map((product, index) => (
                <Product key={index} product={product} />
            ))}
        </div>
    );
}
