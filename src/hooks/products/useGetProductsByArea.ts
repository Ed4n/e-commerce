import { getNewProducts, getProductsByArea } from "@/api/productsFetch"
import { Limelight } from "next/font/google";
import { useEffect, useState } from "react"


interface UseGetNewProducts {
    productsByArea: Product[] | undefined;
    loading: boolean | undefined;
    error: string | null;
}

const useGetNewProducts = (area: string, limit: number | null,): UseGetNewProducts => {
    const [productsByArea, setproductsByArea] = useState<Product[]>()
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean | undefined>(true)

    useEffect(() => {

        const getProducts = async (area: string, limit: number | null) => {
            try {
                const allProducts = await getProductsByArea(area, limit)
                setproductsByArea(allProducts)
            } catch (err: any) {
                setError(err.message || 'An error occurred');
            } finally {
                setLoading(false)
            }
        }

        getProducts(area, limit)


    }, [area, limit])

    return { productsByArea, loading, error }
}

export { useGetNewProducts }