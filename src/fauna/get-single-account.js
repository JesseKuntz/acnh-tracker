import { client, q } from './db';

function getSingleAccount(email) {
  return client
    .query(q.Paginate(q.Match(q.Index('account_by_email'), email)))
    .then(response => {
      const accounts = response.data;

      const getAccountQuery = accounts.map(ref => {
        return q.Get(ref);
      });

      return client.query(getAccountQuery).then(data => {
        return data[0];
      });
    })
    .catch((error) => console.log("error", error.message)); // eslint-disable-line
}

export default getSingleAccount;
