import { useEffect, useState } from 'react';

export const useDebounce = (value) => {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(
        () => {
            // Set debouncedValue to value after the specified delay
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, 1000);
            return () => {
                clearTimeout(handler);
            };
        },
        // Only rerender effect if value changes
        [value]
    );

    return debouncedValue;
};

export const usePagination = (count) => {
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(count / 10);
    function next() {
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    }
    function prev() {
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    }
    return {
        next,
        prev,
        currentPage,
        maxPage: Number.isNaN(maxPage) ? 0 : maxPage,
        setCurrentPage,
        isNext: currentPage !== 1 && currentPage === maxPage,
        isPrev: currentPage === 1,
    };
};
