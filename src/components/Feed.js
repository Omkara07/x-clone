import React from 'react'
import Topbar from './Topbar'
import Tweet from './Tweet'
import Yourfeed from './Yourfeed'

const feed = () => {
  return (
    <div className='mx-0 sm:mx-10 md:w-2/5 border-x border-y-0 border-[1px] border-gray-600'>
      <Topbar/>
      <Tweet/>
      <Yourfeed/>
    </div>
  )
}

export default feed
