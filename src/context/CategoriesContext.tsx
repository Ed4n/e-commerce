import { useState, createContext, ReactNode, Dispatch, SetStateAction } from "react";

// Define the shape of the context value
interface CategoriesContextType {
    categories: string[];
    setCategories: Dispatch<SetStateAction<string[]>>;
}

// Create a context with the defined type, defaulting to undefined
const CategoriesContext = createContext<CategoriesContextType | undefined>(undefined);

// Define the props type for the CategoriesProvider component
interface CategoriesProviderProps {
    children: ReactNode;
}

const CategoriesProvider: React.FC<CategoriesProviderProps> = ({ children }) => {
    // Use state to manage categories
    const [categories, setCategories] = useState<string[]>([]);

    return (
        // Provide the context value to children components
        <CategoriesContext.Provider value={{ categories, setCategories }}>
            {children}
        </CategoriesContext.Provider>
    );
}

export { CategoriesContext, CategoriesProvider };