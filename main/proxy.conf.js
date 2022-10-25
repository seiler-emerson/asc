const PROXY_CONFIG = [
    {
        context: [''],
        target: 'https://aesculapius-scheduling-center.herokuapp.com/',
        secure: false,
        logLevel : 'debug'
    }
];

module.exports = PROXY_CONFIG;