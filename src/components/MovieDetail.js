import React from 'react'
import Rating from './Rating';

const MovieDetail = ({detailInfo : {
    Director,
    Actors,
    Ratings
}}) => {
    return (
        <div>
            <p>Director:{Director}</p>
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
