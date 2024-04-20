import { useDispatch } from 'react-redux'
import { addVideoTrailer } from '../store/movieSlice';
import { API_OPTIONS } from '../utils/constants'
import { useEffect }from 'react'
const useMovieTrailer=(movieid)=>{
    const dispatch=useDispatch();
    const getMoviesvideos= async ()=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,API_OPTIONS);
        const json=await data.json();
        const filterData=json.results.filter(video=> video.type==='Trailer')
        const trailer=filterData[0];
        console.log(trailer);
        dispatch(addVideoTrailer(trailer));
    }
    useEffect(()=>{
        getMoviesvideos();
    },[])
}


export default useMovieTrailer; 