import { useAppContext } from "@/context/AppContext"
import { useEffect } from "react"

export const useResetNavState = () => {
    const { setIsElementTouchTop } = useAppContext()

    useEffect(() => {
        setIsElementTouchTop(true)

        return () => {
            setIsElementTouchTop(false)
        }
    }, [setIsElementTouchTop])
}

