// import ProfileImg from "

'use client'

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CartIcon } from "./shopping-cart/CartIcon";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";


export default function Nav() {

    const currentPath = usePathname();

    const getIconColor = (path: string) => {
        return currentPath === path ? "fill-black scale-[1.2]" : "fill-slate-600";
    };

    return (
        <nav className="fixed z-20 right-5 bottom-10  py-4 max-w-[700px] bg-white shadow-xl rounded-full px-7  flex gap-7 items-center transition-all duration-300">
            <Link href={"/"}>
                <svg className={`nav-icon w-[30px] h-[30px] ${getIconColor('/')}`} viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M22.9803 10.0038C22.9937 10.1597 23 10.3178 23 10.477V18.0538C23 21.3378 20.18 24 16.7012 24H14.0539V19.8932C14.0539 18.5619 12.9105 17.4826 11.5002 17.4826H11.4998C10.0895 17.4826 8.94642 18.5619 8.94642 19.8932V24H6.29875C2.82 24 0 21.3378 0 18.0538V10.477C0 10.3178 0.00668247 10.1597 0.0196957 10.0038C0.125208 8.73267 0.65242 7.57414 1.46874 6.65371L1.49441 6.63155C1.84225 6.24475 2.24144 5.90039 2.68248 5.60785L7.85823 1.14876C8.69424 0.428484 10.0525 0 11.5009 0C12.9496 0 14.3075 0.428484 15.1439 1.14876L20.326 5.61348C20.7607 5.90264 21.1549 6.2425 21.4993 6.62404C22.3339 7.54936 22.8734 8.71915 22.9803 10.0038Z" />
                </svg>
            </Link>

            <svg className={`nav-icon w-[30px] h-[30px] fill-slate-600`} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.3314 20.245L18.4808 15.3944C19.4213 13.913 19.9652 12.1568 19.9652 10.2768C19.9652 4.99444 15.6681 0.696442 10.3858 0.696442C5.10343 0.696442 0.807373 4.99444 0.807373 10.2768C0.807373 15.5591 5.10343 19.8572 10.3868 19.8572C12.1742 19.8572 13.8485 19.365 15.2812 18.5093L20.1747 23.4028C22.2642 25.4894 25.422 22.3346 23.3314 20.245ZM3.77699 10.2768C3.77699 6.63275 6.74271 3.66703 10.3868 3.66703C14.0308 3.66703 16.9965 6.63178 16.9965 10.2768C16.9965 13.9218 14.0308 16.8866 10.3868 16.8866C6.74271 16.8866 3.77699 13.9208 3.77699 10.2768ZM5.73594 8.5576C7.66956 4.07539 14.1799 4.59486 15.406 9.28757C12.9363 6.3891 8.59056 6.07723 5.73594 8.5576Z" />
            </svg>
            <ShoppingCartProvider>
                <CartIcon iconColor={getIconColor('/shopping-cart')} />
            </ShoppingCartProvider>


            <div className="w-[50px] h-[50px] overflow-hidden rounded-full bg-red-200">
                <img className=" object-cover w-full h-full" src={"./img/profile_image.jpg"} alt="" />
            </div>
        </nav>
    )
}