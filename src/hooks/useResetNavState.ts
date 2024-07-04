import { AppContext } from "@/context/AppContext"
import { useContext, useEffect } from "react"

export const useResetNavState = () => {
    const { setIsElementTouchTop } = useContext(AppContext)!

    useEffect(() => {
        setIsElementTouchTop(true)

        return () => {
            setIsElementTouchTop(false)
        }
    }, [setIsElementTouchTop])
}

