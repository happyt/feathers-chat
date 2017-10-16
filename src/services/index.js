const jabz = require('./jabz/jabz.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(jabz);
};
