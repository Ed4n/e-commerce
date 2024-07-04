'use client'

import { useRouter } from 'next/router';
import React, { createContext, useState, ReactNode, useContext } from 'react';

interface AppContextType {
    searchOpen: boolean;
    setSearchOpen: (open: boolean) => void;
    isElementTouchTop: boolean;
    setIsElementTouchTop: (touchTop: boolean) => void;
    searchInput: string;
    setSearchInput: (touchTop: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};


const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [isElementTouchTop, setIsElementTouchTop] = useState(false);
    const [searchInput, setSearchInput] = useState("")

    return (
        <AppContext.Provider
            value={{
                searchOpen,
                setSearchOpen,
                isElementTouchTop,
                setIsElementTouchTop,
                setSearchInput,
                searchInput
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, useAppContext };
