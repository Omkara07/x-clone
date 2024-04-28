import React from 'react'

const WhatsHap = () => {
    const arr = [0, 1, 2];
    const hash = ["#Dhruv_Rathi", "#MrunalThakur", "Cochella"]
    const trend = ["Popular . 3.2k posts", "Trending in India", "Popular . 1.3M posts"]
    return (
        <>
            <div className='flex flex-col mx-auto my-2 rounded-xl bg- container border-[1px] border-gray-600 w-80 ml-0'>
                <div className='text-2xl font-bold mx-2 my-2 p-2'>
                    What's happening
                </div>
                <ul className='mx-2'>
                    {arr.map((e) => {
                        return <li className='flex flex-row items-center my-3 p-2 gap-1 justify-between' key={e}>
                            <div>
                                <p className='flex text-gray-500 text-[0.85rem]'>{trend[e]}</p>
                                <p className='font-bold'>{hash[e]}</p>
                                <p className='flex text-gray-500 text-[0.75rem]'>Trending with - <span className='text-blue-400'> #x</span></p>
                            </div>
                            <span className="material-symbols-outlined text-gray-500 cursor-pointer">
                                more_horiz
                            </span>
                        </li>
                    })}
                    <li className='text-blue-400 p-2 cursor-pointer'>Show more</li>
                </ul>
            </div>
        </>
    )
}

export default WhatsHap