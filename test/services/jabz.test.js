const assert = require('assert');
const app = require('../../src/app');

describe('\'jabz\' service', () => {
  it('registered the service', () => {
    const service = app.service('jabz');

    assert.ok(service, 'Registered the service');
  });
});
