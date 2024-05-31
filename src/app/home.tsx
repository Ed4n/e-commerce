'use client'

import Nav from "@/components/Nav";
import HomeBackground from "@/components/home/HomeBackground";
import HomeContent from "@/components/home/HomeContent";
import Search from "@/components/search/Search";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

export default function Home() {
    const { searchOpen } = useContext(AppContext)!;

    return (
        <main>
            <HomeBackground />
            {!searchOpen ? <HomeContent /> : null}
            <Nav />
            <Search />
        </main>
    )
}