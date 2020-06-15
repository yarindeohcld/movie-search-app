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
            {maxPage && (
                <React.Fragment>
                    {currentPage} out of {maxPage}
                </React.Fragment>
            )}
            <button onClick={() => nextPage()} disabled={isNext}>
                {'>'}
            </button>
        </div>
    );
};
