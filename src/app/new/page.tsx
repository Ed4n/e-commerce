'use client'

import ProductsList from "@/components/products/ProductsList";
import { useGetNewProducts } from "@/hooks/products/useGetNewProducts";

export default function New(): JSX.Element {
    const { newProducts, error, loading } = useGetNewProducts()

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!newProducts) return null!;

    return (
        <section className="flex flex-col w-full">
            <h1 className="mb-5">New Arrival</h1>
            <ProductsList data={newProducts} />
        </section>
    )
}