import { ProductService } from '@/utils/db';
import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useGetProducts } from '@/hooks/useGetProducts';



export default function ProductsList(): JSX.Element {
    // const [products, setProducts] = useState<Product[]>([])
    const [products] = useGetProducts()

    return (
        <div className='flex gap-3 flex-wrap justify-center items-center'>
            {products.map((product, index) => (
                <Product key={index} product={product} />
            ))}
        </div>
    );
}
