'use client'

import React, { createContext, useState, ReactNode } from 'react';

interface AppContextType {
    searchOpen: boolean;
    setSearchOpen: (open: boolean) => void;
    isElementTouchTop: boolean;
    setIsElementTouchTop: (touchTop: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [isElementTouchTop, setIsElementTouchTop] = useState(false);

    return (
        <AppContext.Provider
            value={{
                searchOpen,
                setSearchOpen,
                isElementTouchTop,
                setIsElementTouchTop,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
