import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 text-base w-1/4'>{overview}</p>
        <div className='flex gap-4'>
            <button className='bg-white text-black p-2 px-8 text-base rounded-lg hover:bg-opacity-80'>
                ▶ Play
            </button>
            <button  className='bg-gray-500 text-white p-2 px-8 text-base bg-opacity-50 rounded-lg'>
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle;