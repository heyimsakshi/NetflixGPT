import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
const SecondaryContainer = () => {
  const movies= useSelector((store)=>store.movies);
  console.log(movies)
  return (
     <div className='bg-black'>
    <div  className='mt-0 md:-mt-52 relative z-20 pl-4 md:pl-12'>
      <MovieList categoryTitle={"Now Playing"} movies={movies?.nowPlayingMovies} />
     
      
    </div>
  </div>
  )
}

export default SecondaryContainer