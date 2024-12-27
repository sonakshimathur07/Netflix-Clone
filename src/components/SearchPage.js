import React from 'react';
import SearchBar from './SearchBar';
import { HeroImage } from '../utils/constants';



const GptSearchPage = () => {
  return (
    <>
      <div className='relative-z-10 bg-black'>
        <img className='w-screen' src={HeroImage}
          alt="background-image" />
      </div>
      <div className='bg-black'>
        <SearchBar />
      </div>
    </>
  )
}

export default GptSearchPage