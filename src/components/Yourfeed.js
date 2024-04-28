import React from 'react'

const Yourfeed = () => {
  return (
    <div className='flex-col  md:2/5'>
      <section className="text-gray-400 bg-black body-font">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <div className="tweet flex flex-row my-2 pl-5">
              <div className='image w-[12%]'>
                <img src="https://photosnow.org/wp-content/uploads/2024/04/anime-dp-for-boys_15.jpg" alt="" className='rounded-full w-10 h-10 cursor-pointer justify-start' />
              </div>
              <div className="content w-4/5">
                <div className='flex flex-row gap-4 my-1 items-center'>
                  <h2 className=' text-white font-bold'>User1</h2>
                  <p className="mr-auto">@first_user</p>
                  <span className="material-symbols-outlined text-gray-500 cursor-pointer justify-end ">
                    more_horiz
                  </span>
                </div>
                <p className='text-white mb-2'>This is the first user's tweet</p>
                <div className="border-2 border-gray-800 rounded-lg overflow-hidden">
                  <img className=" w-full object-cover object-center" src="https://lh3.googleusercontent.com/RUg9YJuY2cPjh5znR5ZLqLJIBrm1CM2JuwCS1XP6g31ZDPa_NR--jR0JAum5qDbl2g5UKgBwM4SHSuyiWqjyd7VhBUI=w640-h400-e365-rj-sc0x00ffffff" alt="blog" />
                </div>
                <div className="icons p-6 items-center">
                  <span className="text-gray-500 mr-10 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>345K
                  </span>
                  <span className="text-gray-500 mr-10 inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>622k
                  </span>
                  <span className="text-gray-500 mr-10 inline-flex items-center leading-none text-sm">
                    <span class="material-symbols-outlined text-[18px] py-1 font-thin mx-1">
                      favorite
                    </span>112k
                  </span>
                  <span className="text-gray-500 mr-10 inline-flex items-center leading-none text-sm">
                    <span class="material-symbols-outlined mx-1">
                      bar_chart_4_bars
                    </span>342k
                  </span>
                </div>
              </div>
            </div>
            <hr className='border-gray-500 w-full' />
            <div className="tweet flex flex-row my-2 pl-5">
              <div className='image w-[12%]'>
                <img src="https://photosnow.org/wp-content/uploads/2024/04/anime-dp-for-boys_15.jpg" alt="" className='rounded-full w-10 h-10 cursor-pointer justify-start' />
              </div>
              <div className="content w-4/5">
                <div className='flex flex-row gap-1 my-1 items-center'>
                  <h2 className=' text-white font-bold'>User1</h2>
                  <p className="mr-auto">@first_user</p>
                  <span className="material-symbols-outlined text-gray-500 cursor-pointer justify-end ">
                    more_horiz
                  </span>
                </div>
                <p className='text-white mb-2'>This is the first user's tweet</p>
                <div className="border-2 border-gray-800 rounded-lg overflow-hidden">
                  <img className="h-full w-full object-cover object-center" src="https://wallpapercave.com/wp/wp5121779.jpg" alt="blog" />
                </div>
                <div className="icons p-6 items-center">
                  <span className="text-gray-500 mr-10 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>345K
                  </span>
                  <span className="text-gray-500 mr-10 inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>622k
                  </span>
                  <span className="text-gray-500 mr-10 inline-flex items-center leading-none text-sm">
                    <span class="material-symbols-outlined text-[18px] py-1 font-thin mx-1">
                      favorite
                    </span>112k
                  </span>
                  <span className="text-gray-500 mr-10 inline-flex items-center leading-none text-sm">
                    <span class="material-symbols-outlined mx-1">
                      bar_chart_4_bars
                    </span>342k
                  </span>
                </div>
              </div>
            </div>
            <hr className='border-gray-500 w-full' />
            <div className="tweet flex flex-row my-2 pl-5">
              <div className='image w-[12%]'>
                <img src="https://photosnow.org/wp-content/uploads/2024/04/anime-dp-for-boys_15.jpg" alt="" className='rounded-full w-10 h-10 cursor-pointer justify-start' />
              </div>
              <div className="content w-4/5">
                <div className='flex flex-row gap-4 my-1 items-center'>
                  <h2 className=' text-white font-bold'>User1</h2>
                  <p className="mr-auto">@first_user</p>
                  <span className="material-symbols-outlined text-gray-500 cursor-pointer justify-end ">
                    more_horiz
                  </span>
                </div>
                <p className='text-white mb-2'>This is the first user's tweet</p>
                <div className="border-2 border-gray-800 rounded-lg overflow-hidden">
                  <img className=" w-full object-cover object-center" src="https://4kwallpapers.com/images/walls/thumbs/15478.jpg" alt="blog" />
                </div>
                <div className="icons p-6 items-center">
                  <span className="text-gray-500 mr-10 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>345K
                  </span>
                  <span className="text-gray-500 mr-10 inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>622k
                  </span>
                  <span className="text-gray-500 mr-10 inline-flex items-center leading-none text-sm">
                    <span class="material-symbols-outlined text-[18px] py-1 font-thin mx-1">
                      favorite
                    </span>112k
                  </span>
                  <span className="text-gray-500 mr-10 inline-flex items-center leading-none text-sm">
                    <span class="material-symbols-outlined mx-1">
                      bar_chart_4_bars
                    </span>342k
                  </span>
                </div>
              </div>
            </div>
            <hr className='border-gray-500 w-full' />
            <div className="tweet flex flex-row my-2 pl-5">
              <div className='image w-[12%]'>
                <img src="https://photosnow.org/wp-content/uploads/2024/04/anime-dp-for-boys_15.jpg" alt="" className='rounded-full w-10 h-10 cursor-pointer justify-start' />
              </div>
              <div className="content w-4/5">
                <div className='flex flex-row gap-4 my-1 items-center'>
                  <h2 className=' text-white font-bold'>User1</h2>
                  <p className="mr-auto">@first_user</p>
                  <span className="material-symbols-outlined text-gray-500 cursor-pointer justify-end ">
                    more_horiz
                  </span>
                </div>
                <p className='text-white mb-2'>This is the first user's tweet</p>
                <div className="border-2 border-gray-800 rounded-lg overflow-hidden">
                  <img className=" w-full object-cover object-center" src="https://4kwallpapers.com/images/walls/thumbs_2t/15598.jpg" alt="blog" />
                </div>
                <div className="icons p-6 items-center">
                  <span className="text-gray-500 mr-10 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>345K
                  </span>
                  <span className="text-gray-500 mr-10 inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>622k
                  </span>
                  <span className="text-gray-500 mr-10 inline-flex items-center leading-none text-sm">
                    <span class="material-symbols-outlined text-[18px] py-1 font-thin mx-1">
                      favorite
                    </span>112k
                  </span>
                  <span className="text-gray-500 mr-10 inline-flex items-center leading-none text-sm">
                    <span class="material-symbols-outlined mx-1">
                      bar_chart_4_bars
                    </span>342k
                  </span>
                </div>
              </div>
            </div>
            <hr className='border-gray-500 w-full' />
            <div className="tweet flex flex-row my-2 pl-5">
              <div className='image w-[12%]'>
                <img src="https://photosnow.org/wp-content/uploads/2024/04/anime-dp-for-boys_15.jpg" alt="" className='rounded-full w-10 h-10 cursor-pointer justify-start' />
              </div>
              <div className="content w-4/5">
                <div className='flex flex-row gap-4 my-1 items-center'>
                  <h2 className=' text-white font-bold'>User1</h2>
                  <p className="mr-auto">@first_user</p>
                  <span className="material-symbols-outlined text-gray-500 cursor-pointer justify-end ">
                    more_horiz
                  </span>
                </div>
                <p className='text-white mb-2'>This is the first user's tweet</p>
                <div className="border-2 border-gray-800 rounded-lg overflow-hidden">
                  <img className=" w-full object-cover object-center" src="https://www.hindustantimes.com/ht-img/img/2023/04/22/550x309/HIDIVE_OSHI_NO_KO_1682155135941_1682155148326.jpg" alt="blog" />
                </div>
                <div className="icons p-6 items-center">
                  <span className="text-gray-500 mr-10 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>345K
                  </span>
                  <span className="text-gray-500 mr-10 inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>622k
                  </span>
                  <span className="text-gray-500 mr-10 inline-flex items-center leading-none text-sm">
                    <span class="material-symbols-outlined text-[18px] py-1 font-thin mx-1">
                      favorite
                    </span>112k
                  </span>
                  <span className="text-gray-500 mr-10 inline-flex items-center leading-none text-sm">
                    <span class="material-symbols-outlined mx-1">
                      bar_chart_4_bars
                    </span>342k
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Yourfeed
