import React from 'react'

const SearchBar = () => {
  return (
    <div>
      <div className='flex ml-0'>
        <div className='flex relative items-center'>
          <span className="material-symbols-outlined text-gray-400 absolute pl-2 z-10 pointer-events-none">
            search
          </span>
          <input type="text" placeholder='Search' className='bg-gray-900 text-gray-400 w-80 my-3 pr-3 pl-12 py-2 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500' />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
