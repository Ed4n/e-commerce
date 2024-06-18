'use client'
import { getAllProducts, getNewProducts, getProductsByCategories } from "@/api/productsFetch"
import ProductsList from "@/components/products/ProductsList"
import { useGetNewProducts } from "@/hooks/products/useGetNewProducts"
import { da } from "@faker-js/faker"
import { useEffect, useState } from "react"
import { json } from "stream/consumers"


interface Props {
    params: { category: string | undefined }
}

export default function Category({ params }: Props) {
    const { category = " " } = params
    const decodedCategory = decodeURIComponent(category)

    const [products, setProducts] = useState<Product[]>()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState("")

    useEffect(() => {
        switch (category) {
            case "new-arrival":
                fetchNewArrival()
                setTitle("New Arrival")
                break;

            default:
                fetchCategory(decodedCategory)
                setTitle(decodedCategory)
        }
    }, [category])

    const fetchNewArrival = async () => {
        try {
            const allProducts = await getNewProducts(null)
            setProducts(allProducts)
        } catch (err: any) {
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false)
        }
    }

    const fetchCategory = async (category: string) => {
        try {
            const allProducts = await getProductsByCategories(category, null)
            setProducts(allProducts)
        } catch (err: any) {
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false)
        }
    }

    if (loading) return <div> Loading...</div>
    if (error) return null

    return (
        <div>
            <h1>{title}</h1>
            <ProductsList data={products} />
        </div>
    )
}