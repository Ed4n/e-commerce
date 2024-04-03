import Link from 'next/link'
import React from 'react'

type Props = {
    product: Product,
    // index: number
}

export default function Product({ product }: Props): JSX.Element {
    return (

        <Link href='product/[productId]' as={`product/${product.id}`} className='w-[200px] h-[300px] bg-gray-300 rounded-lg' >
            <div>{product.name}</div>
            <div>{product.price}</div>
        </Link>
    )
}