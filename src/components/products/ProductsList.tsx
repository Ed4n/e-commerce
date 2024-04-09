import React from 'react';
import Product from './Product';
import { useGetProducts } from '@/hooks/useGetProducts';
// Assuming the Product type is defined in '@/types/Product'

export default function ProductsList(): JSX.Element {
    const { products, loading, error } = useGetProducts();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!products) return null;

    return (
        <div className='flex gap-3 flex-wrap justify-center items-center'>
            {products.map((product: Product, index: number) => (
                <Product key={index} product={product} />
            ))}
        </div>
    );
}
