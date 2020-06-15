import React from 'react';

import imdb from 'resources/imdb.png';

export const Header = () => {
    return (
        <div className="main-header">
            <img src={imdb} />
        </div>
    );
};
