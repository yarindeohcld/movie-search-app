import React from 'react';

import { MovieTile } from './MovieTile';

export const MoviesGrid = ({ movies }) => {
    return (
        <div className="movies-grid">
            {movies &&
                Object.keys(movies).map((key) => (
                    <MovieTile
                        key={`${movies[key].imdbID}`}
                        title={movies[key].Title}
                        poster={movies[key].Poster}
                    />
                ))}
        </div>
    );
};
