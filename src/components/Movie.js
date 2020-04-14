import React,{useState, useEffect} from 'react'
import noImage from '../img/no-image.jpg';
import axios from 'axios';

const DEFAULT_PLACEHOLDER_IMAGE = noImage

const Movie = ({movie}) => {
    const poster = movie.Poster === "N/A" ? 
        DEFAULT_PLACEHOLDER_IMAGE 
        : 
        movie.Poster;
    const id = movie.imdbID
    const [movieDetail, setMovieDetail] = useState({});
    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?i=${id}&apikey=1a6bcae6`)
            .then(res => setMovieDetail(res.data))
            .catch(err => {
                console.error(err.message)
            })
    },[])
    console.log(movieDetail)
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
            <span>({movie.Year})</span><span>{movieDetail.Runtime}</span>
            <p>Rating:{movieDetail.imdbRating}</p>
        </div>
    )
}

export default Movie
