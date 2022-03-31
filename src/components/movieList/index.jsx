import React from 'react';
import Movies from '../movies';

const MovieList = ({movies}) => (
    <ul>
        {
            movies.map(movie => 
        <div className='container'>
            <Movies 
            key={movie.title}
            title={movie.title}
            poster={movie.poster}
            year={movie.year}
            rating={movie.rating}
            director={movie.director}
            genre={movie.genre}
            cast={movie.cast}
            />
        </div>
            )
        }
            
    </ul>
);

export default MovieList;