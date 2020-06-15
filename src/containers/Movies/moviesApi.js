import Configuration from 'services/configutation';
import { get } from 'services/restApiUtils';

function baseUrl(path) {
    const restPrefix = Configuration.get('apiPrefix');
    return `${restPrefix}&${path}`;
}

const Api = {
    getMovies: () => {
        return get(baseUrl('s=batman&page=5'));
    },
};

export default Api;
