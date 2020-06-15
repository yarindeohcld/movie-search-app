import Configuration from 'services/configutation';
import { get } from 'services/restApiUtils';

function baseUrl(path) {
    const restPrefix = Configuration.get('apiPrefix');
    return `${restPrefix}&s=${path}&page=1`;
}

const Api = {
    getMovies: (query) => {
        return get(baseUrl(query));
    },
};

export default Api;
