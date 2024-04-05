import Nav from "@/components/Nav";
import { AppContext, AppProvider } from "../context/AppContext";
import HomeBackground from "@/components/home/HomeBackground";
import HomeContent from "@/components/home/HomeContent";
import SearchBar from "@/components/search/SearchBar";
import SearchResults from "@/components/search/SearchResults";

import Image from "next/image";

export default function Home() {
  return (
    <main >
      <AppProvider >
        <HomeBackground />
        <HomeContent />
        <Nav />
        <SearchResults />
      </AppProvider>
    </main>
  );
}
