import Nav from "@/components/Nav";
import HomeBackground from "@/components/home/HomeBackground";
import HomeContent from "@/components/home/HomeContent";
import SearchResults from "@/components/search/SearchResults";
import { AppProvider } from "@/context/AppContext";

export default function Home() {
    return (
        <main>
            <HomeBackground />
            <HomeContent />
            <Nav />
            {/* <SearchResults /> */}
        </main>
    )
}