import React from 'react'
import {  useSelector } from 'react-redux'
import useMovieTrailer from '../Hooks/useMovieTrailer'


const Videobackground = ({movieid}) => {
    const trailervideo=useSelector(store=>store.movies?.trailervideo)
    console.log(trailervideo)
   useMovieTrailer(movieid);

  return (
    <div >
        <iframe 
            className='w-screen h-50 aspect-video'
            src={"https://www.youtube.com/embed/" + trailervideo?.key + "?autoplay=1&mute=1" }
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        ></iframe>
    </div>
  )
}

export default Videobackground;