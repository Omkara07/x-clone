import React from 'react'
import '../output.css'
import SearchBar from './SearchBar'
import WhatsHap from './WhatsHap'
import WhoToFollow from './WhoToFollow'

const Right = () => {
  return (
    <div className='sm:w-0 w-8 hidden md:block md:w-1/3 md:ml-0 justify-start'>
      <SearchBar/>
      <WhatsHap/>
      <WhoToFollow/>
    </div>
  )
}

export default Right
