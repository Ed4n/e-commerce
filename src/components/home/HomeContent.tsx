'use client'

import React, { useContext, useEffect, useRef } from 'react';
import ProductsList from '../products/ProductsList';
import { AppContext } from '@/context/AppContext';

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
    const isElementTouchTop = useElementTouchTop(elementRef);

    return (
        <div ref={elementRef} className='w-full pb-16 pt-24 px-5 bg-white z-10 absolute lg:static mt-[150%] lg:mt-0 rounded-2xl shadow-xl'>
            <div className='absolute top-5 left-0 right-0 m-auto w-[50%] h-[5px] bg-gray-300 rounded-full'></div>
            <h2 className='text-3xl font-bold'>New Arrival</h2>
            <ProductsList />
        </div>
    );
}
