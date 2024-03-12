'use client'
import { AppContext } from '@/context/AppContext'
import React, { useContext } from 'react'

type Props = {}

export default function SearchResults({ }: Props): JSX.Element {

    const { searchOpen, setSearchOpen } = useContext(AppContext)!;

    return (
        <div className={(searchOpen ? 'flex' : 'hidden') + ' w-full h-screen bg-gray-500  justify-center items-center text-white z-10 fixed'}>
            <button
                className='absolute top-0 right-0 bg-gray-600 w-10 h-10 text-2xl text-white'
                onClick={() => setSearchOpen(false)}
            > x </button>

            SearchResults

        </div>
    )
}