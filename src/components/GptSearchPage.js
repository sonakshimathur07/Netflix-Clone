import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { HeroImage } from '../utils/constants';



const GptSearchPage = () => {
  return (
    <div>
       <div className='absolute -z-10'>
                 <img src={HeroImage}
                  alt="background-image" />
               </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  )
}

export default GptSearchPage