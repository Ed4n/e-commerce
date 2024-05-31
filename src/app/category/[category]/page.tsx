'use client'
import { getAllProducts, getNewProducts } from "@/api/productsFetch"
import ProductsList from "@/components/products/ProductsList"
import { useGetNewProducts } from "@/hooks/products/useGetNewProducts"
import { da } from "@faker-js/faker"
import { useEffect, useState } from "react"
import { json } from "stream/consumers"


interface Props {
    params: { category: string }
}

export default function Area({ params }: Props) {
    const { category } = params

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
                console.log('Unknown fruit.');
        }
    }, [category])

    const fetchNewArrival = async () => {
        try {
            const allProducts = await getNewProducts()
            setProducts(allProducts)
        } catch (err: any) {
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false)
        }
    }



    return (
        <div>
            <h1>{title}</h1>
            {
                JSON.stringify(products)
            }
        </div>
    )
}