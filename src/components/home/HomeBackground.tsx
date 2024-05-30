import React from 'react'

type Props = {}

export default function HomeBackground({ }: Props): JSX.Element {
    return (
        <div className='w-full h-screen fixed lg:static top-0 flex justify-center items-center'>
            <img className='w-full h-full object-cover' src="./img/BGImage.png" alt="" />
            <div className=' bg-black/50 w-full h-full absolute flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center text-white gap-3 -mt-[120%]'>
                    <h2>New iPhone</h2>
                    <h1>SPECIAL OFFER</h1>
                    <button className=' rounded-lg px-7 py-2 border-white border-2'>see more</button>
                </div>
            </div>
        </div>
    )
}