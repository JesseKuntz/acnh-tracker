const faunadb = require('faunadb');
/* configure faunaDB Client with our secret */
const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.PREACT_APP_FAUNADB_CLIENT_KEY,
});
export { q, client };
