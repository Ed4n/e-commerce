'use client'

import React, { useContext, useEffect, useRef } from 'react';
import { AppContext } from '@/context/AppContext';
import { useGetNewProducts } from '@/hooks/products/useGetNewProducts';
import CategoryComponent from '../products/new-arrival/CategoryComponent';
import { getAllProducts } from '@/api/productsFetch';
import { useGetProducts } from '@/hooks/products/useGetProducts';
import ProductsList from '../products/ProductsList';
import { json } from 'stream/consumers';
import AreaTitle from '../AreaTitle';

interface Props { }

function useElementTouchTop(elementRef: React.RefObject<HTMLDivElement>): boolean {
    const { isElementTouchTop, setIsElementTouchTop } = useContext(AppContext)!;

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

export default function HomeContent({ }: Props): JSX.Element {
    const elementRef = useRef<HTMLDivElement>(null);
    useElementTouchTop(elementRef);

    const { newProducts, error, loading } = useGetNewProducts(4)
    const { products, error: allProductsError, loading: allProductsLoading } = useGetProducts(8)



    const newArrivalProps = {
        title: "New Arrival",
        area: "new-arrival",
        data: newProducts,
        href: '/area',
        error: error,
        loading: loading
    }


    return (
        <div ref={elementRef} className='w-full pb-16 pt-24 px-5 bg-white z-10 absolute lg:static mt-[150%] lg:mt-0 rounded-2xl shadow-xl'>
            <div className='absolute top-5 left-0 right-0 m-auto w-[50%] h-[5px] bg-gray-300 rounded-full'></div>

            <CategoryComponent props={newArrivalProps} />

            <div className='flex flex-col gap-4 mt-12'>
                <h1>You may like</h1>
                <ProductsList data={products} />
            </div>
            <div className='mt-12 flex flex-col gap-3'>
                <AreaTitle img='./img/tech.jpg' title='Technology' />
                <AreaTitle img='./img/gaming.jpg' title='Gaming' />
                <AreaTitle img='./img/home.jpg' title='Home' />
            </div>

        </div>
    );
}
