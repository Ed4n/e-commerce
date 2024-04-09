import { useGetNewProducts } from "@/hooks/products/useGetNewProducts";
import ProductsList from "../ProductsList";
import { useGetProducts } from "@/hooks/products/useGetProducts";
import { useEffect, useState } from "react";
import Link from "next/link";




export default function NewArrivalComponent(): JSX.Element {
    const { newProducts, error, loading } = useGetNewProducts(4)

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!newProducts) return null!;

    return (
        <section className="flex flex-col w-full">
            <h1 className="mb-5">New Arrival</h1>
            <ProductsList data={newProducts} />
            <Link className="justify-self-end self-end mt-4" href="/new">see more</Link>
        </section>
    )
}