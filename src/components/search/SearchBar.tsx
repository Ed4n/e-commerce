'use client'

import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'

type Props = {}

export default function SearchBar({ }: Props) {

    const { searchOpen, setSearchOpen, setSearchInput, searchInput } = useContext(AppContext)!
    // Here I add the "!" to the useContext(AppContext) because I know that it will never be undefined, but if you want to be safe you can add a condition to check if it is undefined and return null or something else.


    const handleClick = (): void => {
        setSearchOpen(true)

    }

    const handleChange = (e) => {
        setSearchInput(e.target.value)
        console.log(searchInput)
    }

    return (

        <input type="text"
            onClick={handleClick}
            onChange={handleChange}
            value={searchInput}
            placeholder='Search'
            className={(searchOpen ? 'top-10' : ' bottom-10')
                + ' fixed z-20  left-0 right-0 m-auto w-[70%] max-w-[700px] h-[50px] bg-gray-400 rounded-full px-5 py-2 flex items-center transition-all duration-300 outline-none placeholder:text-black '}
        />
    )
}