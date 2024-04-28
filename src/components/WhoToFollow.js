import React from 'react'

const WhoToFollow = () => {
    const arr = [0, 1, 2];
    const name = ["JujutsuK", "AttackOnTitan", "BlueLock"]
    const id = ["@jujutsukaisen", "@aot_titan", "@blue_lock"]
    const url = ["https://wallpapers.com/images/hd/sukuna-sitting-unbothered-4k-nku51cj3gycxihkd.jpg","https://w.forfun.com/fetch/05/0512acd4983551a0b9ccf642e385b155.jpeg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYUdruv_T0zIjOI355nySougp6aZjorIMIP6zGrm1gNw&s"]
    return (
        <>
            <div className='flex flex-col ml-0 my-3 rounded-xl bg- container border-[1px] border-gray-600 w-80 '>
                <div className='text-2xl font-bold mx-2 my-2 p-2'>
                    Who to follow
                </div>
                <ul className='mx-2'>
                    {arr.map((e) => {
                        return <li className='flex flex-row items-center my-3 p-2 justify-between' key={e}>
                            <div className='flex flex-row items-center'>
                            <img src={url[e]} alt="" className='rounded-full w-10 h-10 cursor-pointer'/>
                            <div className='mx-2'>
                                <p className='font-bold cursor-pointer'>{name[e]}</p>
                                <p className='flex text-gray-500 text-[0.85rem]'>{id[e]}</p>
                            </div>
                            </div>
                            <button className='bg-gray-200 text-black rounded-full py-2 px-5 font-bold '>Follow</button>
                        </li>
                    })}
                    <li className='text-blue-400 p-2 cursor-pointer'>Show more</li>
                </ul>
            </div>
        </>
    )
}

export default WhoToFollow
