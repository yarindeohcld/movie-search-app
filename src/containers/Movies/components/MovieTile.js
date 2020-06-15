import React from 'react';

import { NOT_FOUND_PLACEHOLDER } from 'services/general/generalConstants';

export const MovieTile = ({ title, poster, year }) => {
    return (
        <div className="movie">
            <div className="title">
                {title}, {year}
            </div>
            <div
                className="movie-tile"
                style={{
                    backgroundImage: `url(${
                        poster === 'N/A' ? NOT_FOUND_PLACEHOLDER : poster
                    })`,
                    width: 200,
                    height: 300,
                }}
            />
        </div>
    );
};
