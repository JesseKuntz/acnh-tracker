import { client, q } from './db';

function createAccount(email) {
  return client
    .query(
      q.Create(q.Collection('Account'), {
        data: {
          email,
          settings: {
            subscribed: true,
            northern: true,
          },
          fish: {},
          bug: {},
          'sea-creature': {},
        },
      })
    )
    .then(ret => ret)
    .catch(error => error);
}

export default createAccount;
