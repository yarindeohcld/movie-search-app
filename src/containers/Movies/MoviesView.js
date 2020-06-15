import React from 'react';

import { useMovies } from 'containers/Movies/moviesHooks';

export const MoviesView = () => {
    const { movies } = useMovies();
    return (
        <div>
            Movies View
            {movies &&
                Object.keys(movies).map((key) => (
                    <div key={`${movies[key].imdbID}`}>{movies[key].Title}</div>
                ))}
        </div>
    );
};
