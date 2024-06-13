'use client'
import { AppContext } from "@/context/AppContext"
import { useContext } from "react"
import SearchBar from "./search/SearchBar";
import Nav from "./Nav";

export default function HomeNav() {

    const { isElementTouchTop } = useContext(AppContext)!;

    return (
        <div>
            {
                isElementTouchTop ? (
                    <Nav />
                ) : (
                    <SearchBar />
                )
            }
        </div>

    )
}




