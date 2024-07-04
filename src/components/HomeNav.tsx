'use client'
import { AppContext } from "@/context/AppContext"
import { useContext } from "react"
import { motion } from "framer-motion";
import SearchBar from "./search/SearchBar";
import Nav from "./Nav";

export default function HomeNav() {

    return (
        <div>
            <SearchBar />
            <Nav />
        </div>
    )
}