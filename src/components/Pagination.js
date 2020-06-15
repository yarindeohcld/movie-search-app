import React from 'react';

export const Pagination = ({
    nextPage,
    previousPage,
    isPrev,
    isNext,
    maxPage,
    currentPage,
}) => {
    return (
        <div className="pagination">
            <button onClick={() => previousPage()} disabled={isPrev}>
                {'<'}
            </button>
            {!!maxPage && (
                <h3>
                    {currentPage} out of {maxPage}
                </h3>
            )}
            <button onClick={() => nextPage()} disabled={isNext}>
                {'>'}
            </button>
        </div>
    );
};
