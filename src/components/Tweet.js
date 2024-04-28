import React from 'react'

const Tweet = () => {
    return (
        <div className='flex-col border-b-[1px] border-gray-600 items-center p-4 justify-start'>
            <div className='focus-within:border-b-[1px] focus-within:border-gray-600 pb-2'>
                <input type="text" placeholder="What is happening?!" className=' p-2 ml-10 text-xl bg-black focus:outline-none' />
            </div>
            <div className='text-blue-500 ml-10 my-4 items-center'>
                <span class="material-symbols-outlined mx-2">
                    image
                </span>
                <span class="material-symbols-outlined mx-2">
                    gif_box
                </span>
                <span class="material-symbols-outlined mx-2">
                    dns
                </span>
                <span class="material-symbols-outlined mx-2">
                    mood
                </span>
                <span class="material-symbols-outlined mx-2">
                    location_on
                </span>
                <button className='bg-blue-500 font-bold w-20 ml-48 rounded-full my-2 text-white p-1'>Post</button>
            </div>
        </div>
    )
}

export default Tweet
