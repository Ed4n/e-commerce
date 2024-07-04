import ProductsList from "./ProductsList";
import Link from "next/link";

interface Props {
    props: {
        title: string;
        category: string
        data: Product[] | undefined;
        error: string | null
        loading: boolean | undefined
        isArea: boolean | null
    }
}

export default function CategoryComponent({ props }: Props): JSX.Element {
    const { title, category, data = [], error, loading, isArea } = props

    if (error) return <div>Error: {error}</div>;
    if (!data) return null;

    // Slice the data array to get only the first 4 products
    const limitedData = data.slice(0, 4);

    return (
        <section className="flex flex-col w-full max-w-[1150px] px-10">
            <h2 className="mb-5">{title}</h2>
            <ProductsList data={!isArea ? limitedData : data} loading={loading} />
            {/* Just add "/" before the rout if you want to be relative like this: as={`/category/${category}`. 
        IF you do like this as={`category/${category}` it will be nested to the previos window and will retour this:
        http://localhost:3000/area/category/Networking%20&%20Internet%20Devices
        */}
            {!isArea ? <Link className="justify-self-end self-end mt-4" href={"/category"} as={`/category/${category}`}>see more</Link> : null}
        </section>
    )
}