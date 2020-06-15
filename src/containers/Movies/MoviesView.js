import React from 'react';

import { useMovies } from 'containers/Movies/moviesHooks';
import { MoviesGrid } from './components/MoviesGrid';

export const MoviesView = () => {
    const { movies, setQueryRequest } = useMovies();
    
    return (
        <div className="movies-view">
            Movies View
            <div className="search">
                <input
                    placeholder="search"
                    onChange={(event) => {
                        setQueryRequest(event.target.value);
                    }}
                />
            </div>
            <MoviesGrid movies={movies} />
        </div>
    );
};
