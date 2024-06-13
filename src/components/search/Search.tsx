'use client'
import { AppContext } from '@/context/AppContext'
import { useSaveProducts } from '@/hooks/products/useSaveProducts'
import { useProductsStore } from '@/store/productsStore'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import ProductsList from '../products/ProductsList'
import { useGetProductsByName } from '@/hooks/products/useGetProductsByName'

type Props = {}

interface SearchResultsProps {
    searchInput: string,
    searchResults: Product[] | undefined
}

export default function Search({ }: Props): JSX.Element {

    const { productsByName: products = [], loading, error } = useGetProductsByName(null)

    const { searchOpen, setSearchOpen, searchInput } = useContext(AppContext)! || null;

    const [searchResults, setSearchResults] = useState<Product[] | undefined>(undefined)

    const handleSearchResults = (name: string) => {
        const results = products.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()))
        setSearchResults(results)
    }

    useEffect(() => {
        if (searchInput) {
            handleSearchResults(searchInput)
        }
    }, [searchInput, products])


    return (
        <div className={(searchOpen ? 'flex' : 'hidden') + ' w-full h-screen bg-gray-300  justify-center items-center  z-10 fixed'}>
            <button
                className='absolute  bg-gray-400 w-10 h-10 rounded-full right-5 top-5 text-2xl text-white'
                onClick={() => setSearchOpen(false)}
            > x </button>

            {/* Results */}
            <SeacrhResults searchInput={searchInput} searchResults={searchResults} />
        </div>
    )
}

function SeacrhResults({ searchInput, searchResults = [] }: SearchResultsProps): JSX.Element {
    return (
        <div className='w-full h-[80vh] mt-[30%] flex flex-col overflow-y-scroll'>
            {
                searchInput ? (
                    searchResults.length > 0 ? (
                        searchResults.map((result, index) => (
                            <Link key={index} href='product/[productId]' as={`product/${result._id}`} className='w-full py-5 px-7 border-b-[0.5px] text-black/60 border-b-white/50'>{result.name}</Link>
                        )))

                        : <div>{searchInput} was not found</div>
                ) : <div>search something</div>
            }
        </div>
    )
}