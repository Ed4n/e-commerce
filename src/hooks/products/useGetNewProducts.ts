import { getNewProducts } from "@/api/productsFetch"
import { Limelight } from "next/font/google";
import { useEffect, useState } from "react"


interface UseGetNewProducts {
    newProducts: Product[] | undefined;
    loading: boolean | undefined;
    error: string | null;
}

const useGetNewProducts = (limit: number | null): UseGetNewProducts => {
    const [newProducts, setNewProducts] = useState<Product[]>()
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean | undefined>(true)

    useEffect(() => {

        const getProducts = async (limit: number | null) => {
            try {
                const allProducts = await getNewProducts(limit)
                setNewProducts(allProducts)
            } catch (err: any) {
                setError(err.message || 'An error occurred');
            } finally {
                setLoading(false)
            }
        }
        getProducts(limit)


    }, [limit])

    return { newProducts, loading, error }
}

export { useGetNewProducts }