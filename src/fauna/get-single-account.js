import { client, q } from './db'

function getSingleAccount(email) {
  return client.query(
    q.Paginate(
      q.Match(
        q.Ref('indexes/all_accounts')))
  )
  .then((response) => {
    const productRefs = response.data

    const getAllProductDataQuery = productRefs.map((ref) => {
      return q.Get(ref)
    })

    return client.query(getAllProductDataQuery).then((data) => {
      return data.filter(account => account.data.email === email)
    })
  })
  .catch((error) => console.log('error', error.message));
}

export default getSingleAccount;
