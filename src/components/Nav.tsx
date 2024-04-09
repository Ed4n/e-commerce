'use client'
import { AppContext } from "@/context/AppContext"
import { useContext } from "react"
import SearchBar from "./search/SearchBar";

type Props = {

}

export default function Nav({ }: Props) {

    const { isElementTouchTop } = useContext(AppContext)!;



    return (
        <div>
            {
                isElementTouchTop ? (
                    <nav className="fixed z-20  left-0 right-0 bottom-10 m-auto w-[70%] max-w-[700px] h-[50px] bg-gray-400 rounded-full px-5 py-2 flex items-center transition-all duration-300">
                        This is the Navbar
                    </nav>
                ) : (
                    <SearchBar />
                )
            }
        </div>

    )
}




