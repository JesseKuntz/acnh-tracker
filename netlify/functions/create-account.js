import { MongoClient } from "mongodb";

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }
  try {
    const { email } = JSON.parse(event.body);
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

    await db.collection("accounts").insertOne({
      email,
      settings: {
        subscribed: true,
        northern: true,
      },
      fish: {},
      bug: {},
      "sea-creature": {},
    });
    const account = await db.collection("accounts").findOne({ email });

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
