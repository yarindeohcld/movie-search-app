import Configuration from 'services/configutation';
import { get } from 'services/restApiUtils';

function baseUrl(path) {
    const restPrefix = Configuration.get('apiPrefix');
    return `${restPrefix}&${path}`;
}

const Api = {
    getMovies: (path) => {
        return get(baseUrl(path));
    },
};

export default Api;
