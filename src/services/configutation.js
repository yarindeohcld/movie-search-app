const configData = {
    // TODO:: needs to store it under env var -> url and apikey need to be private
    defaultApiPrefix: 'http://www.omdbapi.com/?apikey=157f34ed',
};

class Configuration {
    set(key, value) {
        const prev = configData[key];
        configData[key] = value;
        return prev;
    }
    get(key) {
        return configData[key];
    }
}

const configuration = new Configuration();

(function setDefaultRestPrefixes(config) {
    config.set('apiPrefix', config.get('defaultApiPrefix'));
})(configuration);

export default configuration;
