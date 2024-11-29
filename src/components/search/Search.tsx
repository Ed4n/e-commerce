'use client'
import { useAppContext } from '@/context/AppContext'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useGetProductsByName } from '@/hooks/products/useGetProductsByName'

type Props = {}

interface SearchResultsProps {
    searchInput: string,
    searchResults: Product[] | undefined
}

export default function Search({ }: Props): JSX.Element {

    const { productsByName: products = [], loading, error } = useGetProductsByName(null)

    const { searchOpen, setSearchOpen, searchInput } = useAppContext();

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
        <div className='w-full h-[80vh] mt-[30%] flex flex-col overflow-y-scroll px-5'>
            {
                searchInput ? (
                    searchResults.length > 0 ? (
                        searchResults.map((result, index) => (
                            <Link key={index} href='product/[productId]' as={`product/${result._id}`} className='w-full py-5 px-7 border-b-[0.2px] text-black/60 border-b-slate-800/10 text-lg'>{result.name}</Link>
                        )))

                        : <div className='w-full h-full flex justify-center items-start text-black/50 text-lg'>{searchInput} was not found</div>
                ) : <div className='w-full h-full flex justify-center items-start text-black/50 text-lg'>Search Results will appear here</div>
            }
        </div>
    )
}