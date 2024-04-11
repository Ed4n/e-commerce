import { useGetNewProducts } from "@/hooks/products/useGetNewProducts";
import ProductsList from "../ProductsList";
import { useGetProducts } from "@/hooks/products/useGetProducts";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Props {
    props: {
        title: string;
        data: Product[] | undefined;
        href: string;
        error: string | null
        loading: boolean | undefined
    }
}


export default function CategoryComponent({ props }: Props): JSX.Element {

    if (props.loading) return <div>Loading...</div>;
    if (props.error) return <div>Error: {props.error}</div>;
    if (!props.data) return null!;

    return (
        <section className="flex flex-col w-full">
            <h1 className="mb-5">{props.title}</h1>
            <ProductsList data={props.data} />
            <Link className="justify-self-end self-end mt-4" href={props.href}>see more</Link>
        </section>
    )
}