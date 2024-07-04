import React from 'react';
import Product from './Product';
import ProductSkeleton from '../ui/skeletons/ProductSkeleton';
// Assuming the Product type is defined in '@/types/Product'

interface Props {
    data: Product[] | undefined;
    loading: boolean
}


export default function ProductsList({ data = [], loading }: Props): JSX.Element {

    return (
        !loading ? (
            <div className='flex gap-4 flex-wrap justify-around items-center'>
                {data.map((product: Product, index: number) => (
                    <Product key={index} product={product} />
                ))}
            </div>
        ) : (
            <div className='flex gap-4 flex-wrap justify-around items-center'>

                {/* Esta seccion {Array.from({ length: 4 }) se esta usanndo para que no de undefined, es como cuando se inicialisa en []  la data */}
                {/* the underscore is used as a convention to indicate that the value is intentionally ignored. */}
                {Array.from({ length: 4 }).map((_, index) => (
                    <ProductSkeleton key={index} />
                ))}
            </div>
        )
    );
}
