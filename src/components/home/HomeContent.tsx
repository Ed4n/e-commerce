'use client'

import React, { useContext, useEffect, useRef } from 'react';
import { AppContext, useAppContext } from '@/context/AppContext';
import { useGetNewProducts } from '@/hooks/products/useGetNewProducts';
import CategoryComponent from '../products/CategoryComponent';
import AreaTitle from '../products/AreaTitle';
import { useGetProductsByCategories } from '@/hooks/products/useGetProductsByCategories';
import ProductSkeleton from '../ui/skeletons/ProductSkeleton';

function useElementTouchTop(elementRef: React.RefObject<HTMLDivElement>): boolean {
    const { isElementTouchTop, setIsElementTouchTop } = useAppContext();

    useEffect(() => {
        function handleScroll() {
            const element = elementRef.current;
            if (element) {
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top;
                setIsElementTouchTop(elementTop <= 0);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [elementRef, setIsElementTouchTop]);

    return isElementTouchTop;
}

export default function HomeContent(): JSX.Element {
    const elementRef = useRef<HTMLDivElement>(null);
    useElementTouchTop(elementRef);

    const { newProducts, error, loading } = useGetNewProducts(4)
    const { productsByCategories, loading: categoriesLoading, error: categoriesError } = useGetProductsByCategories("Gaming & Consoles", 4)

    const newArrivalProps = {
        title: "New Arrival",
        category: "new-arrival",
        data: newProducts,
        error: error,
        loading: loading,
        isArea: false
    }

    const gamingAndConsoles = {
        title: "Gaming & Consoles",
        category: "Gaming & Consoles",
        data: productsByCategories,
        error: categoriesError,
        loading: categoriesLoading,
        isArea: false
    }

    return (
        <div ref={elementRef} className='w-full pb-16 pt-24 px-5 bg-white z-10 absolute lg:static mt-[150%] lg:mt-0 rounded-2xl shadow-xl'>
            <CategoryComponent props={gamingAndConsoles} />
            <div className='absolute top-5 left-0 right-0 m-auto w-[50%] h-[5px] bg-gray-300 rounded-full'></div>
            <CategoryComponent props={newArrivalProps} />

            <div className='mt-12 flex flex-col gap-3'>
                <AreaTitle img='./img/tech.jpg' area="Electronics" />
                <AreaTitle img='./img/gaming.jpg' area='Automotive Accessories' />
                <AreaTitle img='./img/home.jpg' area='Smart Home Devices' />
            </div>
        </div>
    );
}
