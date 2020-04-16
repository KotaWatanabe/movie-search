import React,{useState, useEffect} from 'react'
import noImage from '../img/no-image.jpg';
import axios from 'axios';
import MovieDetail from './MovieDetail';

const DEFAULT_PLACEHOLDER_IMAGE = noImage

const Movie = ({movie, search}) => {
    const poster = movie.Poster === "N/A" ? 
        DEFAULT_PLACEHOLDER_IMAGE 
        : 
        movie.Poster;
    const id = movie.imdbID
    const [movieInfo, setMovieInfo] = useState({});
    const [detailToggle, setDetailToggele] = useState(false);

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?i=${id}&apikey=1a6bcae6`)
            .then(res => setMovieInfo(res.data))
            .catch(err => {
                console.error(err.message)
            })
    },[])
    console.log(movieInfo)

    const ratingFixer = stringNum => {
        let rating = parseFloat(stringNum);
        if(rating > 7.5) {
            return <p> <span style={{color:"red", fontWeight:"bold"}}>{rating}</span>/10</p>
        }   return <p>{rating}/10</p>
    }

    return (
        <div className="movie">
           <h2>{movie.Title}</h2>
            <div>
                <img
                    width="200"
                    alt={`The movie titled: ${movie.Title}`}
                    src={poster}
                />
            </div>
            <span>({movie.Year})</span><span>{movieInfo.Runtime}</span>
            <p>Rating: {ratingFixer(movieInfo.imdbRating)}</p>
            <button onClick={() => setDetailToggele(!detailToggle)}
            >Detail</button>
            {detailToggle ? <MovieDetail search={search} detailInfo={movieInfo}/> : ''}
        </div>
    )
}

export default Movie
