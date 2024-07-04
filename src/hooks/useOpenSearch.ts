import { useAppContext } from "@/context/AppContext"
import { useRouter } from "next/router"
import { useContext } from "react"

export const useOpenSearch = () => {
    const { setSearchOpen } = useAppContext();
    const router = useRouter()

    const openSearch = () => {
        router.push("/")
    }

    return [openSearch]
}