import React from 'react';

import { useMovies } from 'containers/Movies/moviesHooks';
import { Pagination } from 'components/Pagination';
import { MoviesGrid } from './components/MoviesGrid';
import { Header } from 'components/Header';

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
        error,
    } = useMovies();
    return (
        <div className="movies-view">
            <Header />
            <div className="search">
                <input
                    placeholder="search"
                    onChange={(event) => {
                        setQueryRequest(event.target.value);
                    }}
                />
            </div>
            {error && <div className="error">{error}</div>}
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
