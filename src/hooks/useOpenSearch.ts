import { AppContext } from "@/context/AppContext"
import { useRouter } from "next/router"
import { useContext } from "react"

export const useOpenSearch = () => {
    const { setSearchOpen } = useContext(AppContext)!
    const router = useRouter()

    const openSearch = () => {
        router.push("/")
    }

    return [openSearch]
}