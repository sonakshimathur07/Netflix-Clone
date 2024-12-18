import React from 'react'
import { Img_CDN_Url } from "../utils/constants"

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
        <img alt='Movie Card' src={  Img_CDN_Url + posterPath }/>
    </div>
  )
}

export default MovieCard