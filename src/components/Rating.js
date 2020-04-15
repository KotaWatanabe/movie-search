import React from 'react'

const Rating = ({rating: {
    Source,
    Value
}}) => 
    <ul>
        <li>
            Source{Source} - {Value}
        </li>
    </ul>
export default Rating
