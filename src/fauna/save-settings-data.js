import { client, q } from './db';

function saveSettingsData(data, accountRef) {
  const newData = { data: {} };

  newData.data.settings = data;

  return client
    .query(q.Update(q.Ref(q.Collection('Account'), accountRef), newData))
    .then(ret => ret)
    .catch(error => error);
}

export default saveSettingsData;
