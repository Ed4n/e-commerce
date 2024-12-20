import Link from 'next/link'
import React from 'react'

type Props = {
    product: Product,
    // index: number
}

export default function Product({ product }: Props): JSX.Element {

    const textShorten = (text: string, maxLength: number): string => {
        if (text.length <= maxLength) {
            return text
        }

        return text.substring(0, maxLength - 3) + " ..."
    }

    return (

        <Link href='product/[productId]' as={`/product/${product._id}`} className='w-[20%] min-w-[200px]  h-[300px] max-w-[230px]  bg-gray-300 rounded-lg overflow-hidden relative shadow-2xl' >

            <img className=' object-cover w-full h-full' src="https://picsum.photos/200/300" alt="product-image" />
            <div className='flex flex-col bg-white absolute text-sm bottom-0 left-0 h-[35%] w-full glass p-2'>
                <h4>{product.name}</h4>
                <p>{textShorten(product.description, 45)}</p>
                <div className='flex justify-between items-center'>
                    <svg className='fill-gray-700' width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0825 3.11667C10.91 2.94501 10.8333 2.73251 10.8333 2.52417C10.8333 2.08751 11.1725 1.66667 11.6833 1.66667C11.9017 1.66667 12.1183 1.75001 12.2842 1.91501L15.4367 5.0675C14.7942 5.165 14.1867 5.37001 13.6383 5.6725L11.0825 3.11667ZM10.8333 10.4167C10.8333 9.34167 11.15 8.3425 11.69 7.5H0V9.16667H0.535833C0.981667 9.16667 1.38667 9.42001 1.5825 9.82001L5 18.3333H15L16.0083 15.8208C13.13 15.6942 10.8333 13.3267 10.8333 10.4167ZM8.9175 3.11667C9.09 2.94501 9.16667 2.73251 9.16667 2.52417C9.16667 2.08751 8.8275 1.66667 8.31667 1.66667C8.09917 1.66667 7.88167 1.75001 7.71667 1.91501L3.79917 5.83334H6.20167L8.9175 3.11667ZM16.25 6.66667C14.18 6.66667 12.5 8.34584 12.5 10.4167C12.5 12.4875 14.18 14.1667 16.25 14.1667C18.3183 14.1667 20 12.4875 20 10.4167C20 8.34584 18.3183 6.66667 16.25 6.66667ZM18.3333 10.8333H16.6667V12.5H15.8333V10.8333H14.1667V10H15.8333V8.33334H16.6667V10H18.3333V10.8333Z" />
                    </svg>

                    <h4 className='text-gray-700'>${product.price}</h4>
                </div>
            </div>
        </Link>
    )
}