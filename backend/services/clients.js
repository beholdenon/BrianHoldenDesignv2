var client = require('./contentfulClient').client;

function getClients (query) {
  query = query || {}
  query.content_type = 'client';
  query.include = 10;
  query.order = "fields.order";
  return client.getEntries(query);
}
module.exports = {
  getClients
}
