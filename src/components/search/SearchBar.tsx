'use client'

import React, { useContext } from 'react'
import { useAppContext } from '../../context/AppContext'
import { motion, AnimatePresence } from "framer-motion"

type Props = {}

export default function SearchBar({ }: Props) {

    const { searchOpen, setSearchOpen, setSearchInput, searchInput, isElementTouchTop } = useAppContext();


    const handleClick = (): void => setSearchOpen(true)

    const handleChange = (e: any) => setSearchInput(e.target.value)

    const searchVariants = {
        hidden: { translateY: 200 },
        visible: {
            translateY: 0,

            transition: {
                type: "tween",
                duration: 0.2,
                ease: "easeInOut"
            }
        },
        open: {
            translateY: "-85vh",


            transition: {
                duration: 0.1,
            }
        },

    }



    return (
        <AnimatePresence>
            <motion.div
                initial="visible"
                animate={isElementTouchTop && !searchOpen ? "hidden" : searchOpen && !isElementTouchTop ? "open" : "visible"}
                exit={"hidden"}
                variants={searchVariants}

                className={(searchOpen ? ' bg-white/80 shadow-lg w-[90%] ' : 'w-[60%] search-glass shadow-2xl')
                    + ' bottom-10  fixed z-20 left-0 right-0 m-auto max-w-[800px] h-[70px] rounded-full px-5 py-2 flex items-center gap-2 transition-all duration-300 outline-none placeholder:text-black/60 text-xl'}
            >
                {/* Searchbar Icon */}
                {!searchOpen ? (
                    <svg width="20" className=' fill-black/30' height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 8.5C2 4.91015 4.91015 2 8.5 2C12.0899 2 15 4.91015 15 8.5C15 12.0899 12.0899 15 8.5 15C4.91015 15 2 12.0899 2 8.5ZM8.5 0C3.80558 0 0 3.80558 0 8.5C0 13.1944 3.80558 17 8.5 17C10.4872 17 12.3152 16.3181 13.7626 15.1754C13.7724 15.1862 13.7825 15.1967 13.7929 15.2071L18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L15.2071 13.7929C15.1967 13.7825 15.1862 13.7724 15.1754 13.7626C16.3181 12.3152 17 10.4872 17 8.5C17 3.80558 13.1944 0 8.5 0Z" />
                    </svg>
                ) : null}

                {/* Input */}
                <input type="text"
                    onClick={handleClick}
                    onChange={handleChange}
                    value={searchInput}
                    placeholder='Search'
                    className='w-full bg-transparent group-active:bg-white outline-none'
                />
            </motion.div>
        </AnimatePresence>
    )
}