import { client, q } from './db'

function saveCatchData(data, accountRef, type) {
  const newData = { data: {} };

  newData['data'][type] = data;

  return client.query(
    q.Update(
      q.Ref(q.Collection('Account'), accountRef),
      newData,
    )
  )
  .then((ret) => ret)
  .catch((error) => error);
}

export default saveCatchData;
