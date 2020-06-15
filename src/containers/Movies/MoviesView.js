import React from 'react';

import { useMovies } from 'containers/Movies/moviesHooks';
import { Pagination } from 'components/Pagination';
import { MoviesGrid } from './components/MoviesGrid';

export const MoviesView = () => {
    const {
        movies,
        setQueryRequest,
        isPrev,
        isNext,
        next,
        prev,
        maxPage,
        currentPage,
    } = useMovies();

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
            <Pagination
                nextPage={next}
                previousPage={prev}
                isPrev={isPrev}
                isNext={isNext}
                currentPage={currentPage}
                maxPage={maxPage}
            />
        </div>
    );
};
