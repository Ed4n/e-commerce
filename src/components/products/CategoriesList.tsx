import { CategoriesContext } from "@/context/CategoriesContext";
import React, { useContext, useState } from "react";

interface CategoriesListProps {
    categories: string[]
}

const CategoriesList: React.FC<CategoriesListProps> = ({ categories }) => {

    const { setCategories } = useContext(CategoriesContext)!


    // FUNCTIONS // --------------------------------------------------------
    const removeDuplicates = (arr: string[]) => {
        return arr.filter((item, index) => arr.indexOf(item) === index);
    }

    const cleanedCategories = removeDuplicates(categories).sort()

    const half = Math.floor(cleanedCategories.length / 2)

    const toggleCategory = (category: string) => {
        setCategories(prevCategories => {
            if (prevCategories.includes(category)) {
                // If category is already in the state, remove it
                return prevCategories.filter((c) => c !== category);
            } else {
                // If category is not in the state, add it
                return [...prevCategories, category];
            }
        });
    };

    // HANDLERS // ----------------------------------------------------------
    const handleToggleCategory = (category: string) => {


        toggleCategory(category);
    };

    return (
        <div className="flex flex-col gap-5">
            <h1>Categories</h1>
            <div className="flex flex-col gap-3 overflow-x-scroll no-scrollbar ">
                <div className="flex gap-3 ">
                    {cleanedCategories.slice(0, half).map((category, index) => (
                        <Category key={index} category={category} action={handleToggleCategory} />
                    ))}
                </div>

                <div className="flex gap-3 ">
                    {cleanedCategories.slice(half, cleanedCategories.length).map((category, index) => (
                        <Category key={index} category={category} action={handleToggleCategory} />
                    ))}
                </div>
            </div>
        </div>
    )
}

type CategoryProps = {
    category: string,
    action: (category: string) => void, // Correct type for the action function
}

// Correct the onClick handler to call the action function with the category
const Category: React.FC<CategoryProps> = ({ category, action }) => {
    const [categoryOn, setCategoryOn] = useState(false)
    const handleToggleCategory = (e) => {
        setCategoryOn(!categoryOn)
        action(category)
    }

    return (
        <button onClick={handleToggleCategory} className={(categoryOn ? "bg-gray-500 text-gray-50 shadow-xl" : "bg-white hover:bg-gray-50 text-black shadow-md  ") + " px-6 py-3 rounded-lg  whitespace-nowrap outline-none "
        }>
            {category}
        </button >
    )
}

export { CategoriesList }