import { useEffect, useState } from 'react';
import Api from 'containers/Movies/moviesApi';

export const useMovies = () => {
    const [data, setData] = useState();
    const [query, setQuery] = useState();
    useEffect(() => {
        async function fetchData() {
            setData(await Api.getMovies(query || ''));
        }
        fetchData();
    }, [query]);
    return {
        movies: data && data.Search,

        setQueryRequest: setQuery,
    };
};


