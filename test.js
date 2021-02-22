'use strict'

describe('deploy', () => {
    test('app service', () => {
        const data = require('./app-service/deploy.json');
        const params = require('./app-service/params.json');
    });

    test('storage account', () => {
        const data = require('./storage-account/deploy.json');
        const params = require('./storage-account/params.json');
    });
});