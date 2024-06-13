import { getProductById } from "@/api/productsFetch"
import { useEffect, useState } from "react"

interface UseGetProductById {
    product: Product | undefined;
    loading: boolean | undefined;
    error: string | null;
}

export const useGetProductById = (id: string): UseGetProductById => {
    const [product, setProduct] = useState<Product>()
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchById = async (id: string) => {
            try {
                const res = await getProductById(id)
                setProduct(res)
            } catch (err: any) {
                setError(err.message || "An error has ocurred")
            } finally {
                setLoading(false)

            }
        }

        fetchById(id)
    }, [id])

    return { product, error, loading }
}