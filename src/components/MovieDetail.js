import React from 'react'
import Rating from './Rating';

const MovieDetail = ({detailInfo : {
    Director,
    Actors,
    Ratings
}, search}) => {
    return (
        <div>
            <p>Director: 
                <a href="#!" 
                    onClick={() => search(Director)}>
                    {Director}
                </a>
            </p>
            <p>Actors:{Actors}</p>
            {Ratings.length > 0 ? (
                Ratings.map(rating => (
                    <Rating key={rating.Source} rating={rating} />
                ))
            ) : ''}
        </div>
    )
}

export default MovieDetail
