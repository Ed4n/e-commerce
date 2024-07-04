'use client'

import HomeNav from "@/components/HomeNav";
import HomeBackground from "@/components/home/HomeBackground";
import HomeContent from "@/components/home/HomeContent";
import Search from "@/components/search/Search";
import { useAppContext } from "@/context/AppContext";
import { useContext } from "react";

export default function Home() {
    const { searchOpen } = useAppContext();

    return (
        <main>

            <HomeBackground />
            {!searchOpen ? <HomeContent /> : null}
            <HomeNav />
            <Search />

        </main>
    )
}