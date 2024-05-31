import ProductsList from "./ProductsList";
import Link from "next/link";

interface Props {
    props: {
        title: string;
        category: string
        data: Product[] | undefined;
        error: string | null
        loading: boolean | undefined
    }
}


export default function CategoryComponent({ props }: Props): JSX.Element {

    const { title, category, data = [], error, loading } = props

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {props.error}</div>;
    if (!data) return null!;

    return (
        <section className="flex flex-col w-full">
            <h1 className="mb-5">{title}</h1>
            <ProductsList data={data} />
            <Link className="justify-self-end self-end mt-4" href={"/category"} as={`category/${category}`}>see more</Link>
        </section>
    )
}