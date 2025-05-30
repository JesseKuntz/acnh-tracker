import { MongoClient } from "mongodb";

exports.handler = async function (event) {
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }
  try {
    const email =
      event.queryStringParameters && event.queryStringParameters.email;

    console.log("email: ", email);

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing email parameter" }),
      };
    }

    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("ac-tracker");

    console.log("db: ", db);

    const account = await db
      .collection("accounts")
      .findOne({ email: decodeURIComponent(email) });

    console.log("account: ", account);

    return {
      statusCode: 200,
      body: JSON.stringify({ data: account }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
