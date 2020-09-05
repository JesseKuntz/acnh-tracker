import { client, q } from './db';

function getSpecimenData() {
  return client
    .query(q.Get(q.Ref(q.Collection('Specimens'), '275853419497914898')))
    .then(ret => ret.data);
}

export default getSpecimenData;
