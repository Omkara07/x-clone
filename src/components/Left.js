import React from 'react'

const Left = () => {
  const name = [ "Home", "Explore", "Notifications", 'Message', 'Grok', 'List', 'Profile', 'More'];
  const icons = ['home','search','notifications','mail','movie_edit','reorder','person','more_horiz']
  const id = [0,1,2,3,4,5,6,7];

  return (
    <div className='sm:block hidden w-10 md:w-1/4'>

      <div className='w-8 ml-0 md:ml-44 my-4 flex items-center invert'>
        <svg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
      </div>
      <div className='sidebar items-end'>
        <ul className='flex flex-col mx-0 md:mx-40 font-bold'>
          {id.map((i) => {
            return <li className='flex items-center gap-4  my-1 w-fit py-2 md:px-4  hover:rounded-full hover:bg-gray-900 hover:cursor-pointer' key={i}>
              <span className="material-symbols-outlined font-bold text-3xl">
                {icons[i]}
              </span>
              <p className='text-gray-300 text-xl'><span className='hidden md:block'>{name[i]}</span></p>
            </li>
          })}
        </ul>
      </div>
        <button className='bg-blue-500 font-bold text-xl mx-40 rounded-full w-70 my-2 py-3 px-20 justify-center'>Post</button>
    </div>
  )
}

export default Left
