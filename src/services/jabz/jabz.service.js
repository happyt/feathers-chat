// Initializes the `jabz` service on path `/jabz`
const createService = require('feathers-mongodb');
const hooks = require('./jabz.hooks');
const filters = require('./jabz.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/jabz', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('jabz');

  mongoClient.then(db => {
    service.Model = db.collection('jabz');
  });

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
