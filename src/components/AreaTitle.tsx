import Link from "next/link"
import React from 'react'

interface Props {
    img: string,
    title: string

}

export default function AreaTitle({ img, title }: Props) {

    return (
        <Link href={"#"} >
            <div className='w-full h-[180px] rounded-2xl overflow-hidden relative' >
                <div className="bg-black opacity-25 w-full h-full absolute"></div>
                <img className=" object-cover w-full h-full" src={img} alt="Area Image" />
                <h1 className="absolute bottom-4 left-5 text-white/70">{title}</h1>

            </div>
        </Link>
    )
}