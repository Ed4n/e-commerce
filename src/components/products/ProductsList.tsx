import React from 'react';
import Product from './Product';
// Assuming the Product type is defined in '@/types/Product'

interface Props {
    data: Product[] | undefined;
}


export default function ProductsList({ data = [] }: Props): JSX.Element {

    return (
        <div className='flex gap-3 flex-wrap justify-center items-center'>
            {data.map((product: Product, index: number) => (
                <Product key={index} product={product} />
            ))}
        </div>
    );
}
