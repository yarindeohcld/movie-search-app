import React from 'react';

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
                        poster === 'N/A'
                            ? 'https://placehold.it/198x264&text=Image+Not+Found'
                            : poster
                    })`,
                    width: 200,
                    height: 300,
                }}
            />
        </div>
    );
};
