import Nav from "@/components/Nav";
import { AppProvider } from "../context/AppContext";
import HomeBackground from "@/components/home/HomeBackground";
import HomeContent from "@/components/home/HomeContent";
import SearchBar from "@/components/search/SearchBar";
import SearchResults from "@/components/search/SearchResults";

import Image from "next/image";
import Home from "./home";

export default function App() {
  return (
    <main >
      <AppProvider >
        <Home />
      </AppProvider>
    </main>
  );
}
