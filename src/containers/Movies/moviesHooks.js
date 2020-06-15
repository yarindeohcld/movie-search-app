import { useEffect, useState, useCallback } from 'react';
import Api from 'containers/Movies/moviesApi';
import { useDebounce, usePagination } from 'services/general/generalHooks';

export const useMovies = () => {
    const [data, setData] = useState();
    const [query, setQuery] = useState('');
    let debouncedQuery = useDebounce(query);
    const {
        next,
        prev,
        currentPage,
        isNext,
        isPrev,
        maxPage,
        setCurrentPage,
    } = usePagination(data && data.totalResults);
    useEffect(() => {
        async function fetchData() {
            setData(
                await Api.getMovies(`s=${debouncedQuery}&page=${currentPage}`)
            );
        }
        fetchData();
    }, [debouncedQuery, currentPage]);
    return {
        movies: data && data.Search,
        setQueryRequest: useCallback(
            (debouncedQuery) => {
                setQuery(debouncedQuery);
                // Clear page state when re searching new title
                setCurrentPage(1);
            },
            [debouncedQuery]
        ),
        totalPages: data && data.totalResults,
        currentPage,
        next,
        maxPage,
        prev,
        isNext,
        isPrev,
        error: data && data.Error,
    };
};
