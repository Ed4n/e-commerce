'use client'
import { AppContext } from '@/context/AppContext'
import { useGetProducts } from '@/hooks/products/useGetProducts'
import { useProductsStore } from '@/store/productsStore'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'

type Props = {}

export default function SearchResults({ }: Props): JSX.Element {
    const { products } = useGetProducts()

    const { searchOpen, setSearchOpen, searchInput } = useContext(AppContext)!;

    const [searchResults, setSearchResults] = useState<Product[] | undefined>()

    useEffect(() => {
        handleSearchResults(searchInput)
    }, [searchInput])

    const handleSearchResults = (name: string) => {
        const results = products.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()))
        setSearchResults(results)
    }

    return (
        <div className={(searchOpen ? 'flex' : 'hidden') + ' w-full h-screen bg-gray-500  justify-center items-center text-white z-10 fixed'}>
            <button
                className='absolute top-0 right-0 bg-gray-600 w-10 h-10 text-2xl text-white'
                onClick={() => setSearchOpen(false)}
            > x </button>

            <div className='w-full flex flex-col '>

                {
                    searchInput ? (
                        searchResults.length > 0 ? (
                            searchResults?.map((result, index) => (
                                <SearchResultsRow key={index} product={result} />
                            ))
                        ) : (
                            <div>{searchInput} was not found</div>
                        )
                    ) : null
                }
            </div>

        </div>
    )
}


function SearchResultsRow({ product }): JSX.Element {
    return (
        <Link href='product/[productId]' as={`product/${product.id}`} className='w-full py-2 px-5 border-b-2 border-b-white'>{product.name}</Link>


    )
}