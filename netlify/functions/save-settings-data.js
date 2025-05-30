import { MongoClient } from "mongodb";

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }
  try {
    const { data, email } = JSON.parse(event.body);

    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("ac-tracker");

    await db
      .collection("accounts")
      .updateOne({ email }, { $set: { settings: data } });

    const updatedAccount = await db.collection("accounts").findOne({ email });

    return {
      statusCode: 200,
      body: JSON.stringify({ data: updatedAccount }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
