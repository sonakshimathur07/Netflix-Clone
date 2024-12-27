import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='md:w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white'>
        <div className="relative z-10 mt-[-2rem] max-w-full">
        <h1 className='mt-20 text-xl md:text-4xl text-red-700 mt-5 font-bold'>{title}</h1>
        <p className=' hidden md:inline-block py-6 text-base w-1/4'>{overview}</p>
        <div className="my-4 md:m-0">
          <button className='mt-0 bg-slate-300 text-black md:py-2 px-2 md:px-5 text-xl rounded-lg hover:bg-opacity-80'>▶ Play</button>
          <button className='hidden md:inline-block mx-2'>More Info</button>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle;