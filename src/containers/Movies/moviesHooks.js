import { useEffect, useState } from 'react';
import Api from 'containers/Movies/moviesApi';

export const useMovies = () => {
    const [data, setData] = useState();
    useEffect(() => {
        async function fetchData() {
            setData(await Api.getMovies());
        }
        fetchData();
    }, []);
    return {
        movies: data && data.Search,
    };
};
