import React from 'react';
import Actor from '../actor';

const Movies = ({title, poster, year, rating, director, genre, cast}) => (
    <>
    <h3>{title}</h3>
    <img src={poster} alt="poster" />
    <p>Premiere: {year}</p>
    <p>Rating: {rating}</p>
    <p>Directed by {director}</p>
    <p>Genres: {genre}</p>
    <ul>
    {
            cast.map(item => 
            <Actor 
            name={item.name}
            as={item.as}
            key={item.name}
            />
            )
        }
    </ul>
    </>
);

export default Movies;