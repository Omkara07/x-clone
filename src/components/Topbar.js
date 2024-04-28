import React from 'react'

const Topbar = () => {
    return (
        <div className='flex flex-row gap-24 my-2 pl-24 container pt-1 border-b-[1px] border-gray-600 items-center'>
            <button className='font-bold mx-50 active:font-bold py-2 border-b-4 border-blue-500 '>
                For you
            </button>
            <button className={`text-gray-500 font-bold py-2 ml-20`}>
                Following
            </button>
            <span class="w-4 h-4 material-symbols-outlined mr-8 cursor-pointer text-[20px] font-thin">
                settings
            </span>

        </div>
    )
}

export default Topbar
