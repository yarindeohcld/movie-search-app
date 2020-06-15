import React from 'react';

import 'resources/scss/style.scss';
import { MoviesView } from 'containers/Movies/MoviesView';

export const App = () => {
    return (
        <React.Fragment>
            <MoviesView />
        </React.Fragment>
    );
};
