import React from 'react';

export const MovieTile = ({ title, poster }) => {
    return (
        <span className="movie-tile">
            <span className="title">{title}</span>
            {/* TODO:: replace with general const */}
            <img
                src={
                    poster ||
                    'https://placehold.it/198x264&text=Image+Not+Found'
                }
                style={{ width: 200, height: 300 }}
            />
        </span>
    );
};
