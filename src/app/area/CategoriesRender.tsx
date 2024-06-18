import { useContext } from "react"
import { ProductsByCategory } from "./ProductsByCategory"
import { CategoriesContext } from "@/context/CategoriesContext"


interface CategoriesRenderProps {
    categories: Record<string, Product[]>
}

const CategoriesRender: React.FC<CategoriesRenderProps> = ({ categories }) => {

    const { categories: contextCategories } = useContext(CategoriesContext)!

    const filterCategories = (categories: Record<string, Product[]>, selected: string[]): Record<string, Product[]> => {

        if (selected.length > 0) {
            return Object.keys(categories)
                .filter(category => selected.includes(category))
                .reduce((acc, category) => {
                    acc[category] = categories[category];
                    return acc;
                }, {} as Record<string, Product[]>);
        }

        return categories
    };

    // Example usage:
    const filteredCategories = filterCategories(categories, contextCategories);
    console.log(filteredCategories);


    return (
        <ProductsByCategory productsByCategory={filteredCategories} />
    )
}

export { CategoriesRender }