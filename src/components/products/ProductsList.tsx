import { ProductService } from '@/utils/db';
import React from 'react';
import Product from './Product';



export default function ProductsList(): JSX.Element {
    const service = new ProductService();

    const products: Product[] = service.products;

    return (
        <div className='flex gap-3 flex-wrap justify-center items-center'>
            {products.map((product, index) => (
                <Product key={index} product={product} />
            ))}
        </div>
    );
}
