'use client'

import React, { useContext } from 'react'
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

    }

    return (
        <div className={(searchOpen ? 'top-10' : ' bottom-10')
            + ' fixed z-20 left-0   right-0 m-auto w-[90%] max-w-[800px] h-[70px] search-glass rounded-full px-5 py-2 flex items-center gap-2 transition-all duration-300 outline-none placeholder:text-black/60 text-xl shadow-2xl '}>

            <svg width="20" className=' fill-black/30' height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 8.5C2 4.91015 4.91015 2 8.5 2C12.0899 2 15 4.91015 15 8.5C15 12.0899 12.0899 15 8.5 15C4.91015 15 2 12.0899 2 8.5ZM8.5 0C3.80558 0 0 3.80558 0 8.5C0 13.1944 3.80558 17 8.5 17C10.4872 17 12.3152 16.3181 13.7626 15.1754C13.7724 15.1862 13.7825 15.1967 13.7929 15.2071L18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L15.2071 13.7929C15.1967 13.7825 15.1862 13.7724 15.1754 13.7626C16.3181 12.3152 17 10.4872 17 8.5C17 3.80558 13.1944 0 8.5 0Z" />
            </svg>


            <input type="text"
                onClick={handleClick}
                onChange={handleChange}
                value={searchInput}
                placeholder='Search'
                className='w-full bg-transparent '

            />
        </div>

    )
}