'use client'
import { AppContext } from '@/context/AppContext'
import { useSaveProducts } from '@/hooks/products/useSaveProducts'
import { useProductsStore } from '@/store/productsStore'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import ProductsList from '../products/ProductsList'

type Props = {}

interface SearchResultsProps {
    searchInput: string,
    searchResults: Product[] | undefined
}

export default function Search({ }: Props): JSX.Element {

    const { loading, error } = useSaveProducts()

    const { products } = useProductsStore()

    const { searchOpen, setSearchOpen, searchInput } = useContext(AppContext)!;

    const [searchResults, setSearchResults] = useState<Product[] | undefined>(undefined)

    useEffect(() => {
        handleSearchResults(searchInput)
    }, [searchInput])

    const handleSearchResults = (name: string) => {
        const results = products.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()))
        setSearchResults(results)
    }

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
        <div className='w-full h-[80vh] mt-[30%] overflow-y-scroll'>
            {
                searchInput ? (
                    searchResults.length > 0 ? <ProductsList data={searchResults} /> : <div>{searchInput} was not found</div>
                ) : <div>search something</div>
            }
        </div>
    )
}